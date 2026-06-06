/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MessageSquare,
  Zap,
  Tag,
  UserCheck,
  Sliders,
  CheckSquare,
  Globe,
  Layers,
  Palette,
  Cpu,
  PenTool,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
  Plus,
  Minus,
  Sparkles,
  Star,
  Quote,
  Menu,
  X,
  Check,
  Calendar,
  Clock,
  Briefcase,
  MousePointerClick,
  Gauge,
  Pause,
  Mail,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { PROJECTS, BENEFITS, SERVICES, FAQS, IMAGES } from "./data";
import { BookingModal } from "./components/Models";
import { UmbralLogo } from "./components/UmbralLogo";

import heroImage28 from "./assets/images/28.png";

import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { Workflow } from "./components/Workflow";
import { ProjectDetails } from "./components/ProjectDetails";
import { ProjectType } from "./data";

export default function App() {
  // Navigation & Interactive states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTitle, setBookingTitle] = useState("Book a 15-minute call");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  
  // FAQ state
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  // Handle body scroll locking when modals/menus are open
  React.useEffect(() => {
    if (mobileMenuOpen || selectedProject || bookingOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen, selectedProject, bookingOpen]);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? null : id);
  };

  const launchBooking = (title: string = "Book a 15-minute call") => {
    window.open("https://wa.me/09038986245", "_blank", "noopener,noreferrer");
  };

  // Helper function to dynamically map strings to Lucide icon components
  const renderIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case "MessageSquare": return <MessageSquare className={className} />;
      case "Zap": return <Zap className={className} />;
      case "Tag": return <Tag className={className} />;
      case "UserCheck": return <UserCheck className={className} />;
      case "Sliders": return <Sliders className={className} />;
      case "CheckSquare": return <CheckSquare className={className} />;
      case "Globe": return <Globe className={className} />;
      case "Layers": return <Layers className={className} />;
      case "Palette": return <Palette className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "PenTool": return <PenTool className={className} />;
      case "HelpCircle": return <HelpCircle className={className} />;
      default: return <Sparkles className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#111111] selection:bg-[#111111] selection:text-[#FBFBFA] antialiased relative">
      
      {/* Seamless Top Glass Edge */}
      <div className="fixed top-0 left-0 right-0 h-32 pointer-events-none z-30 bg-[#FBFBFA]/50" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'linear-gradient(to bottom, black 30%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent)' }} />
      
      {/* Seamless Bottom Underscroll Glass Edge */}
      <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-40 bg-[#FBFBFA]/50" style={{ backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', maskImage: 'linear-gradient(to top, black 20%, transparent)', WebkitMaskImage: 'linear-gradient(to top, black 20%, transparent)' }} />

      {/* 1. Header/Navigation */}
      <header id="navbar" className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "bg-[#FBFBFA]/20 border-b border-[#EAEAEA]" : "bg-transparent border-b border-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo Brand using the Umbral Studio style */}
          <a href="#navbar" className="flex items-center gap-2.5 group">
            <UmbralLogo />
          </a>

          <div className="flex items-center gap-6">
            {/* Minimalist Menu Style (Menu ＝) as requested for ALL viewports */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-2.5 text-[#111111] hover:opacity-70 font-display font-semibold text-sm select-none focus:outline-none cursor-pointer group"
            >
              <span className="font-display font-medium text-[15px] text-[#111111] tracking-wide">
                {mobileMenuOpen ? "Close" : "Menu"}
              </span>
              <div className="flex flex-col gap-[3px] justify-center items-end w-5 h-5 relative">
                <span className={`h-[2px] bg-[#111111] rounded-sm transition-all duration-300 ${mobileMenuOpen ? "w-5 rotate-45 translate-y-[5px]" : "w-5"}`} />
                <span className={`h-[2px] bg-[#111111] rounded-sm transition-all duration-300 ${mobileMenuOpen ? "w-0 opacity-0" : "w-5"}`} />
                <span className={`h-[2px] bg-[#111111] rounded-sm transition-all duration-300 ${mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[5px]" : "w-5"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Unified Mobile & Desktop Premium Overlay Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="absolute top-20 left-0 right-0 z-30 bg-[#FBFBFA] border-b border-[#EAEAEA] shadow-2xl overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                
                {/* Large visual index links */}
                <div className="flex flex-col gap-6 md:gap-8">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#787774] pb-2 border-b border-[#EAEAEA]">
                    Directory
                  </span>
                  
                  <nav className="flex flex-col gap-4">
                    {[
                      { num: "01", label: "Projects", href: "#projects" },
                      { num: "02", label: "Benefits", href: "#benefits" },
                      { num: "03", label: "Services", href: "#services" }
                    ].map((link, lidx) => (
                      <motion.a
                        key={link.num}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: lidx * 0.05 }}
                        className="group flex items-center gap-4 py-2"
                      >
                        <span className="font-mono text-xs font-bold text-neutral-400 group-hover:text-neutral-900 transition-colors">
                          {link.num}
                        </span>
                        <span className="font-display font-extrabold text-3xl md:text-4xl text-neutral-900 group-hover:translate-x-2 transition-transform duration-300">
                          {link.label}
                        </span>
                      </motion.a>
                    ))}
                  </nav>
                </div>
                
                {/* Visual quick info & actions */}
                <div className="flex flex-col justify-between gap-8 py-2">
                  <div className="space-y-6">
                    <span className="block text-[10px] uppercase font-bold tracking-widest text-[#8E8E93] pb-2 border-b border-neutral-100">
                      Studio Details
                    </span>
                    
                    <div className="space-y-3.5">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span className="font-sans text-xs font-semibold text-neutral-700">Currently taking new projects</span>
                      </div>
                      <p className="text-sm text-neutral-500 max-w-sm">
                        High-fidelity product design and frontend engineering. Unlimited requests and revisions with a flat monthly subscription.
                      </p>
                    </div>
                  </div>
                  
                  {/* Action Shortcuts */}
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        launchBooking("Let's talk about Umbral Studio goals");
                      }}
                      className="group w-full sm:w-auto h-12 flex items-center justify-between sm:justify-center gap-4 bg-[#111111] text-[#FFFFFF] rounded-[6px] hover:bg-[#333333] transition-all px-4 cursor-pointer active:scale-[0.98]"
                    >
                      <span className="font-sans font-semibold text-sm">Book a discovery call</span>
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                        <ArrowRight size={14} />
                      </div>
                    </button>
                    
                    <a
                      href="mailto:brallen1108@gmail.com"
                      className="w-full sm:w-auto h-12 flex items-center justify-center gap-2 border border-[#EAEAEA] bg-white text-[#111111] font-semibold px-6 rounded-[6px] hover:bg-[#F9F9F8] transition-colors font-sans text-sm active:scale-[0.98]"
                    >
                      brallen1108@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. Hero Section */}
      <section id="hero" className="relative w-full pt-20 md:pt-24 pb-8 flex flex-col items-center justify-start bg-[#FBFBFA] overflow-hidden">
        <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center mt-[17px]">
          
          {/* Badge */}
          <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-2.5 py-1 bg-white border border-[#EAEAEA] rounded-full shadow-sm mb-5 select-none"
          >
            <span className="text-[10px] md:text-[11px] font-semibold text-[#111111] pl-2 font-sans tracking-[0.01em]">Trusted by 40+ companies</span>
            <div className="flex -space-x-2 mr-1">
              <img className="w-4 h-4 md:w-5 md:h-5 rounded-full border-[1.5px] border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar" referrerPolicy="no-referrer" />
              <img className="w-4 h-4 md:w-5 md:h-5 rounded-full border-[1.5px] border-white object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar" referrerPolicy="no-referrer"/>
              <img className="w-4 h-4 md:w-5 md:h-5 rounded-full border-[1.5px] border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100&h=100" alt="Avatar" referrerPolicy="no-referrer"/>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-medium text-4xl md:text-6xl lg:text-[4.5rem] tracking-[-0.03em] text-[#111111] text-center max-w-4xl mb-4 leading-[1.05]"
          >
            Built for those who<br className="hidden sm:block"/> want <span className="font-serif italic font-light whitespace-nowrap">better.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p 
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
             className="text-[13px] md:text-[15px] font-medium text-[#787774] text-center max-w-xl mx-auto mb-6 leading-relaxed font-sans"
          >
            Premium design and engineering partner.<br className="hidden sm:block"/> We help you design, build, and launch products without slowing down.
          </motion.p>

          {/* CTA Button */}
          <motion.button 
            onClick={() => launchBooking("Hero Booking")}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#111111] text-white px-6 py-2.5 md:py-3 md:px-7 rounded-lg font-sans font-semibold text-xs hover:bg-[#222222] transition-colors active:scale-[0.98] mb-10 cursor-pointer"
          >
            View plans
          </motion.button>
        </div>

        {/* Stats Block (Dashes bordered) */}
        <div className="w-full max-w-[900px] mx-auto px-6 border-b border-dashed border-[#EAEAEA] mb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-dashed border-[#EAEAEA]">
            {/* Stat 1 */}
            <div className="flex flex-col gap-1 p-4 md:p-6 border-b sm:border-b-0 sm:border-r border-dashed border-[#EAEAEA]">
              <span className="text-[10px] md:text-[11px] font-semibold text-[#787774] font-sans">Projects completed</span>
              <span className="text-2xl md:text-[32px] font-display font-medium text-[#111111] tracking-tight leading-none">10+</span>
            </div>
            {/* Stat 2 */}
            <div className="flex flex-col gap-1 p-4 md:p-6 border-b sm:border-b-0 sm:border-r border-dashed border-[#EAEAEA]">
              <span className="text-[10px] md:text-[11px] font-semibold text-[#787774] font-sans">Satisfaction rate</span>
              <span className="text-2xl md:text-[32px] font-display font-medium text-[#111111] tracking-tight leading-none">95%</span>
            </div>
            {/* Stat 3 */}
            <div className="flex flex-col gap-1 p-4 md:p-6">
              <span className="text-[10px] md:text-[11px] font-semibold text-[#787774] font-sans">Client retention rate</span>
              <span className="text-2xl md:text-[32px] font-display font-medium text-[#111111] tracking-tight leading-none">80%</span>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="w-full aspect-[4/3] md:aspect-[21/9] rounded-[24px] overflow-hidden bg-white border border-[#EAEAEA] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative">
            <img src={heroImage28} alt="Hero showcase" className="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 3. Introduction Paragraph & Agency Mini-Stats */}
      <section className="py-24 md:py-32 bg-white border-b border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#787774]">The Model</span>
          </div>

          <h2 className="text-2xl sm:text-4xl text-[#111111] leading-[1.3] max-w-4xl font-display font-medium">
            Stop dealing with unreliable freelancers and expensive agencies. Get a <span className="font-bold underline decoration-[#EAEAEA] decoration-[2px] underline-offset-8">dedicated design & dev team</span> on a simple monthly subscription.
          </h2>

          {/* Stats Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 sm:gap-6 mt-16 pt-16 border-t border-[#EAEAEA]">
            <div className="flex flex-col items-center">
              <span className="font-mono font-medium text-4xl md:text-5xl text-[#111111] tracking-tight">10+</span>
              <span className="text-[10px] font-bold text-[#787774] uppercase tracking-[0.2em] mt-3">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="font-mono font-medium text-4xl md:text-5xl text-[#111111] tracking-tight">72-<span className="text-3xl text-[#787774]">hr</span></span>
              <span className="text-[10px] font-bold text-[#787774] uppercase tracking-[0.2em] mt-3">Average Turnaround</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Portfolio Projects Section */}
      <section id="projects" className="py-24 md:py-32 bg-[#FBFBFA] border-b border-[#EAEAEA]">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Portfolio Label Heading */}
          <div className="text-center mb-16 flex flex-col items-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#787774]">Selected Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-[#111111] tracking-tight">
              Recent projects
            </h2>
          </div>

          {/* Project Cards Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {PROJECTS.map((project, idx) => {
              return (
                <div key={project.id} className="group block cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {/* Outer Bezel */}
                  <div className="p-1.5 bg-[#F9F9F8] rounded-[2rem] border border-[#EAEAEA] mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1">
                    {/* Inner Core */}
                    <div className={`w-full overflow-hidden rounded-[calc(2rem-0.375rem)] relative aspect-[4/3] ${project.bgColor} flex items-end justify-center pt-8 sm:pt-12 px-6 sm:px-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.2)]`}>
                      <img
                        src={project.image}
                        alt={`${project.brandName} design sample`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top rounded-t-xl sm:rounded-t-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] group-hover:-translate-y-2 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#111111]/0 group-hover:bg-[#111111]/5 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <span className="bg-white/90 backdrop-blur-sm text-[#111111] px-5 py-2.5 rounded-full font-sans font-semibold text-[13px] shadow-[0_8px_30px_rgba(0,0,0,0.12)] translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2 pointer-events-auto">
                          View details
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Text alignment and badges */}
                  <div className="flex flex-col gap-3 px-2 mt-2">
                    <div className="flex items-center justify-between">
                      <span className="font-sans font-semibold text-[#111111] group-hover:text-[#1F6C9F] transition-colors">{project.brandName}</span>
                      <div className="flex items-center gap-2">
                        {project.tags?.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-[#F5F5F5] text-[#787774] rounded-full text-[10px] font-bold uppercase tracking-wider font-sans group-hover:bg-[#E1F3FE] group-hover:text-[#1F6C9F] transition-colors">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    {project.details.liveUrl && (
                      <a 
                        href={project.details.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        onClick={(e) => e.stopPropagation()}
                        className="self-start flex items-center gap-1.5 text-[13px] font-sans font-semibold text-[#787774] hover:text-[#111111] transition-colors underline decoration-[#EAEAEA] underline-offset-4 hover:decoration-[#111111]"
                      >
                        Live project
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Project Details Modal */}
      <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* 5. Workflow Timeline Section */}
      <Workflow />

      {/* 6. Creative Services Cards Component */}
      <Services />

      {/* 8. How It Works Section */}
      <HowItWorks />

      {/* 9. Minimalist Quote Testimonial Section */}
      <section className="py-24 md:py-32 bg-[#FBFBFA]">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          
          <div className="mb-6 flex justify-center">
             <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E1F3FE] text-[#1F6C9F] mb-6">
               <Quote size={20} className="stroke-[2.5]" />
             </div>
          </div>

          <p className="text-xl sm:text-2xl md:text-4xl font-medium tracking-tight text-[#111111] leading-[1.3] font-display max-w-3xl selection:bg-[#EAEAEA]">
            “We’ve never experienced software design this seamless before. The execution is flawless, the turnaround is precise, and the strategic clarity elevates our vision entirely.”
          </p>

          <div className="mt-12 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-[#EAEAEA]">
               <img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100&h=100" alt="Executive" />
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-[#111111] font-sans tracking-tight">Elena Rostov</span>
              <span className="block text-xs text-[#787774] font-mono mt-0.5 uppercase tracking-widest">VP of Product</span>
            </div>
          </div>

        </div>
      </section>

      {/* 10. Side-by-Side FAQ & Image Accordions */}
      <section className="py-24 md:py-32 bg-white border-y border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            
            {/* Left FAQ content column */}
            <div className="space-y-6 md:sticky md:top-32">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111111]"></span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#787774]">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#111111] font-display leading-[1.1]">
                Details you should know before we start.
              </h2>
            </div>

            {/* Right FAQ Accordions list (Minimalist Accoridon) */}
            <div className="border-t border-[#EAEAEA]">
              {FAQS.map((faq) => {
                const isOpen = activeFaq === faq.id;
                
                return (
                  <div key={faq.id} className="border-b border-[#EAEAEA]">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full py-6 text-left flex items-center justify-between gap-4 group focus:outline-none cursor-pointer"
                    >
                      <span className="text-base font-medium text-[#111111] group-hover:text-[#787774] transition-colors pr-6">
                        {faq.question}
                      </span>
                      <span className="flex-shrink-0 text-[#111111]">
                        {isOpen ? <Minus size={16} className="stroke-[2]" /> : <Plus size={16} className="stroke-[2]" />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 text-sm text-[#787774] leading-[1.6] font-sans max-w-xl">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 11. Bottom CTA Banner Block */}
      <section className="py-24 md:py-32 bg-[#FBFBFA] border-t border-[#EAEAEA]">
        <div className="max-w-5xl mx-auto px-6">
          
          <div className="relative w-full rounded-[2rem] overflow-hidden bg-[#111111] text-white p-10 md:p-24 text-center flex flex-col items-center justify-center border border-[#EAEAEA]">
            
            {/* Background Noise & Animated Life */}
            <div 
              className="absolute inset-0 opacity-[0.06] pointer-events-none z-0 mix-blend-screen" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
               <motion.div 
                 animate={{ 
                   x: [0, 80, 0],
                   y: [0, 40, 0],
                   scale: [1, 1.2, 1],
                 }}
                 transition={{ 
                   duration: 25,
                   repeat: Infinity,
                   repeatType: "reverse",
                   ease: "linear"
                 }}
                 className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] bg-[#FFFFFF] rounded-full filter blur-[120px] opacity-[0.15] mix-blend-screen"
               />
               <motion.div 
                 animate={{ 
                   x: [0, -60, 0],
                   y: [0, 50, 0],
                   scale: [1, 1.4, 1],
                 }}
                 transition={{ 
                   duration: 20,
                   repeat: Infinity,
                   repeatType: "reverse",
                   ease: "linear"
                 }}
                 className="absolute top-[20%] -right-[15%] w-[50%] h-[70%] bg-[#EAEAEA] rounded-full filter blur-[130px] opacity-[0.12] mix-blend-screen"
               />
               <motion.div 
                 animate={{ 
                   x: [0, 50, -30, 0],
                   y: [0, -40, 40, 0],
                   scale: [1, 1.3, 1],
                 }}
                 transition={{ 
                   duration: 30,
                   repeat: Infinity,
                   repeatType: "reverse",
                   ease: "linear"
                 }}
                 className="absolute -bottom-[40%] left-[10%] w-[70%] h-[60%] bg-[#FFFFFF] rounded-full filter blur-[140px] opacity-[0.18] mix-blend-screen"
               />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              {/* Small Spots Available Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 text-white/60 rounded-full border border-white/10 mb-8 backdrop-blur-md select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-white/50"></span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em]">2 Spots Available</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 max-w-2xl font-display leading-[1.1]">
                Ready to upgrade your digital presence?
              </h2>
              
              <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-lg mb-10 font-sans">
                Join the fast-growing companies that rely on Umbral Studio for their product design and web development.
              </p>

              <button
                onClick={() => launchBooking("Book a Spot Booking")}
                className="group flex items-center gap-4 bg-white text-[#111111] px-6 py-3.5 rounded-[6px] hover:bg-[#F9F9F8] transition-all font-sans text-sm active:scale-[0.98] cursor-pointer shadow-[0_4px_14px_rgba(0,0,0,0.1)]"
              >
                <span className="font-semibold">Book a Discovery Call</span>
                <div className="flex items-center justify-center w-6 h-6 rounded-md bg-[#111111]/5 group-hover:bg-[#111111]/10 transition-colors">
                   <ArrowRight size={14} className="text-[#111111] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 12. Contact Form */}
      <section id="contact" className="py-24 md:py-32 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="flex-1">
              <span className="block text-[10px] font-bold text-[#787774] uppercase tracking-[0.1em] mb-4">Get In Touch</span>
              <h2 className="text-3xl sm:text-5xl font-display font-medium tracking-tight text-[#111111] leading-[1.1] mb-6">
                Got a project in mind?<br />Let's talk details.
              </h2>
              <p className="text-[#787774] text-sm md:text-base font-sans leading-relaxed mb-8 max-w-sm">
                Fill out the form and we'll get back to you within 24 hours with a straightforward quote.
              </p>
              
              <div className="flex flex-col gap-4">
                <a href="mailto:brallen1108@gmail.com" className="flex items-center gap-3 text-sm font-semibold text-[#111111] hover:text-[#787774] transition-colors">
                  <Mail size={16} />
                  brallen1108@gmail.com
                </a>
              </div>
            </div>

            <div className="flex-[1.2]">
              <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="name" className="text-[11px] font-bold text-[#111111] uppercase tracking-[0.05em] font-sans">Name</label>
                    <input id="name" type="text" placeholder="John Doe" className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#EAEAEA] focus:bg-white focus:shadow-[0_4px_14px_rgba(0,0,0,0.02)] rounded-[8px] px-4 py-3.5 text-sm text-[#111111] outline-none transition-all placeholder:text-[#999999]" />
                  </div>
                  
                  <div className="flex flex-col gap-2.5">
                    <label htmlFor="email" className="text-[11px] font-bold text-[#111111] uppercase tracking-[0.05em] font-sans">Email Address</label>
                    <input id="email" type="email" placeholder="john@example.com" className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#EAEAEA] focus:bg-white focus:shadow-[0_4px_14px_rgba(0,0,0,0.02)] rounded-[8px] px-4 py-3.5 text-sm text-[#111111] outline-none transition-all placeholder:text-[#999999]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2.5">
                  <label htmlFor="message" className="text-[11px] font-bold text-[#111111] uppercase tracking-[0.05em] font-sans">Project Details</label>
                  <textarea id="message" rows={5} placeholder="Tell us about your goals, timeline, and current state..." className="w-full bg-[#F5F5F5] border border-transparent focus:border-[#EAEAEA] focus:bg-white focus:shadow-[0_4px_14px_rgba(0,0,0,0.02)] rounded-[8px] px-4 py-3.5 text-sm text-[#111111] outline-none transition-all resize-none placeholder:text-[#999999]"></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="group w-full sm:w-auto h-12 flex items-center justify-center gap-3 bg-[#111111] text-[#FFFFFF] font-semibold px-8 rounded-[8px] hover:bg-[#333333] hover:shadow-[0_4px_14px_rgba(0,0,0,0.1)] transition-all font-sans text-sm active:scale-[0.98] cursor-pointer">
                    Send Message
                    <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Negative Footer Block */}
      <footer className="bg-[#FFFFFF] px-0 pb-0 pt-0 sm:pt-0 mt-0">
        <div className="bg-[#111111] rounded-t-[2rem] sm:rounded-t-[3rem] overflow-hidden flex flex-col">
          {/* Top Negative Section */}
          <div className="relative pt-24 sm:pt-32 lg:pt-40 px-4 sm:px-8 flex items-end justify-center overflow-hidden border-b-0 select-none">
             {/* Massive text */}
             <h2 
               className="text-[25vw] leading-[0.72] font-display font-medium tracking-tighter text-[#FFFFFF] translate-y-[2.5%]"
               style={{ letterSpacing: "-0.04em" }}
             >
               umbral
             </h2>
          </div>
          
          {/* Bottom Content Section */}
          <div className="bg-[#FFFFFF] pt-16 pb-12 px-8 sm:px-12 lg:px-20 rounded-t-[1.5rem] sm:rounded-t-[2.5rem] -mt-[1%] relative z-10 w-full flex flex-col shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
             <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
                <div className="md:col-span-5 lg:col-span-4">
                   <h3 className="text-xl sm:text-2xl font-sans font-bold text-[#111111] leading-tight mb-4 tracking-tight">
                     Crafted with restraint.<br />Built to outlive trends.
                   </h3>
                   <p className="text-[11px] text-[#111111] mb-8 font-sans font-medium uppercase tracking-[0.02em]">
                     Frontend precision shaped into<br />everyday interfaces.
                   </p>
                   
                   <div className="space-y-3">
                     <label className="text-sm font-bold text-[#111111] font-sans block mb-2">Enter the Umbral Journal</label>
                     <div className="flex bg-[#F2F2F2] rounded-[6px] p-1 border-none focus-within:ring-2 ring-[#111111]/20 transition-all w-full max-w-[280px]">
                       <input type="email" placeholder="type your email" className="bg-transparent border-none outline-none px-4 py-2 text-sm w-full font-sans text-[#111111] placeholder:text-[#999999]" />
                     </div>
                     <div className="flex items-center gap-4 text-[#111111] mt-6 pt-2">
                       {/* Minimal Social Icons */}
                       <a href="#" className="hover:opacity-70 transition-opacity"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                       <a href="#" className="hover:opacity-70 transition-opacity"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                       <a href="#" className="hover:opacity-70 transition-opacity"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
                     </div>
                   </div>
                </div>
                
                <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 grid grid-cols-2 sm:grid-cols-3 gap-8">
                   <div className="space-y-5">
                      <h4 className="text-sm font-bold font-sans text-[#111111]">Navigation</h4>
                      <ul className="space-y-3 text-[13px] text-[#111111] font-medium font-sans flex flex-col">
                         <li><a href="#projects" className="hover:opacity-60 transition-opacity">Work</a></li>
                         <li><a href="#benefits" className="hover:opacity-60 transition-opacity">Features</a></li>
                         <li><a href="#services" className="hover:opacity-60 transition-opacity">Pricing</a></li>
                         <li><a href="#" className="hover:opacity-60 transition-opacity">About</a></li>
                      </ul>
                   </div>
                   <div className="space-y-5">
                      <h4 className="text-sm font-bold font-sans text-[#111111]">Support</h4>
                      <ul className="space-y-3 text-[13px] text-[#111111] font-medium font-sans flex flex-col">
                         <li><a href="#" className="hover:opacity-60 transition-opacity">Client Portal</a></li>
                         <li><a href="#" className="hover:opacity-60 transition-opacity">Help Center</a></li>
                         <li><a href="#" className="hover:opacity-60 transition-opacity">Terms of Service</a></li>
                         <li><a href="#" className="hover:opacity-60 transition-opacity">Privacy Policy</a></li>
                      </ul>
                   </div>
                   <div className="space-y-5">
                      <h4 className="text-sm font-bold font-sans text-[#111111]">Capabilities</h4>
                      <ul className="space-y-3 text-[13px] text-[#111111] font-medium font-sans flex flex-col">
                         <li><a href="#" className="hover:opacity-60 transition-opacity">Landing Pages</a></li>
                         <li><a href="#" className="hover:opacity-60 transition-opacity">Web Apps</a></li>
                         <li><a href="#" className="hover:opacity-60 transition-opacity">Design Systems</a></li>
                         <li><a href="#" className="hover:opacity-60 transition-opacity">Performance</a></li>
                      </ul>
                   </div>
                </div>
             </div>
             
             <div className="pt-8">
               <p className="text-[11px] text-[#111111] font-semibold font-sans">
                 © {new Date().getFullYear()} Umbral Studio. Rooted in craft, refined through time.
               </p>
             </div>
          </div>
        </div>
      </footer>

      {/* Interactive Helper Overlay Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        title={bookingTitle}
      />
    </div>
  );
}
