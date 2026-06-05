/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import { 
  CreditCard, 
  ArrowRight, 
  ChevronRight, 
  Compass, 
  Play, 
  Sparkles, 
  Activity, 
  Smartphone, 
  DollarSign, 
  ArrowUpRight, 
  MousePointer 
} from "lucide-react";

export function DesignsSlideshow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });

  // Columns for the masonry layout
  // Column 1 slowly scrolls up, Column 2 slowly scrolls down
  return (
    <section id="work-slideshow" className="py-12 bg-white overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Core slideshow panel taking up about 80vh of vertical viewport space */}
        <div 
          ref={containerRef}
          className="h-[75vh] sm:h-[80vh] min-h-[500px] max-h-[780px] w-full rounded-2xl md:rounded-[2.5rem] overflow-hidden relative bg-[#1c1c1e] border border-neutral-900 shadow-2xl select-none group/slideshow shadow-neutral-950/40"
        >
          {/* Animated Ambient Spotlight/Gradients */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />
          
          {/* Subtle noise pattern overlay to give the "video" a film-grain, photorealistic state */}
          <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,1),transparent)] blend-mode-overlay" />

          {/* Triple-track auto-sliding columns resembling a high-fidelity video loop */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 md:p-10 overflow-hidden">
            
            {/* COLUMN 1: Upward Infinite Scroll */}
            <div className="hidden md:flex flex-col gap-6 animate-infinite-scroll-up relative">
              <ShowcaseTile className="bg-[#2c2c2e]" type="wallet" />
              <ShowcaseTile className="bg-[#121214]" type="piggy" />
              <ShowcaseTile className="bg-[#2c2c2e]" type="wallet" />
              <ShowcaseTile className="bg-[#121214]" type="piggy" />
            </div>

            {/* COLUMN 2: Downward Infinite Scroll (Centered Highlight) */}
            <div className="flex flex-col gap-6 animate-infinite-scroll-down relative">
              <ShowcaseTile className="bg-[#222224]" type="educational" />
              <ShowcaseTile className="bg-[#1c1c1e]" type="toys" />
              <ShowcaseTile className="bg-[#222224]" type="educational" />
              <ShowcaseTile className="bg-[#1c1c1e]" type="toys" />
            </div>

            {/* COLUMN 3: Upward Infinite Scroll */}
            <div className="hidden md:flex flex-col gap-6 animate-infinite-scroll-up relative">
              <ShowcaseTile className="bg-[#1e1e21]" type="analytics" />
              <ShowcaseTile className="bg-[#252529]" type="billing" />
              <ShowcaseTile className="bg-[#1e1e21]" type="analytics" />
              <ShowcaseTile className="bg-[#252529]" type="billing" />
            </div>

          </div>

          {/* Intensely styled cinematic dark overlay with linear gradient fading from bottom and edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/20 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/30 via-transparent to-neutral-950/30 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#1c1c1e] to-transparent pointer-events-none" />

          {/* Play/Control Video Badge Overlay on top left */}
          <div className="absolute top-6 left-6 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 bg-neutral-950/80 backdrop-blur-md border border-neutral-800/80 text-white/90 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            <span>Showcase loop • Active preview</span>
          </div>

          {/* Tilted Floating Interactive Badge: "See Recent Work", as pictured in the reference layout */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
            <motion.a
              href="#projects"
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.06, rotate: -4 }}
              whileTap={{ scale: 0.96 }}
              className="px-5 py-3 bg-neutral-950 text-white font-display font-extrabold text-xs tracking-wider rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] shadow-neutral-950/80 border border-neutral-800 flex items-center gap-2 cursor-pointer select-none -rotate-[6deg] group hover:bg-neutral-900 transition-colors"
            >
              <MousePointer size={13} className="text-neutral-400 group-hover:text-white transition-colors" />
              <span>See Recent Work</span>
              <ChevronRight size={13} className="text-neutral-500 group-hover:translate-x-0.5 transition-transform" />
            </motion.a>
          </div>

        </div>

      </div>
    </section>
  );
}

interface ShowcaseTileProps {
  className?: string;
  type: "wallet" | "piggy" | "educational" | "toys" | "analytics" | "billing";
}

