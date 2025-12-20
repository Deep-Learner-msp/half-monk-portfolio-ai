
import { Card, CardContent } from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Brain, Shield, Users, Zap } from 'lucide-react';

export const About = () => {
  const specializations = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'AI Research & Innovation',
      description: 'Leading R&D teams, turning complex AI problems into scalable solutions with research-grade outcomes'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Cybersecurity AI',
      description: 'IAM security posture management, threat intelligence, and behavioral anomaly detection systems'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Strategic Leadership',
      description: 'Building and mentoring high-performing teams, bridging technical execution with business impact'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Enterprise Solutions',
      description: 'End-to-end AI platform development from research to production deployment at scale'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Chief AI Scientist and Solutions Architect with 7+ years of experience building and delivering 
            enterprise-scale AI systems that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-white">Strategic Problem Solving & Innovation</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Currently leading <span className="font-semibold text-white">AI research and innovation</span> at Infosec K2K, 
                where I head the internal AI research lab focused on solving complex problems across 
                <span className="font-semibold text-white"> cybersecurity, IAM, and mental health</span> through applied AI.
              </p>
              <p>
                My expertise spans <span className="font-semibold text-white">IAM security posture management</span>, 
                <span className="font-semibold text-white"> OSINT threat intelligence</span>, and 
                <span className="font-semibold text-white"> mental resilience platforms</span> for high-stress operational teams.
              </p>
              <p>
                Previously, I architected <span className="font-semibold text-white">enterprise-grade GenAI solutions</span> 
                at a global financial services company, including no-code AI platforms and state-of-the-art 
                text-to-SQL systems adopted across multiple business units.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="relative">
              <GlowingEffect disabled={false} className="rounded-2xl" />
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative">
                <h3 className="text-2xl font-bold mb-6 text-white">Core Philosophy</h3>
                <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                  "I bridge deep AI research with real-world execution. From model design and infrastructure
                  to MVP rollout and stakeholder impact. I build what scales, lead what delivers, and ship what matters."
                </blockquote>
                <div className="mt-4 text-sm text-gray-400">
                  Turning complex problems into scalable solutions
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <div key={index} className="relative animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <GlowingEffect disabled={false} className="rounded-2xl" />
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 bg-white/5 backdrop-blur-sm relative">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{spec.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{spec.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
