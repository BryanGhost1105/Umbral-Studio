/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  Wallet, 
  Plane, 
  Sparkles, 
  TrendingUp, 
  ChevronRight, 
  Play, 
  FolderLock, 
  Smartphone,
  Flame,
  ArrowRight
} from "lucide-react";

export default function DesignSlideshow() {
  return (
    <section id="slideshow" className="py-12 md:py-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 h-[75vh] md:h-[80vh] relative">
        
        {/* Core slideshow container - Dark backdrop, rounded corners */}
        <div className="w-full h-full bg-[#1c1c1e] rounded-[2rem] sm:rounded-[2.5rem] border border-neutral-800 relative overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.25)] flex gap-4 p-4 sm:p-6 md:p-8">
          
          {/* Style Inject for Endless Loops */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes marquee-up {
              0% { transform: translateY(0); }
              100% { transform: translateY(-50%); }
            }
            @keyframes marquee-down {
              0% { transform: translateY(-50%); }
              100% { transform: translateY(0); }
            }
            .animate-scroll-up {
              animation: marquee-up 35s linear infinite;
            }
            .animate-scroll-down {
              animation: marquee-down 35s linear infinite;
            }
            .animate-scroll-up:hover, .animate-scroll-down:hover {
              animation-play-state: paused;
            }
          `}} />

          {/* Left Column (Scrolling Up) */}
          <div className="flex-1 h-full overflow-hidden flex flex-col gap-6 relative">
            <div className="flex flex-col gap-6 animate-scroll-up">
              
              {/* Card 1: Creative App Mockup (Original) */}
              <div className="w-full rounded-2xl bg-gradient-to-br from-indigo-900 to-[#1e1b4b] border border-indigo-500/10 p-5 sm:p-6 text-white min-h-[360px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-indigo-500/25 text-indigo-200 px-2 py-1 rounded">Vanguard</span>
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white leading-tight">
                    Take a journey to a new builder generation
                  </h4>
                  <p className="text-xs text-indigo-200/70 mt-3 max-w-sm">
                    Re-imagining workspace components with declarative canvas templates.
                  </p>
                </div>
                <div className="pt-4 border-t border-indigo-400/10 flex items-center justify-between text-xs">
                  <span className="text-indigo-300 font-medium">View Framework Blueprint</span>
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-indigo-300" />
                  </div>
                </div>
              </div>

              {/* Card 2: Wallet Concierge (Detailed Finance + Travel UI) */}
              <div className="w-full rounded-2xl bg-[#09090b] border border-neutral-800 p-5 sm:p-6 text-white min-h-[380px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8E8E93]"></div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Concierge Wallet</span>
                  </div>
                  <Wallet className="w-4 h-4 text-neutral-500" />
                </div>
                
                {/* Visual mini elements */}
                <div className="space-y-4 my-4">
                  {/* Digital Account Box */}
                  <div className="bg-neutral-900/60 rounded-xl p-3 border border-neutral-800/80">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Total balance</span>
                      <span className="text-[10px] text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded font-mono">USD</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 mt-1 font-display">$11,350.50</div>
                  </div>

                  {/* Travel Destination Notification tag */}
                  <div className="bg-neutral-900/40 rounded-xl p-3 border border-neutral-800/50 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-indigo-900/50 text-indigo-400 border border-indigo-500/20">
                        <Plane className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-neutral-200">NY (JFK) ✈ CDG (Paris)</div>
                        <div className="text-[10px] text-neutral-500">Scheduled: 8:15 AM - 11:30 AM</div>
                      </div>
                    </div>
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold">First Class</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span>Your luxury premium card is active</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </div>
              </div>

              {/* Card 3: "My Piggy Bank" Admin Dashboard */}
              <div className="w-full rounded-2xl bg-[#eff6ff] border border-blue-100 p-5 sm:p-6 text-neutral-900 min-h-[360px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-blue-600">Piggy Bank App</span>
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                </div>

                {/* Dashboard graphic with cute graphics */}
                <div className="my-3 bg-white rounded-xl border border-blue-100 p-3 shadow-sm space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>Monthly Savings Goals</span>
                    <span className="font-bold text-blue-600">+18%</span>
                  </div>
                  
                  {/* Simulated Cute bar chart */}
                  <div className="h-16 flex items-end gap-1.5 pt-2">
                    <div className="w-full bg-pink-100 rounded-md h-[40%]" style={{ height: '35%' }}></div>
                    <div className="w-full bg-pink-200 rounded-md h-[55%]"></div>
                    <div className="w-full bg-blue-500 rounded-md h-[78%]"></div>
                    <div className="w-full bg-pink-300 rounded-md h-[45%]"></div>
                    <div className="w-full bg-blue-600 rounded-md h-[95%] relative">
                      <div className="absolute -top-1 left-12 transform -translate-x-[50%] bg-neutral-900 text-white text-[6px] font-bold px-1 py-0.5 rounded">Goal!</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold font-display tracking-tight text-neutral-950">
                    My Piggy Bank — Smart deposits tracker with micro rewards
                  </h4>
                  <p className="text-xs text-neutral-500 mt-2">
                    Delightful finance interface with real-time streak multipliers.
                  </p>
                </div>
              </div>

              {/* REPEAT FOR SMOOTH LOOP */}
              {/* Card 1 Repeat */}
              <div aria-hidden="true" className="w-full rounded-2xl bg-gradient-to-br from-indigo-900 to-[#1e1b4b] border border-indigo-500/10 p-5 sm:p-6 text-white min-h-[360px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase bg-indigo-500/25 text-indigo-200 px-2 py-1 rounded">Vanguard</span>
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black font-display tracking-tight text-white leading-tight">
                    Take a journey to a new builder generation
                  </h4>
                  <p className="text-xs text-indigo-200/70 mt-3 max-w-sm">
                    Re-imagining workspace components with declarative canvas templates.
                  </p>
                </div>
                <div className="pt-4 border-t border-indigo-400/10 flex items-center justify-between text-xs">
                  <span className="text-indigo-300 font-medium">View Framework Blueprint</span>
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 text-indigo-300" />
                  </div>
                </div>
              </div>

              {/* Card 2 Repeat */}
              <div aria-hidden="true" className="w-full rounded-2xl bg-[#09090b] border border-neutral-800 p-5 sm:p-6 text-white min-h-[380px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#8E8E93]"></div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400">Concierge Wallet</span>
                  </div>
                  <Wallet className="w-4 h-4 text-neutral-500" />
                </div>
                <div className="space-y-4 my-4">
                  <div className="bg-neutral-900/60 rounded-xl p-3 border border-neutral-800/80">
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-neutral-500 uppercase font-bold tracking-wider">Total balance</span>
                      <span className="text-[10px] text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded font-mono">USD</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-100 mt-1 font-display">$11,350.50</div>
                  </div>
                  <div className="bg-neutral-900/40 rounded-xl p-3 border border-neutral-800/50 flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-indigo-900/50 text-indigo-400 border border-indigo-500/20">
                        <Plane className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-left">
                        <div className="font-semibold text-neutral-200">NY (JFK) ✈ CDG (Paris)</div>
                        <div className="text-[10px] text-neutral-500">Scheduled: 8:15 AM - 11:30 AM</div>
                      </div>
                    </div>
                    <span className="text-[9px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-1.5 py-0.5 rounded font-bold">First Class</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span>Your luxury premium card is active</span>
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </div>
              </div>

              {/* Card 3 Repeat */}
              <div aria-hidden="true" className="w-full rounded-2xl bg-[#eff6ff] border border-blue-100 p-5 sm:p-6 text-neutral-900 min-h-[360px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-blue-600">Piggy Bank App</span>
                  <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                </div>
                <div className="my-3 bg-white rounded-xl border border-blue-100 p-3 shadow-sm space-y-3">
                  <div className="flex items-center justify-between text-xs text-neutral-500">
                    <span>Monthly Savings Goals</span>
                    <span className="font-bold text-blue-600">+18%</span>
                  </div>
                  <div className="h-16 flex items-end gap-1.5 pt-2">
                    <div className="w-full bg-pink-100 rounded-md h-[40%]" style={{ height: '35%' }}></div>
                    <div className="w-full bg-pink-200 rounded-md h-[55%]"></div>
                    <div className="w-full bg-blue-500 rounded-md h-[78%]"></div>
                    <div className="w-full bg-pink-300 rounded-md h-[45%]"></div>
                    <div className="w-full bg-blue-600 rounded-md h-[95%]" style={{ height: '90%' }}></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold font-display tracking-tight text-neutral-950">
                    My Piggy Bank — Smart deposits tracker with micro rewards
                  </h4>
                  <p className="text-xs text-neutral-500 mt-2">
                    Delightful finance interface with real-time streak multipliers.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (Scrolling Down) */}
          <div className="flex-1 h-full overflow-hidden flex flex-col gap-6 relative">
            <div className="flex flex-col gap-6 animate-scroll-down">
              
              {/* Card 4: Dark SaaS Analytics Dashboard */}
              <div className="w-full rounded-2xl bg-[#0f0f12] border border-neutral-800/80 p-5 sm:p-6 text-white min-h-[360px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">Analytics Platform</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400 animate-pulse" />
                </div>
                
                <div className="my-4 space-y-4">
                  {/* Balance Display */}
                  <div>
                    <span className="text-xs text-neutral-400">Available Balance</span>
                    <div className="text-3xl font-bold font-display tracking-tight text-white mt-1">$20,240.00</div>
                  </div>
                  
                  {/* Activity simulated list */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] bg-neutral-900 border border-neutral-800/50 rounded-lg p-2">
                      <span className="text-neutral-300">Stripe deposits (Auto)</span>
                      <span className="font-bold text-emerald-400 font-mono">+$2,450.00</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] bg-neutral-900 border border-neutral-800/50 rounded-lg p-2">
                      <span className="text-neutral-300">Server hosting metrics</span>
                      <span className="font-mono text-neutral-400">99.98% Health</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-medium">Telemetry Log System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </div>
              </div>

              {/* Card 5: Modern Educational App / Learning Dashboard */}
              <div className="w-full rounded-2xl bg-[#ffffff] border border-neutral-200 p-5 sm:p-6 text-neutral-900 min-h-[385px] flex flex-col justify-between text-left shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-neutral-400 bg-neutral-100 px-2 py-1 rounded">Academy Dashboard</span>
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-current text-neutral-800" />
                  </div>
                </div>

                <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-3 my-4 space-y-3">
                  <span className="text-[11px] font-bold text-blue-600 block">Class Progress</span>
                  <div className="font-semibold text-xs text-neutral-800">Sales Formula: The Complete Guide</div>
                  
                  {/* Real progress layout */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                      <span>16 of 20 elements completed</span>
                      <span>82%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-neutral-900 h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-base font-bold font-display tracking-tight text-neutral-950">
                    SaaS Academy portal with auto evaluations
                  </h4>
                  <p className="text-xs text-neutral-500 mt-2">
                    Clean desktop learning management system built for high-scale conversion teams.
                  </p>
                </div>
              </div>

              {/* Card 6: Dual Mobile Phone Displays (Hobby Point + Longboarding) */}
              <div className="w-full rounded-2xl bg-neutral-900 border border-neutral-850 p-5 sm:p-6 text-white min-h-[360px] flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">Mobile UI Labs</span>
                  <Smartphone className="w-4 h-4 text-neutral-500" />
                </div>

                {/* Micro Phone Previews Overlay */}
                <div className="flex items-center justify-center gap-4 py-3 shrink-0 relative h-40">
                  
                  {/* Yellow screen mockup 1 ("Hobby Point") */}
                  <div className="w-[45%] h-[125%] bg-[#09090b] rounded-xl border-[2.5px] border-neutral-800 shadow-xl overflow-hidden flex flex-col absolute left-2 rotate-[-5deg]">
                    <div className="h-1.5 w-6 bg-neutral-800 rounded-full mx-auto mt-1 flex"></div>
                    <div className="flex-1 bg-[#fbbf24] flex flex-col p-1.5 relative overflow-hidden justify-between text-neutral-950">
                      <div className="text-[6px] font-bold tracking-tight leading-none">Hobby Point.</div>
                      <div className="w-full h-[55%] bg-[#0e0e11] rounded-lg relative p-1 flex flex-col justify-end">
                        <span className="text-[3px] font-bold text-white uppercase tracking-widest leading-none">Lego Studio</span>
                      </div>
                    </div>
                  </div>

                  {/* Purple screen mockup 2 ("Longboarding") */}
                  <div className="w-[45%] h-[125%] bg-[#09090b] rounded-xl border-[2.5px] border-neutral-800 shadow-xl overflow-hidden flex flex-col absolute right-2 rotate-[5deg]">
                    <div className="h-1.5 w-6 bg-neutral-800 rounded-full mx-auto mt-1 flex"></div>
                    <div className="flex-1 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] flex flex-col p-1.5 relative overflow-hidden justify-between text-white">
                      <div className="text-[6px] font-bold tracking-tight leading-none leading-none">Longboarding.</div>
                      <Flame className="w-2 h-2 text-pink-500 self-end" />
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-neutral-800 z-10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Interactive physics components built live</span>
                </div>
              </div>

              {/* REPEAT FOR SMOOTH LOOP */}
              {/* Card 4 Repeat */}
              <div aria-hidden="true" className="w-full rounded-2xl bg-[#0f0f12] border border-neutral-800/80 p-5 sm:p-6 text-white min-h-[360px] flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 bg-neutral-900 px-2 py-0.5 rounded">Analytics Platform</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="my-4 space-y-4">
                  <div>
                    <span className="text-xs text-neutral-400">Available Balance</span>
                    <div className="text-3xl font-bold font-display tracking-tight text-white mt-1">$20,240.00</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] bg-neutral-900 border border-neutral-800/50 rounded-lg p-2">
                      <span className="text-neutral-300">Stripe deposits (Auto)</span>
                      <span className="font-bold text-emerald-400 font-mono">+$2,450.00</span>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <span className="text-neutral-400 font-medium">Telemetry Log System</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
                </div>
              </div>

              {/* Card 5 Repeat */}
              <div aria-hidden="true" className="w-full rounded-2xl bg-[#ffffff] border border-neutral-200 p-5 sm:p-6 text-neutral-900 min-h-[385px] flex flex-col justify-between text-left shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono tracking-widest font-bold uppercase text-neutral-400 bg-neutral-100 px-2 py-1 rounded">Academy Dashboard</span>
                  <div className="w-5 h-5 rounded-full bg-neutral-100 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-current text-neutral-800" />
                  </div>
                </div>
                <div className="bg-neutral-50 rounded-xl border border-neutral-100 p-3 my-4 space-y-3">
                  <span className="text-[11px] font-bold text-blue-600 block">Class Progress</span>
                  <div className="font-semibold text-xs text-neutral-800">Sales Formula: The Complete Guide</div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[10px] text-neutral-500 font-mono">
                      <span>16 of 20 elements completed</span>
                      <span>82%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-neutral-900 h-full rounded-full" style={{ width: '82%' }}></div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold font-display tracking-tight text-neutral-950">
                    SaaS Academy portal with auto evaluations
                  </h4>
                </div>
              </div>

              {/* Card 6 Repeat */}
              <div aria-hidden="true" className="w-full rounded-2xl bg-neutral-900 border border-neutral-850 p-5 sm:p-6 text-white min-h-[360px] flex flex-col justify-between relative overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 bg-neutral-800 px-1.5 py-0.5 rounded">Mobile UI Labs</span>
                  <Smartphone className="w-4 h-4 text-neutral-500" />
                </div>
                <div className="flex items-center justify-center gap-4 py-3 shrink-0 relative h-40">
                  <div className="w-[45%] h-[125%] bg-[#09090b] rounded-xl border-[2.5px] border-neutral-800 shadow-xl overflow-hidden flex flex-col absolute left-2 rotate-[-5deg]">
                    <div className="h-1.5 w-6 bg-neutral-800 rounded-full mx-auto mt-1 flex"></div>
                    <div className="flex-1 bg-[#fbbf24] flex flex-col p-1.5 relative overflow-hidden justify-between text-neutral-950 font-display font-medium">
                      <div className="text-[6px] font-bold">Hobby Point.</div>
                    </div>
                  </div>
                  <div className="w-[45%] h-[125%] bg-[#09090b] rounded-xl border-[2.5px] border-neutral-800 shadow-xl overflow-hidden flex flex-col absolute right-2 rotate-[5deg]">
                    <div className="h-1.5 w-6 bg-neutral-800 rounded-full mx-auto mt-1 flex"></div>
                    <div className="flex-1 bg-[#4f46e5] flex flex-col p-1.5 relative overflow-hidden justify-between text-white">
                      <div className="text-[6px] font-bold">Longboarding.</div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-800 z-10 flex items-center justify-between text-xs text-neutral-400">
                  <span>Interactive physics components built live</span>
                </div>
              </div>

            </div>
          </div>

          {/* Core Dark Gradient Overlay Mask (Simulates polished camera/video focus look) */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-black/60 z-25 rounded-[2rem] sm:rounded-[2.5rem]"></div>
          <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-black/35 via-transparent to-transparent z-25 rounded-[2rem] sm:rounded-[2.5rem]"></div>
          <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-black/35 via-transparent to-transparent z-25 rounded-[2rem] sm:rounded-[2.5rem]"></div>

          {/* Glowing lens flares simulation inside the corner shadows */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          {/* Floating Aesthetic Rotating Badge "See Recent Work" */}
          <motion.a
            href="#projects"
            initial={{ rotate: 12, scale: 0.95 }}
            whileHover={{ scale: 1.08, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 bg-white text-neutral-950 font-display font-extrabold text-xs sm:text-xs py-3 px-5 rounded-full shadow-2xl flex items-center gap-2 border border-neutral-200/80 select-none cursor-pointer group"
          >
            <span>See Recent Work</span>
            <div className="w-5 h-5 bg-neutral-900 rounded-full flex items-center justify-center text-white group-hover:translate-x-0.5 transition-transform">
              <ArrowRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