function ShowcaseTile({ className = "", type }: ShowcaseTileProps) {
  switch (type) {
    case "wallet":
      return (
        <div className={`p-6 rounded-2xl border border-neutral-800/50 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between text-white relative group cursor-pointer ${className}`}>
          {/* Subtle light reflect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/0 via-white/[0.03] to-white/[0.1] transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center">
                <CreditCard size={15} className="text-indigo-400" />
              </div>
              <div>
                <span className="block font-display font-bold text-xs">Wallet</span>
                <span className="block text-[8px] font-mono uppercase tracking-widest text-neutral-500">Tier Premium</span>
              </div>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">$11,350.90</span>
          </div>

          <div className="my-3 space-y-2 z-10">
            <span className="block text-[8px] font-mono uppercase tracking-widest text-neutral-500">Concierge Active</span>
            <div className="bg-neutral-900/60 p-2 rounded-lg border border-neutral-800/80 flex items-center justify-between">
              <span className="text-[9px] font-medium text-neutral-300">Fast-track checkout route</span>
              <ChevronRight size={10} className="text-neutral-500" />
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-neutral-800/80 pt-3 z-10">
            <span className="text-[9px] text-[#8E8E93]">Client reference #02</span>
            <span className="text-[9px] font-semibold text-neutral-400 group-hover:text-white transition-colors flex items-center gap-1">
              Active <ArrowUpRight size={10} />
            </span>
          </div>
        </div>
      );

    case "piggy":
      return (
        <div className={`p-6 rounded-2xl border border-neutral-800/50 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between text-neutral-800 bg-[#e3ecdf] relative group cursor-pointer ${className}`}>
          {/* Subtle light reflect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-[#9bbfa8]/0 to-[#9bbfa8]/20 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-950/10 flex items-center justify-center">
                <span className="text-sm">🐖</span>
              </div>
              <div>
                <span className="block font-display font-black text-xs text-emerald-950">My Piggy Bank</span>
                <span className="block text-[8px] font-mono uppercase tracking-widest text-emerald-800/60">Weekly Balance</span>
              </div>
            </div>
            <div className="w-4 h-4 rounded-full bg-emerald-900/10 flex items-center justify-center">
              <span className="text-[8px] font-bold">+</span>
            </div>
          </div>

          <div className="my-2 z-10 flex items-end justify-between">
            <div>
              <span className="block text-[8px] font-mono uppercase tracking-widest text-emerald-800/60">Total Goal Saved</span>
              <span className="text-lg font-black tracking-tight text-neutral-900">$20,240</span>
            </div>
            <div className="flex gap-1 items-end h-10">
              <span className="w-2.5 h-6 bg-emerald-900/10 rounded-sm"></span>
              <span className="w-2.5 h-8 bg-emerald-900/20 rounded-sm"></span>
              <span className="w-2.5 h-7 bg-emerald-900/30 rounded-sm"></span>
              <span className="w-2.5 h-9 bg-emerald-950/80 rounded-sm"></span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-emerald-950/10 pt-2 z-10">
            <span className="text-[9px] text-emerald-800">High-fidelity web mockup</span>
            <div className="px-2 py-0.5 bg-white text-emerald-950 text-[9px] font-bold rounded-full">
              SaaS v3
            </div>
          </div>
        </div>
      );

    case "educational":
      return (
        <div className={`p-6 rounded-2xl border border-neutral-800/50 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between text-neutral-100 bg-[#252528] relative group cursor-pointer ${className}`}>
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-pink-500"></span>
              <span className="text-[9px] font-mono uppercase text-neutral-400">Lesson Tracker Dashboard</span>
            </div>
            <span className="text-[9px] px-1.5 py-0.5 bg-neutral-800 border border-neutral-700 rounded text-neutral-300 font-mono">12 / 15 Core</span>
          </div>

          <div className="my-2 space-y-2.5 z-10">
            <h4 className="font-display font-extrabold text-sm text-neutral-100 group-hover:text-neutral-200 transition-colors leading-tight">
              Sales Funnel for The Complete Agency: Advanced Course Guide
            </h4>
            
            <div className="space-y-1">
              <div className="flex justify-between text-[8px] font-mono text-neutral-500">
                <span>COURSE PROGRESSION</span>
                <span>80% COMPLETED</span>
              </div>
              <div className="w-full h-1 bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full bg-pink-500 w-[80%]" />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-neutral-800 pt-2.5 z-10">
            <span className="text-[9px] text-[#8E8E93]">Instructor onboarding UI</span>
            <span className="text-[9px] font-semibold text-neutral-300 group-hover:text-white flex items-center gap-1">
              Interactive <ArrowRight size={10} />
            </span>
          </div>
        </div>
      );

    case "toys":
      return (
        <div className={`p-6 rounded-2xl border border-neutral-800/50 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between text-white bg-gradient-to-tr from-[#3b82f6] to-[#6366f1] relative group cursor-pointer ${className}`}>
          {/* Subtle light reflect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.15] transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-center justify-between z-10">
            <span className="font-display font-extrabold text-xs tracking-wider uppercase">Hobby Point.</span>
            <div className="flex gap-1.5 items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span>
              <span className="text-[8px] font-sans font-bold">In Stock</span>
            </div>
          </div>

          <div className="my-2 sm:my-3 z-10 grid grid-cols-2 gap-2">
            {/* Lego Toy Preview Card */}
            <div className="bg-[#0f172a]/75 backdrop-blur-sm p-1.5 rounded-lg border border-white/5 flex flex-col justify-between min-h-[55px]">
              <span className="text-[7px] text-[#8E8E93] font-mono">LEGO BUILDER</span>
              <span className="text-[9px] font-bold text-white leading-none">Collectibles Kit</span>
              <div className="h-1 w-8 bg-yellow-400 rounded-full mt-1.5" />
            </div>

            {/* Longboarding Tracker Card */}
            <div className="bg-[#0f172a]/75 backdrop-blur-sm p-1.5 rounded-lg border border-white/5 flex flex-col justify-between min-h-[55px]">
              <span className="text-[7px] text-pink-400 font-mono uppercase tracking-widest font-black">Longboard</span>
              <span className="text-[9px] font-bold text-white leading-none">Custom Deck</span>
              <span className="text-[8px] text-neutral-400">$189.00</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/10 pt-2 z-10">
            <span className="text-[9px] text-[#cbd5e1]">Creative portfolio display</span>
            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
              <Sparkles size={9} className="text-yellow-300" />
            </div>
          </div>
        </div>
      );

    case "analytics":
      return (
        <div className={`p-6 rounded-2xl border border-neutral-800/50 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between text-white relative group cursor-pointer ${className}`}>
          
          <div className="flex items-center justify-between z-10">
            <div className="flex items-center gap-1.5">
              <Activity size={12} className="text-indigo-400" />
              <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">Metrics Analytics</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          </div>

          <div className="my-2 space-y-1.5 z-10">
            <span className="block text-[8px] font-mono text-neutral-500 uppercase tracking-widest">Global Conversions</span>
            <span className="text-xl font-bold tracking-tight text-white">41.8%</span>
            <div className="bg-neutral-900/70 p-2 rounded-lg border border-neutral-800/80 flex items-center justify-between gap-1.5">
              <span className="text-[8px] font-mono text-[#8E8E93]">Node system link established</span>
              <span className="text-[8px] font-bold text-emerald-400">+14% MoM</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-neutral-800 pt-2.5 z-10">
            <span className="text-[9px] text-neutral-400">Continuous live polling</span>
            <span className="text-[9px] font-semibold text-neutral-200">Inspect <ChevronRight size={10} className="inline" /></span>
          </div>
        </div>
      );

    case "billing":
      return (
        <div className={`p-6 rounded-2xl border border-neutral-800/50 shadow-xl overflow-hidden aspect-[4/3] flex flex-col justify-between text-neutral-300 bg-[#161618] relative group cursor-pointer ${className}`}>
          
          <div className="flex items-center justify-between z-10">
            <span className="text-[9px] font-mono uppercase text-neutral-400">Simple Billing Tier</span>
            <span className="text-[9px] text-neutral-500">Invoice #2041</span>
          </div>

          <div className="my-2.5 space-y-1 z-10">
            <span className="block text-[8px] font-mono uppercase text-neutral-500">Subscription Status</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs font-semibold text-neutral-200">Active - Oris Enterprise</span>
            </div>
            <p className="text-[8px] text-neutral-500">Renewal cycle starts in 14 days on June 4th.</p>
          </div>

          <div className="flex items-center justify-between border-t border-neutral-800 pt-2 z-10">
            <span className="text-[9px] text-neutral-400">Enterprise workspace</span>
            <span className="text-[9px] font-semibold text-indigo-400 flex items-center gap-0.5">Reciept <ChevronRight size={9} /></span>
          </div>
        </div>
      );
  }
}
