import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight } from "lucide-react";
import { ProjectType } from "../data";

interface ProjectDetailsProps {
  project: ProjectType | null;
  onClose: () => void;
}

export function ProjectDetails({ project, onClose }: ProjectDetailsProps) {
  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/80 backdrop-blur-sm z-50 overflow-hidden"
          />
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-x-0 bottom-0 top-[5vh] z-50 bg-white rounded-t-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-6 sm:px-12 sm:py-8 border-b border-[#EAEAEA]">
              <div>
                <h2 className="text-3xl font-display font-medium text-[#111111]">{project.brandName}</h2>
                <div className="flex items-center gap-2 mt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-[#F5F5F5] text-[#787774] rounded-full text-[10px] font-bold uppercase tracking-wider font-sans">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#EAEAEA] transition-colors text-[#111111] cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto px-6 py-12 sm:px-12 pb-24">
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-16">
                  {/* Meta Details */}
                  <div className="md:col-span-4 flex flex-col gap-8">
                    <div>
                      <span className="block text-[10px] font-bold text-[#787774] uppercase tracking-wider mb-2">Role</span>
                      <p className="font-sans font-medium text-[#111111]">{project.details.role}</p>
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-[#787774] uppercase tracking-wider mb-2">Timeline</span>
                      <p className="font-sans font-medium text-[#111111]">{project.details.timeline}</p>
                    </div>
                    {project.details.liveUrl && (
                      <div>
                        <span className="block text-[10px] font-bold text-[#787774] uppercase tracking-wider mb-2">Live Project</span>
                        <a href={project.details.liveUrl} target="_blank" rel="noopener noreferrer" className="font-sans font-semibold text-[#111111] hover:text-[#787774] transition-colors flex items-center gap-1.5 underline decoration-[#EAEAEA] underline-offset-4 hover:decoration-[#787774]">
                          View Live Site
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="md:col-span-8">
                    <span className="block text-[10px] font-bold text-[#787774] uppercase tracking-wider mb-3">About the Project</span>
                    <p className="text-lg sm:text-2xl font-sans text-[#111111] leading-relaxed">
                      {project.details.description}
                    </p>
                  </div>
                </div>

                {/* Images */}
                <div className="flex flex-col gap-8">
                  {project.details.images.map((img, idx) => (
                    <div key={idx} className="w-full rounded-[2rem] overflow-hidden bg-[#F5F5F5] border border-[#EAEAEA]">
                      <img src={img} alt={`${project.brandName} detail ${idx + 1}`} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
