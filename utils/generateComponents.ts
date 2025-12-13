import fs from 'fs';
import path from 'path';

// Helper: Convert dash-case to PascalCase (e.g., arrow-up -> ArrowUp)
const toPascalCase = (string: string): string => {
  const camelCased = string.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
};

// Template: Modern React Component - PRESERVING INLINE SVG STYLING
const createTemplate = (componentName: string, svgContent: string, viewBox: string) => {
  return `import React, { forwardRef } from 'react';

// Using React.SVGProps<SVGSVGElement> to allow all native SVG attributes,
// plus custom optional props for size, color, and title for convenience.
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // Overrides inherited currentColor if provided
  size?: string | number;
  title?: string;
}

const ${componentName} = forwardRef<SVGSVGElement, IconProps>(
  ({ color, size = 20, title, className, style, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="${viewBox}"
        // The default SVG attributes (fill, stroke, strokeWidth, etc.) 
        // are REMOVED here so the raw SVG paths determine the appearance.
        className={className}
        style={color ? { color, ...style } : style} // Apply color via CSS property for inheritance if set
        {...props}
      >
        {/* If the original SVG has complex colors/fills, we want them here. */}
        {title && <title>{title}</title>}
        ${svgContent}
      </svg>
    );
  }
);

${componentName}.displayName = '${componentName}';

export default ${componentName};
`;
};

// Paths
const ICONS_DIR = path.join(__dirname, '../utils/svgicons');
const SRC_DIR = path.join(__dirname, '../src');
const COMPONENTS_FILE = path.join(__dirname, 'components.ts');

const components: string[] = [];

if (!fs.existsSync(SRC_DIR)) {
  fs.mkdirSync(SRC_DIR);
}

fs.readdir(ICONS_DIR, (err, files) => {
  if (err) {
    console.error("Could not list the directory.", err);
    process.exit(1);
  }

  files.forEach((file) => {
    if (path.extname(file) !== '.svg') return;

    const componentName = toPascalCase(file.replace(".svg", ""));
    const filePath = path.join(ICONS_DIR, file);
    const svg = fs.readFileSync(filePath, 'utf8');

    // 1. Robust ViewBox Extraction
    const viewBoxMatch = svg.match(/viewBox="([^"]*)"/);
    const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 16 16';

    // 2. Robust Content Extraction (Handles nested SVGs)
    const svgStart = svg.indexOf('<svg');
    const svgEnd = svg.lastIndexOf('</svg>');
    
    if (svgStart === -1 || svgEnd === -1) {
        return;
    }

    const svgTagEnd = svg.indexOf('>', svgStart);
    let innerContent = svg.slice(svgTagEnd + 1, svgEnd);

    // 3. Clean and React-ify Attributes
    innerContent = innerContent
      .replace(/class=/g, "className=")
      .replace(/stroke-linejoin/g, "strokeLinejoin")
      .replace(/stroke-width/g, "strokeWidth")
      .replace(/strokewidth/g, "strokeWidth")
      .replace(/stroke-miterlimit/g, "strokeMiterlimit")
      .replace(/stroke-linecap/g, "strokeLinecap")
      .replace(/fill-rule/g, "fillRule")
      .replace(/clip-rule/g, "clipRule")
      .replace(/cliprule/g, "clipRule")
      .replace(/fill-opacity/g, "fillOpacity")
      .replace(/stop-color/g, "stopColor")
      .replace(/clip-path/g, "clipPath")
      .replace(/style="[^"]*"/g, "") // We remove inline styles to prevent string-prop errors
      .replace(/<title>.*<\/title>/g, ""); // Remove title tags

    // Important: We stop replacing 'fill="#000"' with 'currentColor' here, 
    // letting the original SVG coloring stay intact.

    const componentCode = createTemplate(componentName, innerContent.trim(), viewBox);
    
    fs.writeFile(path.join(SRC_DIR, `${componentName}.tsx`), componentCode, (err) => {
      if (err) console.error(`Error writing ${componentName}:`, err);
    });

    components.push(componentName);
  });

  // 4. Generate utils/components.ts
  const componentsContent = `export default ${JSON.stringify(components, null, 2)};\n`;
  fs.writeFile(COMPONENTS_FILE, componentsContent, (err) => {
    if (err) console.log(err);
  });

  // 5. Generate src/index.ts
  const indexContent = components
    .map((c) => `export { default as ${c} } from './${c}';`)
    .join("\n");
  
  fs.writeFile(path.join(SRC_DIR, 'index.ts'), indexContent + '\n', (err) => {
    if (err) console.log(err);
    else console.log("Successfully generated components.");
  });
});