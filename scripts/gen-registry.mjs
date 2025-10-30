import fs from "node:fs";
import path from "node:path";
import config from "./registry.config.mjs";

const ROOT = process.cwd();
const OUT_DIR = path.join(ROOT, config.outDir);
const R_DIR = path.join(OUT_DIR, "r");

// Recursively list all files in the project
function listFiles(dir) {
  const results = [];
  
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      // Skip common directories we don't want to scan
      if (entry.isDirectory()) {
        const skipDirs = ['node_modules', '.git', '.next', 'registry', 'temp'];
        if (skipDirs.includes(entry.name)) continue;
        
        results.push(...listFiles(fullPath));
      } else if (entry.isFile()) {
        // Convert to relative path with forward slashes
        const relativePath = path.relative(ROOT, fullPath).split(path.sep).join("/");
        results.push(relativePath);
      }
    }
  } catch (error) {
    console.warn(`Warning: Could not read directory ${dir}:`, error.message);
  }
  
  return results;
}

// Determine file type based on path and extension
function determineFileType(filePath) {
  if (filePath.endsWith(".tsx") && filePath.includes("/components/")) {
    return "registry:component";
  } else if (filePath.includes("/hooks/")) {
    return "registry:hook";
  } else if (filePath.includes("/types/")) {
    return "registry:types";
  } else if (filePath.includes("/scripts/")) {
    return "registry:script";
  }
  
  return "registry:lib";
}

// Build registry JSON for a single component
function buildComponentJSON(allFiles, componentConfig, allComponents) {
  const { include = [], exclude = [] } = componentConfig;
  const matchedFiles = new Set();

  // Find files matching include patterns but not exclude patterns
  for (const file of allFiles) {
    const isIncluded = include.some(pattern => pattern.test(file));
    if (!isIncluded) continue;
    
    const isExcluded = exclude.some(pattern => pattern.test(file));
    if (isExcluded) continue;
    
    matchedFiles.add(file);
  }

  if (matchedFiles.size === 0) {
    console.warn(`Warning: No files found for component '${componentConfig.name}'`);
  }

  // Transform files for registry format (shadcn/ui compatible)
  const files = [...matchedFiles].sort().map(sourcePath => {
    const relativePath = config.pathRewriter(sourcePath);
    const fileType = determineFileType(sourcePath);
    
    // Read the actual file content
    let content = "";
    try {
      const fullPath = path.join(ROOT, sourcePath);
      content = fs.readFileSync(fullPath, 'utf8');
    } catch (error) {
      console.warn(`Warning: Could not read file ${sourcePath}:`, error.message);
    }
    
    return {
      type: fileType,
      path: relativePath,      // Relative path for installation (shadcn/ui format)
      content: content         // Actual file content for static registry
    };
  });

  // Merge dependencies
  const dependencies = {
    ...(config.defaults?.dependencies ?? {}),
    ...(componentConfig.dependencies ?? {})
  };

  // Resolve registry dependencies to full URLs
  const registryDependencies = (componentConfig.registryDependencies ?? [])
    .map(shortName => {
      const dep = allComponents.find(c => c.shortName === shortName);
      return dep ? `${config.baseUrl}/r/${dep.fileName.replace('.json', '')}` : shortName;
    });

  return {
    name: componentConfig.name,
    type: componentConfig.type || "registry:lib",
    dependencies: Object.entries(dependencies).map(([name, version]) => `${name}@${version}`),
    registryDependencies,
    files
  };
}

// Main execution
function main() {
  console.log("🚀 Generating component registry...");
  
  // Ensure output directories exist
  fs.mkdirSync(R_DIR, { recursive: true });

  // Scan project files
  console.log("📁 Scanning project files...");
  const allFiles = listFiles(ROOT);
  console.log(`Found ${allFiles.length} files`);

  // Prepare component configs with short names for dependency resolution
  const components = config.items.map(item => ({
    ...item,
    shortName: item.fileName.replace(/\.json$/, "")
  }));

  // Generate each component JSON
  console.log("🔧 Building component definitions...");
  const generatedComponents = components.map(component => {
    console.log(`  - ${component.name}`);
    return buildComponentJSON(allFiles, component, components);
  });

  // Write individual component files
  generatedComponents.forEach((componentData, index) => {
    const fileName = components[index].fileName;
    const outputPath = path.join(R_DIR, fileName);
    fs.writeFileSync(outputPath, JSON.stringify(componentData, null, 2));
  });

  // Generate registry manifest
  const manifest = {
    registry: generatedComponents.map((component, index) => ({
      name: component.name,
      item: `${config.baseUrl}/r/${components[index].shortName}`,
      file: `r/${components[index].fileName}`,
      type: component.type
    }))
  };

  fs.writeFileSync(
    path.join(OUT_DIR, "registry.json"),
    JSON.stringify(manifest, null, 2)
  );

  console.log(`✅ Generated ${generatedComponents.length} registry components`);
  console.log(`📦 Registry available at: ${config.baseUrl}`);
  
  // Log installation commands
  console.log("\n📋 Installation commands:");
  generatedComponents.forEach((component, index) => {
    const shortName = components[index].shortName;
    console.log(`  npx shadcn@latest add ${config.baseUrl}/r/${shortName}`);
  });
}

main();