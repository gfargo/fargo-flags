import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    const registryPath = path.join(process.cwd(), 'registry', 'registry.json');
    
    if (!fs.existsSync(registryPath)) {
      return NextResponse.json({ 
        error: 'Registry not found. Run `npm run gen:registry` to generate the registry.' 
      }, { status: 404 });
    }
    
    const registryContent = fs.readFileSync(registryPath, 'utf-8');
    const registry = JSON.parse(registryContent);
    
    return NextResponse.json(registry, {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Registry error:', error);
    return NextResponse.json({ 
      error: 'Internal server error' 
    }, { status: 500 });
  }
}