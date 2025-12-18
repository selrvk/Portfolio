"use client";

import dynamic from "next/dynamic";

const FaultyTerminal = dynamic(
  () => import("./FaultyTerminal"),
  { ssr: false }
);

export default function FaultyTerminalWrapper() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <FaultyTerminal
        scale={2}
        gridMul={[2, 1]}
        digitSize={1.2}
        timeScale={0.5}
        pause={false}
        scanlineIntensity={0.5}
        glitchAmount={0.5}
        flickerAmount={0.5}
        noiseAmp={1}
        chromaticAberration={0}
        dither={0}
        curvature={0}
        tint="#172554"
        mouseReact={false}
        brightness={0.6}
      />
    </div>
  );
}
