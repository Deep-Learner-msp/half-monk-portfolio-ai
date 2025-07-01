
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

export const Skills = () => {
  const features = [
    {
      Icon: FileTextIcon,
      name: "AI & Machine Learning",
      description: "Deep expertise in NLP, Computer Vision, LLMs, and MLOps with production-grade implementations.",
      href: "#",
      cta: "Explore",
      background: <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl rounded-full" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: InputIcon,
      name: "Cybersecurity",
      description: "Identity & Access Management, Threat Detection, MITRE ATT&CK frameworks, and security analytics.",
      href: "#",
      cta: "Learn more",
      background: <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-3xl rounded-full" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: GlobeIcon,
      name: "Blockchain & DeFi",
      description: "Decentralized Identity, Smart Contracts, and blockchain security implementations.",
      href: "#",
      cta: "Discover",
      background: <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-green-500/20 to-emerald-500/20 blur-3xl rounded-full" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
    {
      Icon: CalendarIcon,
      name: "Programming",
      description: "Python, TensorFlow, PyTorch, React, and full-stack development expertise.",
      href: "#",
      cta: "View Skills",
      background: <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 blur-3xl rounded-full" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
    },
    {
      Icon: BellIcon,
      name: "Research & Innovation",
      description: "Published researcher with expertise in advancing AI technologies and breakthrough implementations.",
      href: "#",
      cta: "Publications",
      background: <div className="absolute -right-20 -top-20 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-3xl rounded-full" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive expertise spanning the full AI lifecycle — from research and 
            model design to deployment via MLOps pipelines, with deep domain knowledge 
            in cybersecurity and mental health.
          </p>
        </div>

        <BentoGrid className="lg:grid-rows-3 animate-fade-in-up delay-200">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
