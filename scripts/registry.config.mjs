export default {
  outDir: "registry",
  baseUrl: process.env.NEXT_PUBLIC_REGISTRY_URL || "https://flags.griffen.codes",
  
  // Global dependencies shared across components
  defaults: {
    dependencies: {
      "react": "^19.1.0",
      "lucide-react": "^0.400.0",
      "class-variance-authority": "^0.7.1",
      "clsx": "^2.1.1",
      "tailwind-merge": "^2.5.4",
    }
  },
  
  // Path rewriter for installation targets (shadcn/ui compatible relative paths)
  pathRewriter: (fromPath) => {
    // Special handling for template files - rename during installation
    if (fromPath === 'src/lib/flags/registry.config.template.ts') {
      return 'lib/flags/registry.config.ts';
    }
    
    // Transform source paths to relative installation paths
    const mappings = {
      'src/lib/': 'lib/',
      'src/components/': 'components/',
      'src/hooks/': 'hooks/',
      'src/types/': 'types/',
      'scripts/': 'scripts/',
    };
    
    for (const [from, to] of Object.entries(mappings)) {
      if (fromPath.startsWith(from)) {
        return fromPath.replace(from, to);
      }
    }
    
    // Fallback: remove src/ prefix for relative paths
    return fromPath.replace(/^src\//, '');
  },

  // Component definitions
  items: [
    {
      name: "flags-core",
      fileName: "flags-core.json",
      type: "registry:lib",
      dependencies: {
        "zod": "^3.22.0"
      },
      include: [
        /^src\/lib\/flags\/kit\.ts$/,
        /^src\/lib\/flags\/runtime\.ts$/,
        /^src\/lib\/flags\/registry\.config\.template\.ts$/,
        /^src\/components\/flags\/flags-provider\.tsx$/,
      ],
      exclude: [
        /^src\/lib\/flags\/registry\.config\.ts$/,
        /^src\/lib\/flags\/defs\//,
      ],
      registryDependencies: [],
    },
    {
      name: "flags-flag",
      fileName: "flags-flag.json",
      type: "registry:component",
      include: [
        /^src\/components\/flags\/flag\.tsx$/,
      ],
      registryDependencies: ["flags-core"],
    },
    {
      name: "flags-test-provider",
      fileName: "flags-test-provider.json",
      type: "registry:lib",
      include: [
        /^src\/components\/flags\/flags-test-provider\.tsx$/,
      ],
      registryDependencies: ["flags-core"],
    },
    {
      name: "flags-cli",
      fileName: "flags-cli.json",
      type: "registry:lib",
      dependencies: {
        "tsx": "^4.19.2",
        "prompts": "^2.4.2",
        "fast-glob": "^3.3.2",
        "prettier": "^3.4.2",
      },
      include: [
        /^scripts\/create-flag\.ts$/,
        /^scripts\/check-flags-registry\.ts$/,
        /^scripts\/path-resolver\.ts$/,
      ],
      registryDependencies: ["flags-core"],
    },
    {
      name: "flags-complete",
      fileName: "flags-complete.json",
      type: "registry:lib",
      dependencies: {
        "zod": "^3.22.0",
        "tsx": "^4.19.2",
        "prompts": "^2.4.2",
        "fast-glob": "^3.3.2",
        "prettier": "^3.4.2",
      },
      include: [
        /^src\/lib\/flags\/kit\.ts$/,
        /^src\/lib\/flags\/runtime\.ts$/,
        /^src\/lib\/flags\/registry\.config\.template\.ts$/,
        /^src\/lib\/utils\.ts$/,
        /^src\/components\/flags\/flags-provider\.tsx$/,
        /^src\/components\/flags\/flag\.tsx$/,
        /^src\/components\/flags\/flags-test-provider\.tsx$/,
        /^scripts\/create-flag\.ts$/,
        /^scripts\/check-flags-registry\.ts$/,
        /^scripts\/path-resolver\.ts$/,
      ],
      exclude: [
        /^src\/lib\/flags\/registry\.config\.ts$/,
        /^src\/lib\/flags\/defs\//,
      ],
      registryDependencies: [],
    },
  ],
};