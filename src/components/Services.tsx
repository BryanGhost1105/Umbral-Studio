import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
// Custom brand images
import brand1 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.03 PM.jpeg";
import brand2 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.07 PM (2).jpeg";
import brand3 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.08 PM (1).jpeg";
import brand4 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.08 PM.jpeg";
import brand5 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.11 PM (1).jpeg";
import brand6 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.11 PM (2).jpeg";
import brand7 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.11 PM.jpeg";
import brand8 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.12 PM (1).jpeg";
import brand9 from "../assets/images/brands/WhatsApp Image 2026-01-30 at 3.23.12 PM.jpeg";


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#FBFBFA] flex flex-col items-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-20 md:mb-24 items-start">
          <div className="w-full md:w-1/4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#787774]">Services</span>
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-3xl md:text-5xl leading-[1.1] font-medium tracking-tight text-[#111111] font-display">
              Capabilities that cover your entire product lifecycle. <span className="text-[#787774] font-normal">We don't just design; we build, systemize, and ship.</span>
            </h2>
          </div>
        </div>

        {/* Cards Container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row items-stretch justify-center gap-6 relative"
        >
          
          {/* Card 1: Branding Design */}
          <motion.div variants={itemVariants} className="flex-1 p-1.5 bg-[#F9F9F8] rounded-[2rem] border border-[#EAEAEA] shadow-[0_2px_12px_rgba(0,0,0,0.02)] z-10">
            <div className="h-full bg-white rounded-[calc(2rem-0.375rem)] p-6 sm:p-8 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-[#111111] font-display">Brand Identity</h3>
                  <div className="w-8 h-8 rounded-full bg-[#F5F5F5] text-[#111111] flex items-center justify-center border border-[#EAEAEA]">
                    <ArrowUpRight strokeWidth={2} size={16} />
                  </div>
                </div>
                <p className="text-sm text-[#787774] leading-relaxed mb-6 font-sans">
                  Logos, typefaces, and color systems that build trust and communicate exactly what your brand does.
                </p>
                
                <div className="grid grid-cols-3 gap-2 mb-8">
                  <img src={brand1} alt="Brand concept 1" className="w-full aspect-square object-cover rounded-xl" />
                  <img src={brand2} alt="Brand concept 2" className="w-full aspect-square object-cover rounded-xl" />
                  <img src={brand3} alt="Brand concept 3" className="w-full aspect-square object-cover rounded-xl grayscale" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1.5 bg-[#F5F5F5] text-[#787774] rounded-full text-[10px] font-bold uppercase tracking-wide font-sans">Logo design</span>
                <span className="px-3 py-1.5 bg-[#F5F5F5] text-[#787774] rounded-full text-[10px] font-bold uppercase tracking-wide font-sans">Identity</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Development (Highlighted) */}
          <motion.div variants={itemVariants} className="flex-1 p-1.5 bg-[#050505] rounded-[2rem] border border-white/10 md:-mt-8 md:-mb-8 z-20 shadow-[0_24px_48px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-2 duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group">
             <div className="h-full border border-white/5 bg-[#111111] rounded-[calc(2rem-0.375rem)] p-6 sm:p-8 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-white font-display tracking-tight transition-colors cursor-default">Frontend Engineering</h3>
                  <div className="w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center border border-white/10 backdrop-blur-sm group-hover:scale-110 group-hover:bg-white group-hover:text-[#111111] transition-all duration-300">
                    <ArrowUpRight strokeWidth={2} size={16} />
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-6 font-sans">
                  We turn Figma files or ideas into lightning-fast React applications. Clean, production-ready, and responsive code.
                </p>
                
                <div className="grid grid-cols-3 gap-2 mb-8 group-hover:-translate-y-1 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
                  <img src={brand4} alt="Code 1" className="w-full aspect-square object-cover rounded-xl" />
                  <img src={brand5} alt="Code 2" className="w-full aspect-square object-cover rounded-xl grayscale opacity-80" />
                  <img src={brand6} alt="Code 3" className="w-full aspect-square object-cover rounded-xl" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                <span className="px-3 py-1.5 bg-white/5 text-white/80 rounded-full text-[10px] uppercase font-bold tracking-wide font-sans border border-white/10 backdrop-blur-md">React / Next.js</span>
                <span className="px-3 py-1.5 bg-white/5 text-white/80 rounded-full text-[10px] uppercase font-bold tracking-wide font-sans border border-white/10 backdrop-blur-md">Tailwind</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: UI/UX Design */}
          <motion.div variants={itemVariants} className="flex-1 p-1.5 bg-[#F9F9F8] rounded-[2rem] border border-[#EAEAEA] shadow-[0_2px_12px_rgba(0,0,0,0.02)] z-10 hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] gap-2">
            <div className="h-full bg-white rounded-[calc(2rem-0.375rem)] p-6 sm:p-8 flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-xl font-bold text-[#111111] font-display">Product Design</h3>
                  <div className="w-8 h-8 rounded-full bg-[#E1F3FE] text-[#1F6C9F] flex items-center justify-center border border-[#EAEAEA]">
                    <ArrowUpRight strokeWidth={2} size={16} />
                  </div>
                </div>
                <p className="text-sm text-[#787774] leading-relaxed mb-6 font-sans">
                  SaaS dashboards, landing pages, and component libraries. We design interfaces that convert users and reduce churn.
                </p>
                
                <div className="grid grid-cols-3 gap-2 mb-8">
                  <img src={brand7} alt="UI/UX design 1" className="w-full aspect-square object-cover rounded-xl" />
                  <img src={brand8} alt="UI/UX design 2" className="w-full aspect-square object-cover rounded-xl grayscale" />
                  <img src={brand9} alt="UI/UX design 3" className="w-full aspect-square object-cover rounded-xl" />
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1.5 bg-[#F5F5F5] text-[#787774] rounded-full text-[10px] font-bold uppercase tracking-wide font-sans">SaaS</span>
                <span className="px-3 py-1.5 bg-[#F5F5F5] text-[#787774] rounded-full text-[10px] font-bold uppercase tracking-wide font-sans">Systems</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
