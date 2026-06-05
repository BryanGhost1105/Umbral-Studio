import React from "react";
import { motion } from "motion/react";

export function Workflow() {
  const steps = [
    {
      id: "1",
      title: "Discovery Call",
      description: "We'll hop on a quick call to discuss your business goals, target audience, and the features you need. This helps us ensure we're the right fit for your project."
    },
    {
      id: "2",
      title: "Scope & Quote",
      description: "Within 24 hours of our call, you'll receive a detailed project scope and a straightforward, fixed-price quote. No hidden fees or hourly surprises."
    },
    {
      id: "3",
      title: "Design & Build",
      description: "We work fast. Once approved, we dive right into designing and developing your application in React or Next.js. You'll receive staging links to watch progress live."
    },
    {
      id: "4",
      title: "Review & Polish",
      description: "You'll have the opportunity to review the staging site and request final tweaks. We make sure everything is pixel-perfect and exactly what you envisioned."
    },
    {
      id: "5",
      title: "Launch & Support",
      description: "When the site is ready, we deploy it to production and hand over the source code. You'll get post-launch support to ensure everything runs smoothly."
    }
  ];

  return (
    <section id="benefits" className="py-32 md:py-48 bg-white border-b border-[#EAEAEA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-24 mb-24 md:mb-32 items-start justify-between">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#787774]">Process</span>
          </div>
          <div className="w-full md:w-[60%]">
            <h2 className="text-3xl md:text-5xl leading-[1.2] font-medium tracking-tight text-[#787774] font-display">
              <span className="text-[#111111] font-bold">A streamlined, transparent workflow.</span> From the first briefing to the final deployment, we keep things moving fast.
            </h2>
          </div>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col items-center w-full max-w-5xl mx-auto space-y-12 md:space-y-16">
          {steps.map((step, index) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                key={step.id}
                className="w-full flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-24 border-t border-[#EAEAEA] pt-12 md:pt-16"
              >
                <div className="flex items-center gap-6 md:w-1/3">
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F5] text-[#111111] flex items-center justify-center font-mono font-bold text-lg select-none">
                    0{step.id}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-medium text-[#111111]">
                    {step.title}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-base md:text-lg text-[#787774] leading-relaxed font-sans max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
