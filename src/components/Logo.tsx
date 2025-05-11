
import { useState, useEffect } from "react";

export function Logo({ visible }: { visible: boolean }) {
  return (
    <div 
      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ zIndex: 5 }}
    >
      <div className="text-center">
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white">
          NAKSHA
        </h1>
        <p className="text-lg md:text-xl text-white/80 mt-2">
          Architectural Excellence
        </p>
      </div>
    </div>
  );
}
