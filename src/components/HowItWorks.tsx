import React from "react";
import { motion } from "motion/react";

export function HowItWorks() {
  return (
    <section className="py-24 md:py-32 bg-[#e8e8e8] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
          <span className="italic font-serif text-neutral-500 mb-3 text-[15px]">Our Process, Explained</span>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 tracking-tight">
            Here's how it works
          </h2>
        </div>

        {/* Cards Container */}
        <div className="relative max-w-4xl mx-auto mb-24 md:h-[400px]">
          
          {/* Connector Line (Desktop Only) */}
          <div className="hidden md:block absolute inset-0 z-10 pointer-events-none">
            <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
              {/* Line from Card 1 to Card 2 */}
              <path 
                d="M 230 140 C 290 80, 420 60, 400 120 C 390 150, 360 170, 350 140 C 340 100, 390 80, 420 80" 
                fill="none" 
                stroke="#ff6b4a" 
                strokeWidth="1.5"
                className="opacity-80"
              />
              <circle cx="230" cy="140" r="3.5" fill="none" stroke="#ff6b4a" strokeWidth="1.5" />
              <circle cx="420" cy="80" r="3.5" fill="none" stroke="#ff6b4a" strokeWidth="1.5" />

              {/* Line from Card 2 to Card 3 */}
              <path 
                d="M 520 180 C 560 220, 500 280, 480 230 C 470 200, 520 170, 550 200 C 580 230, 560 270, 600 240" 
                fill="none" 
                stroke="#ff6b4a" 
                strokeWidth="1.5"
                className="opacity-80"
              />
              <circle cx="520" cy="180" r="3.5" fill="none" stroke="#ff6b4a" strokeWidth="1.5" />
              <circle cx="600" cy="240" r="3.5" fill="none" stroke="#ff6b4a" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-6 relative z-20 h-full">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
              className="w-full max-w-[280px] aspect-square bg-white rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.06)] p-8 sm:p-10 flex flex-col justify-between md:rotate-[-8deg] md:translate-y-8 md:-translate-x-4 border border-white/50"
            >
              <span className="text-[2.75rem] font-display font-medium text-neutral-900 leading-none">1</span>
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">Align & Quote</h3>
                <p className="text-[11px] text-neutral-500 font-sans leading-relaxed">Book a quick call to share your idea. Within 24 hours, you'll get a detailed scope and fixed-price quote.</p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="w-full max-w-[280px] aspect-square bg-white rounded-[2rem] shadow-[0_25px_50px_rgba(0,0,0,0.08)] p-8 sm:p-10 flex flex-col justify-between md:rotate-[6deg] md:-translate-y-4 border border-white/50 z-30"
            >
              <span className="text-[2.75rem] font-display font-medium text-neutral-900 leading-none">2</span>
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">Design & Build</h3>
                <p className="text-[11px] text-neutral-500 font-sans leading-relaxed">We get to work immediately, building directly in code and sharing live staging links for your review.</p>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
              className="w-full max-w-[280px] aspect-square bg-white rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.06)] p-8 sm:p-10 flex flex-col justify-between md:rotate-[-4deg] md:translate-y-12 md:translate-x-4 border border-white/50"
            >
              <span className="text-[2.75rem] font-display font-medium text-neutral-900 leading-none">3</span>
              <div>
                <h3 className="text-base font-bold text-neutral-900 mb-1.5">Iterate & Launch</h3>
                <p className="text-[11px] text-neutral-500 font-sans leading-relaxed">We provide unlimited revisions during our sprint. When perfect, we launch the site and hand over the keys.</p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Testimonials divider & text */}
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start pt-16 relative">
          
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-neutral-300 -translate-x-1/2"></div>
          
          <div className="flex-1 md:pr-16 lg:pr-24 relative pb-12 md:pb-0">
            <span className="hidden sm:block absolute -right-6 top-0 text-xl text-neutral-400 font-serif leading-none">"</span>
            <p className="text-sm font-medium text-neutral-900 mb-8 leading-relaxed font-sans pr-4">
              Working with Umbral Studio was a game-changer. They instantly understood our vision and translated it into a sleek, intuitive product. The process felt effortless, and the results exceeded our expectations.
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="Sophie Lemaire" 
                className="w-8 h-8 rounded-full border border-neutral-200 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-[10px] font-bold text-neutral-900 leading-none">Sophie Lemaire</div>
                <div className="text-[9px] text-neutral-500 mt-1">Product Lead at Loomi</div>
              </div>
            </div>
          </div>

          <div className="w-full md:hidden h-[1px] bg-neutral-300 mb-12"></div>

          <div className="flex-1 md:pl-16 lg:pl-24 relative pt-12 md:pt-40">
            <span className="hidden sm:block absolute -right-4 top-40 text-xl text-neutral-400 font-serif leading-none">"</span>
            <p className="text-sm font-medium text-neutral-900 mb-8 leading-relaxed font-sans pr-4">
              Umbral Studio brings clarity to chaos. Their design work is not only beautiful but deeply strategic. They helped us rebrand from the ground up, and our audience response has been incredible.
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100" 
                alt="Milan Bakker" 
                className="w-8 h-8 rounded-full border border-neutral-200 object-cover"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="text-[10px] font-bold text-neutral-900 leading-none">Milan Bakker</div>
                <div className="text-[9px] text-neutral-500 mt-1">Founder of Drifted Studio</div>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
