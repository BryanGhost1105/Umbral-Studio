/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";

export function UmbralLogoMark({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Shiny metal gradient for Front Left Panel */}
        <linearGradient id="frontPanelGrad" x1="11" y1="12" x2="26" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#111111" />
          <stop offset="100%" stopColor="#444446" />
        </linearGradient>

        <linearGradient id="frontPanelWhiteGrad" x1="11" y1="12" x2="26" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#F9F9FB" />
          <stop offset="100%" stopColor="#E2E2E6" />
        </linearGradient>

        {/* Smoke gradient for Back Right Panel */}
        <linearGradient id="backPanelGrad" x1="24" y1="18" x2="39" y2="33" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8E8E93" stopOpacity="0.85" />
          <stop offset="60%" stopColor="#3A3A3C" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#1C1C1E" stopOpacity="0.3" />
        </linearGradient>

        {/* Soft shadow to pop the front panel */}
        <filter id="smoothShadow" x="-15%" y="-15%" width="130%" height="130%" filterUnits="userSpaceOnUse">
          <feDropShadow dx="-1.5" dy="2.5" stdDeviation="1.8" floodColor="#000000" floodOpacity="0.18" />
        </filter>
      </defs>

      {/* 1. Back Right Panel: Semi-transparent dark grey projection slab */}
      <path
        d="M 23.5,17.2 L 35.8,20.2 C 36.6,20.4 37.2,20.9 37.2,21.6 L 37.2,28.4 C 37.2,29.1 36.6,29.6 35.8,29.8 L 23.5,32.8 C 22.7,33.0 22.2,32.5 22.2,31.8 L 22.2,18.2 C 22.2,17.5 22.7,17.0 23.5,17.2 Z"
        fill="url(#backPanelGrad)"
      />

      {/* 2. Middle overlap glass connector */}
      <path
        d="M 18.5,20.5 L 27.5,23.1 C 28.1,23.3 28.5,23.8 28.5,24.4 L 28.5,29.6 C 28.5,30.2 28.1,30.5 28.5,30.7 L 18.5,33.3 C 17.9,33.5 17.5,33.1 17.5,32.5 L 17.5,21.5 C 17.5,20.9 17.9,20.4 18.5,20.5 Z"
        fill="#FFFFFF"
        fillOpacity="0.45"
        stroke="#FFFFFF"
        strokeWidth="0.4"
        strokeOpacity="0.75"
      />

      {/* 3. Front Left Panel: Strong white perspective projection slab */}
      <path
        d="M 11.5,11.5 L 24.5,15.5 C 25.3,15.7 25.8,16.4 25.8,17.2 L 25.8,34.8 C 25.8,35.6 25.3,36.3 25.5,36.5 L 11.5,40.5 C 10.7,40.7 10.2,40.1 10.2,39.3 L 10.2,12.7 C 10.2,11.9 10.7,11.3 11.5,11.5 Z"
        fill="url(#frontPanelWhiteGrad)"
        filter="url(#smoothShadow)"
      />
    </svg>
  );
}

export function UmbralLogo() {
  return (
    <div className="flex items-center gap-2.5">
      {/* Black ambient block containing the 3D projection panels */}
      <div className="w-11 h-11 bg-neutral-950 rounded-xl flex items-center justify-center shadow-lg shadow-neutral-950/20 border border-neutral-900 overflow-hidden">
        <UmbralLogoMark className="w-9 h-9" />
      </div>

      <div className="flex flex-col leading-none select-none">
        <span className="font-display font-extrabold text-[15px] sm:text-[16px] tracking-widest text-neutral-900 uppercase">
          Umbral
        </span>
        <span className="font-sans text-[8px] font-bold tracking-[0.45em] uppercase text-neutral-400 pl-[1px] mt-0.5">
          Studio
        </span>
      </div>
    </div>
  );
}
