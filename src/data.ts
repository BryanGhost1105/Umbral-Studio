/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import styxHero from "./assets/images/styx/hero.png";
import styx1 from "./assets/images/styx/details (1).png";
import styx2 from "./assets/images/styx/details (2).png";
import styx3 from "./assets/images/styx/details (3).png";

import studHero from "./assets/images/stud/hero.png";
import stud1 from "./assets/images/stud/details (1).png";
import stud2 from "./assets/images/stud/details (2).png";
import stud3 from "./assets/images/stud/details (3).png";

import fundflowHero from "./assets/images/fund-flow/hero.png";
import fundflow1 from "./assets/images/fund-flow/details (1).png";
import fundflow2 from "./assets/images/fund-flow/details (2).png";
import fundflow3 from "./assets/images/fund-flow/details (3).png";

import artHero from "./assets/images/art/hero.png";
import art1 from "./assets/images/art/details (1).png";
import art2 from "./assets/images/art/details (2).png";
import art3 from "./assets/images/art/details (3).png";


import runImg from "./assets/images/hero_blur_runner_1779377149421.png";
import orisImg from "./assets/images/pack_oris_1779377173299.png";
import voroImg from "./assets/images/pack_voro_1779377197436.png";
import metroImg from "./assets/images/pack_metro_1779377221070.png";
import danceImg from "./assets/images/faq_blur_dance_1779377244333.png";

import shot255Img from "./assets/images/255shots_so.png";
import shot431Img from "./assets/images/431shots_so.png";
import shot560Img from "./assets/images/560shots_so.png";
import shot578Img from "./assets/images/578shots_so.png";

// Custom assets paths generated for the application
export const IMAGES = {
  heroBlurRunner: runImg,
  packOris: orisImg,
  packVoro: voroImg,
  packMetro: metroImg,
  faqBlurDance: danceImg,
  shot255: shot255Img,
  shot431: shot431Img,
  shot560: shot560Img,
  shot578: shot578Img,
};

export interface ProjectType {
  id: string;
  brandName: string;
  tags: string[];
  image: string;
  bgColor: string;
  details: {
    description: string;
    role: string;
    timeline: string;
    liveUrl?: string;
    images: string[];
  };
}

export const PROJECTS: ProjectType[] = [
  {
    id: "styx",
    brandName: "Styx",
    tags: ["portfolio", "sidebar"],
    image: styxHero,
    bgColor: "bg-[#f4f4f4]",
    details: {
      description: "A creative portfolio framework designed for independent freelancers and agencies. We built a fast, highly-customizable layout focusing on typography and whitespace.",
      role: "Product Design & Frontend",
      timeline: "3 Weeks",
      liveUrl: "https://styx-pi.vercel.app",
      images: [
        styxHero,
        styx1,
        styx2,
        styx3
      ]
    }
  },
  {
    id: "stud",
    brandName: "Stud",
    tags: ["UI/UX", "App"],
    image: studHero,
    bgColor: "bg-[#f4f4f4]",
    details: {
      description: "A next-generation task management application. We redesigned the core user experience, making complex data dense yet accessible through modular component design.",
      role: "UI/UX Design",
      timeline: "4 Weeks",
      liveUrl: "https://studio-agency-beryl.vercel.app",
      images: [
        studHero,
        stud1,
        stud2,
        stud3
      ]
    }
  },
  {
    id: "fund-flow",
    brandName: "Fund Flow",
    tags: ["Design System", "Web"],
    image: fundflowHero,
    bgColor: "bg-[#f4f4f4]",
    details: {
      description: "A scalable design system for internal tooling. We built a robust library of React components styled with Tailwind CSS, ensuring consistency across the engineering team.",
      role: "Frontend Engineering",
      timeline: "2 Weeks",
      liveUrl: "https://fund-flow-five.vercel.app",
      images: [
        fundflowHero,
        fundflow1,
        fundflow2,
        fundflow3
      ]
    }
  },
  {
    id: "art",
    brandName: "Artifice",
    tags: ["SaaS", "Web"],
    image: artHero,
    bgColor: "bg-[#f4f4f4]",
    details: {
      description: "A modern platform requiring a sleek marketing exterior and a powerful dashboard interior. We handled both the design and the React implementation to bring it to life.",
      role: "Design & Frontend",
      timeline: "5 Weeks",
      liveUrl: "https://a-r-t-i-f-i-c-e.vercel.app",
      images: [
        artHero,
        art1,
        art2,
        art3
      ]
    }
  }
];

