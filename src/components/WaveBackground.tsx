import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const WaveBackground = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  // Colors based on theme - navy for light mode, electric blue for dark
  const lineColor = isDark ? "#3A7CBD" : "#040C38";
  const lineOpacity = isDark ? 0.32 : 0.12; // Subtle navy for light mode

  // Generate smooth flowing contour wave paths - mathematical sine/helix style
  const generateContourPaths = () => {
    const paths: JSX.Element[] = [];
    const numLayers = 8; // Number of wave ribbon layers
    const linesPerLayer = 12; // Lines per ribbon layer
    
    for (let layer = 0; layer < numLayers; layer++) {
      const baseY = 80 + layer * 120; // Vertical distribution
      const amplitude = 60 + layer * 15; // Wave height varies per layer
      const frequency = 0.8 + layer * 0.1; // Wave frequency
      const phaseOffset = layer * 0.5; // Phase shift for depth
      
      for (let line = 0; line < linesPerLayer; line++) {
        const lineOffset = line * 8; // Spacing between parallel lines
        const yOffset = baseY + lineOffset;
        
        // Create smooth bezier curve points for flowing contour effect
        const points: string[] = [];
        const segments = 8;
        
        for (let seg = 0; seg <= segments; seg++) {
          const x = (seg / segments) * 2200 - 100;
          const wave1 = Math.sin((seg / segments) * Math.PI * frequency + phaseOffset) * amplitude;
          const wave2 = Math.sin((seg / segments) * Math.PI * frequency * 1.5 + phaseOffset * 0.7) * (amplitude * 0.4);
          const wave3 = Math.cos((seg / segments) * Math.PI * frequency * 0.5 + phaseOffset * 1.2) * (amplitude * 0.3);
          const y = yOffset + wave1 + wave2 + wave3;
          
          if (seg === 0) {
            points.push(`M${x} ${y}`);
          } else {
            // Smooth curve to next point
            const prevX = ((seg - 1) / segments) * 2200 - 100;
            const cpX = (prevX + x) / 2;
            points.push(`S${cpX} ${y} ${x} ${y}`);
          }
        }
        
        const pathOpacity = lineOpacity * (1 - line * 0.05) * (1 - layer * 0.08);
        
        paths.push(
          <path
            key={`contour-${layer}-${line}`}
            d={points.join(' ')}
            fill="none"
            stroke={lineColor}
            strokeWidth="1.1"
            opacity={Math.max(pathOpacity, isDark ? 0.15 : 0.04)}
            strokeLinecap="round"
          />
        );
      }
    }
    
    return paths;
  };

  // Generate crossing/overlapping wave ribbons for depth
  const generateCrossingWaves = () => {
    const paths: JSX.Element[] = [];
    const numRibbons = 5;
    const linesPerRibbon = 8;
    
    for (let ribbon = 0; ribbon < numRibbons; ribbon++) {
      const baseY = 150 + ribbon * 180;
      const amplitude = 100 + ribbon * 20;
      const direction = ribbon % 2 === 0 ? 1 : -1; // Alternating direction
      
      for (let line = 0; line < linesPerRibbon; line++) {
        const lineOffset = line * 10 * direction;
        
        // Create helix-like twisted wave path
        const pathPoints: string[] = [];
        const segments = 10;
        
        for (let seg = 0; seg <= segments; seg++) {
          const t = seg / segments;
          const x = t * 2200 - 100;
          
          // Complex wave function for helix/twisted ribbon effect
          const primaryWave = Math.sin(t * Math.PI * 2 + ribbon * 0.8) * amplitude;
          const secondaryWave = Math.sin(t * Math.PI * 3 + ribbon * 1.2) * (amplitude * 0.3);
          const tertiaryWave = Math.cos(t * Math.PI * 1.5 + ribbon * 0.5) * (amplitude * 0.2);
          
          const y = baseY + lineOffset + primaryWave + secondaryWave + tertiaryWave;
          
          if (seg === 0) {
            pathPoints.push(`M${x} ${y}`);
          } else {
            const prevT = (seg - 1) / segments;
            const prevX = prevT * 2200 - 100;
            const prevPrimaryWave = Math.sin(prevT * Math.PI * 2 + ribbon * 0.8) * amplitude;
            const prevSecondaryWave = Math.sin(prevT * Math.PI * 3 + ribbon * 1.2) * (amplitude * 0.3);
            const prevTertiaryWave = Math.cos(prevT * Math.PI * 1.5 + ribbon * 0.5) * (amplitude * 0.2);
            const prevY = baseY + lineOffset + prevPrimaryWave + prevSecondaryWave + prevTertiaryWave;
            
            // Bezier curve for smooth transition
            const cpX1 = prevX + (x - prevX) * 0.5;
            const cpX2 = prevX + (x - prevX) * 0.5;
            pathPoints.push(`C${cpX1} ${prevY} ${cpX2} ${y} ${x} ${y}`);
          }
        }
        
        const pathOpacity = lineOpacity * (1 - line * 0.08) * (1 - ribbon * 0.1);
        
        paths.push(
          <path
            key={`crossing-${ribbon}-${line}`}
            d={pathPoints.join(' ')}
            fill="none"
            stroke={lineColor}
            strokeWidth="1"
            opacity={Math.max(pathOpacity, isDark ? 0.12 : 0.03)}
            strokeLinecap="round"
          />
        );
      }
    }
    
    return paths;
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary contour wave layers */}
        <g className="wave-pattern-primary">
          {generateContourPaths()}
        </g>
        
        {/* Crossing wave ribbons for depth */}
        <g className="wave-pattern-secondary">
          {generateCrossingWaves()}
        </g>
      </svg>
    </div>
  );
};

export default WaveBackground;
