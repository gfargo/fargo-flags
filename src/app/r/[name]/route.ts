import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

type RegistryFile = {
  type: string;
  path: string;
  content?: string;
};

type ComponentData = {
  name: string;
  type: string;
  dependencies: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
};

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  try {
    const { name } = await params;
    
    // Sanitize component name to prevent path traversal
    const sanitizedName = name.replace(/[^a-zA-Z0-9-]/g, '');
    if (!sanitizedName || sanitizedName !== name) {
      return NextResponse.json({ 
        error: 'Invalid component name' 
      }, { status: 400 });
    }
    
    // Load component definition
    const componentPath = path.join(process.cwd(), 'registry', 'r', `${sanitizedName}.json`);
    if (!fs.existsSync(componentPath)) {
      return NextResponse.json({ 
        error: `Component '${sanitizedName}' not found` 
      }, { status: 404 });
    }
    
    const componentData = JSON.parse(
      fs.readFileSync(componentPath, 'utf-8')
    ) as ComponentData;
    
    // Use pre-populated file contents from registry (no need to read from disk)
    const populatedFiles = componentData.files.map((file: RegistryFile) => {
      // If content is already populated in the registry file, use it
      if (file.content) {
        return file;
      }
      
      // Fallback: try to read from source file (for backward compatibility)
      // Convert relative path back to source path for reading
      let sourcePath = file.path;
      if (file.path.startsWith('components/')) {
        sourcePath = file.path.replace('components/', 'src/components/');
      } else if (file.path.startsWith('lib/')) {
        sourcePath = file.path.replace('lib/', 'src/lib/');
      } else if (!file.path.startsWith('src/') && !file.path.startsWith('scripts/')) {
        sourcePath = `src/${file.path}`;
      }
      
      const fullSourcePath = path.join(process.cwd(), sourcePath);
      let content = '';
      
      if (fs.existsSync(fullSourcePath)) {
        content = fs.readFileSync(fullSourcePath, 'utf-8');
      } else {
        console.warn(`Source file not found: ${fullSourcePath}`);
      }
      
      return { ...file, content };
    });
    
    const response: ComponentData = {
      ...componentData,
      files: populatedFiles
    };
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=1800, s-maxage=1800',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Component error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}
