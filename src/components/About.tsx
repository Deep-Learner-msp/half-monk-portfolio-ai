
import { Card, CardContent } from '@/components/ui/card';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Brain, Shield, Users, Zap } from 'lucide-react';

export const About = () => {
  const specializations = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'Agentic AI Systems',
      description: 'Building autonomous agent workflows and intelligent automation platforms for enterprise operations'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Supply Chain Intelligence',
      description: 'Voice-enabled agents, document extraction, and multimodal AI for logistics and transportation'
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: 'Strategic Leadership',
      description: 'Building and mentoring high-performing teams, bridging technical execution with business impact'
    },
    {
      icon: <Zap className="w-8 h-8 text-white" />,
      title: 'Enterprise AI Solutions',
      description: 'End-to-end platform development from research to production deployment across multiple domains'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Principal AI R&D Solutions Engineer with 7+ years of experience building and delivering
            production-grade AI systems across supply chain, finance, cybersecurity, and mental health domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-white">Building Next-Generation AI Systems</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Currently at <span className="font-semibold text-white">FourKites</span>, leading AI research and development
                of cutting-edge supply chain solutions. Building <span className="font-semibold text-white">agentic workflow platforms</span>,
                <span className="font-semibold text-white"> voice-enabled agents</span>, and intelligent
                <span className="font-semibold text-white"> document extraction systems</span> that transform supply chain operations.
              </p>
              <p>
                My expertise spans <span className="font-semibold text-white">agentic AI architectures</span>,
                <span className="font-semibold text-white"> multimodal systems</span>, and
                <span className="font-semibold text-white"> production-scale LLM deployments</span> across enterprise environments.
              </p>
              <p>
                Previously built <span className="font-semibold text-white">enterprise GenAI platforms</span> at State Street,
                <span className="font-semibold text-white"> IAM security solutions</span> at Infosec K2K, and
                <span className="font-semibold text-white"> AI-powered mental health systems</span> for operational teams.
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
            <div key={index} className="relative animate-fade-in-up h-full" style={{ animationDelay: `${index * 0.1}s` }}>
              <GlowingEffect disabled={false} className="rounded-2xl" />
              <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 bg-white/5 backdrop-blur-sm relative h-full">
                <CardContent className="p-6 text-center h-full flex flex-col">
                  <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {spec.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">{spec.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1">{spec.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
