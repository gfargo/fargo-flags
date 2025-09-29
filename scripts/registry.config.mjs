export default {
  outDir: "registry",
  baseUrl: process.env.NEXT_PUBLIC_REGISTRY_URL || "http://localhost:3000/api/registry",
  
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
  
  // Path rewriter for installation targets
  pathRewriter: (fromPath) => {
    // Transform source paths to installation paths
    const mappings = {
      'src/lib/': '@/lib/',
      'src/components/': '@/components/',
      'src/hooks/': '@/hooks/',
      'src/types/': '@/types/',
    };
    
    for (const [from, to] of Object.entries(mappings)) {
      if (fromPath.startsWith(from)) {
        return fromPath.replace(from, to);
      }
    }
    
    return fromPath.replace('src/', '@/');
  },

  // Component definitions
  items: [
    {
      name: "fargo-flags-core",
      fileName: "core.json",
      type: "registry:lib",
      dependencies: {
        "zod": "^3.22.0"
      },
      include: [
        /^src\/lib\/flags\/kit\.ts$/,
        /^src\/lib\/flags\/runtime\.ts$/,
        /^src\/lib\/utils\.ts$/,
      ],
      exclude: [
        /^src\/lib\/flags\/registry\.config\.ts$/,
        /^src\/lib\/flags\/defs\//,
      ],
      registryDependencies: [],
    },
    {
      name: "fargo-flags-react",
      fileName: "react.json",
      type: "registry:component",
      include: [
        /^src\/components\/flags\/flags-provider\.tsx$/,
        /^src\/components\/flags\/flag\.tsx$/,
      ],
      exclude: [
        /^src\/components\/flags\/flags-test-provider\.tsx$/,
      ],
      registryDependencies: ["core"],
    },
    {
      name: "fargo-flags-testing",
      fileName: "testing.json",
      type: "registry:lib",
      include: [
        /^src\/components\/flags\/flags-test-provider\.tsx$/,
      ],
      registryDependencies: ["core", "react"],
    },
    {
      name: "fargo-flags-cli",
      fileName: "cli.json",
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
      ],
      registryDependencies: ["core"],
    },
    {
      name: "fargo-flags-complete",
      fileName: "complete.json",
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
        /^src\/lib\/utils\.ts$/,
        /^src\/components\/flags\/flags-provider\.tsx$/,
        /^src\/components\/flags\/flag\.tsx$/,
        /^src\/components\/flags\/flags-test-provider\.tsx$/,
        /^scripts\/create-flag\.ts$/,
        /^scripts\/check-flags-registry\.ts$/,
      ],
      exclude: [
        /^src\/lib\/flags\/registry\.config\.ts$/,
        /^src\/lib\/flags\/defs\//,
      ],
      registryDependencies: [],
    },
  ],
};