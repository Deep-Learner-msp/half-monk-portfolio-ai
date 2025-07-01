
import { Card, CardContent } from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      skills: [
        { name: "Natural Language Processing", color: "text-blue-400" },
        { name: "Computer Vision", color: "text-blue-400" },
        { name: "Speech Recognition", color: "text-blue-400" },
        { name: "Generative AI", color: "text-blue-400" },
        { name: "Large Language Models", color: "text-blue-400" },
        { name: "Deep Learning", color: "text-blue-400" },
        { name: "Reinforcement Learning", color: "text-blue-400" },
        { name: "Active Learning", color: "text-blue-400" },
        { name: "Multi-modal AI", color: "text-blue-400" },
        { name: "MLOps", color: "text-blue-400" }
      ]
    },
    {
      title: "Cybersecurity",
      skills: [
        { name: "Identity & Access Management", color: "text-purple-400" },
        { name: "Threat Detection", color: "text-purple-400" },
        { name: "Behavioral Analytics", color: "text-purple-400" },
        { name: "MITRE ATT&CK", color: "text-red-400" },
        { name: "Cyber Kill Chain", color: "text-purple-400" },
        { name: "Vulnerability Assessment", color: "text-purple-400" },
        { name: "Intrusion Detection", color: "text-purple-400" },
        { name: "Malware Analysis", color: "text-purple-400" },
        { name: "Security Posture Management", color: "text-purple-400" }
      ]
    },
    {
      title: "Blockchain & Infrastructure",
      skills: [
        { name: "Decentralized Identity", color: "text-green-400" },
        { name: "Smart Contracts", color: "text-green-400" },
        { name: "Blockchain Security", color: "text-green-400" }
      ]
    },
    {
      title: "Programming & Frameworks",
      skills: [
        { name: "Python", color: "text-yellow-400" },
        { name: "TensorFlow", color: "text-orange-400" },
        { name: "PyTorch", color: "text-orange-400" },
        { name: "Transformers", color: "text-orange-400" },
        { name: "FastAPI", color: "text-orange-400" },
        { name: "React", color: "text-cyan-400" }
      ]
    }
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <GlowingEffect disabled={false} className="rounded-2xl" />
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-800/60 bg-gray-900/40 backdrop-blur-sm relative hover:bg-gray-900/60 hover:border-gray-700/80">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-gray-100 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${skill.color} bg-gray-800/50 border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600/60 transition-all duration-300 hover:scale-105 cursor-default font-medium px-3 py-1.5 text-sm backdrop-blur-sm`}
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="relative animate-fade-in">
            <GlowingEffect disabled={false} className="rounded-2xl" />
            <Card className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 relative hover:bg-gray-900/60 hover:border-gray-700/80 transition-all duration-500 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gray-100 transition-colors duration-300">
                  Full-Stack AI Excellence
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto group-hover:text-gray-200 transition-colors duration-300">
                  From conceptual research to production deployment, I architect and implement 
                  comprehensive AI solutions that bridge cutting-edge research with real-world 
                  business impact. My expertise spans the entire technology stack, enabling 
                  end-to-end delivery of scalable, secure, and innovative AI systems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