export interface BenefitType {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export const BENEFITS: BenefitType[] = [
  {
    id: "unlimited",
    iconName: "Zap",
    title: "Unlimited Requests",
    description: "Submit as many design and development tasks as you need. We work through them one by one."
  },
  {
    id: "revisions",
    iconName: "CheckSquare",
    title: "Unlimited Revisions",
    description: "We iterate until you are 100% satisfied. No extra fees, no awkward conversations."
  },
  {
    id: "speed",
    iconName: "Cpu",
    title: "Lightning Fast",
    description: "Get your deliverables in under 48 hours on average. We move at the speed of your business."
  },
  {
    id: "flexible",
    iconName: "Tag",
    title: "Pause or Cancel Anytime",
    description: "No long-term contracts or hidden fees. Pause your subscription when you have no tasks."
  },
  {
    id: "top-tier",
    iconName: "Layers",
    title: "Premium Quality",
    description: "Access high-end design and engineering execution without the cost of a full-time senior hire."
  },
  {
    id: "direct",
    iconName: "UserCheck",
    title: "Direct Collaboration",
    description: "Work directly with the team building your product. No account managers or middle-men."
  }
];

export interface ServiceType {
  id: string;
  iconName: string;
  title: string;
  description: string;
  isSpecial?: boolean;
}

export const SERVICES: ServiceType[] = [
  {
    id: "websites",
    iconName: "Globe",
    title: "Websites",
    description: "Premium websites that make your brand look trusted, clear, and ready to scale."
  },
  {
    id: "landing",
    iconName: "Zap",
    title: "Landing Pages",
    description: "Conversion-focused pages for launches, marketing campaigns, and idea validation."
  },
  {
    id: "product-design",
    iconName: "Palette",
    title: "Product Design",
    description: "Clean interfaces, dashboards, SaaS products, and user flows designed for real usage."
  },
  {
    id: "frontend",
    iconName: "Cpu",
    title: "Frontend Engineering",
    description: "Robust, scalable application builds using modern technologies like Next.js and React."
  },
  {
    id: "branding",
    iconName: "Layers",
    title: "Branding",
    description: "Visual identity systems that make your brand feel sharp, premium, and memorable."
  },
  {
    id: "cta-card",
    iconName: "HelpCircle",
    title: "Need a custom build?",
    description: "Looking for a complex web app or full-stack solution? Get in touch to discuss a tailored execution plan.",
    isSpecial: true
  }
];

export interface PricingPlanType {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular?: boolean;
  features: string[];
}

export const PRICING_PLANS: PricingPlanType[] = [
  {
    id: "design-only",
    name: "Design Only",
    price: "$4,995",
    period: "/month",
    description: "For businesses that need consistent high-quality design execution every month.",
    features: [
      "Unlimited design tasks",
      "Unlimited revisions",
      "Average 48h turnaround",
      "One active request at a time",
      "Pause or cancel anytime",
      "Access to all design services"
    ]
  },
  {
    id: "design-dev",
    name: "Design + Dev",
    price: "$6,995",
    period: "/month",
    description: "For businesses that want premium design and engineering handled under one roof.",
    isPopular: true,
    features: [
      "Everything in Design Only",
      "Unlimited development tasks",
      "Full-stack React / Next.js builds",
      "Complex animations & interactions",
      "Source code delivery",
      "Pause or cancel anytime"
    ]
  }
];

export interface FAQType {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQType[] = [
  {
    id: "q1",
    question: "What does 'unlimited tasks' mean?",
    answer: "You can add as many design and development requests to your board as you'd like. We will work through them sequentially, putting our full focus onto one active task at a time until completed."
  },
  {
    id: "q2",
    question: "How fast do you deliver?",
    answer: "Typically, we deliver most requests within 2-3 business days. More complex requests like full page development or advanced product features may take a bit longer, but we break them down to ensure continuous progress."
  },
  {
    id: "q3",
    question: "Can I pause or cancel my subscription?",
    answer: "Yes, you can pause or cancel your subscription at any time. If you only use half of your month before pausing, the remaining days will be saved for whenever you're ready to resume. No wasted time, no hidden fees."
  },
  {
    id: "q4",
    question: "Is there a limit to revisions?",
    answer: "No limit at all. We want you to be completely satisfied with the result. We'll continue iterating on the design or build until it perfectly matches your vision."
  },
  {
    id: "q5",
    question: "Who do you work with?",
    answer: "We partner with fast-moving companies—from early-stage businesses needing to validate ideas quickly with a premium landing page, to established brands needing ongoing product design and frontend engineering support."
  },
  {
    id: "q6",
    question: "What tech stack do you use for development?",
    answer: "For frontend engineering, we specialize in React, Next.js, and Tailwind CSS, heavily utilizing robust animation libraries like Framer Motion to deliver performant, scalable, and beautifully interactive experiences."
  }
];
