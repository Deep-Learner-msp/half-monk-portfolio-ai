
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Shield, Blocks, Heart } from 'lucide-react';

export const About = () => {
  const specializations = [
    {
      icon: <Brain className="w-8 h-8 text-white" />,
      title: 'AI & Machine Learning',
      description: 'Deep expertise in NLP, computer vision, speech recognition, and generative AI systems'
    },
    {
      icon: <Shield className="w-8 h-8 text-white" />,
      title: 'Cybersecurity',
      description: 'IAM security, threat detection, behavioral anomaly analysis, and AI system protection'
    },
    {
      icon: <Blocks className="w-8 h-8 text-white" />,
      title: 'Blockchain & Identity',
      description: 'Decentralized identity solutions, smart contracts, and blockchain-powered IAM systems'
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Mental Health Tech',
      description: 'AI-driven platforms for burnout prevention and mental wellness in high-stress environments'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Strategic problem solver combining deep technical expertise with product leadership to deliver 
            usable, scalable, and impactful AI solutions for the real world.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Leadership & Innovation</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                At <span className="font-semibold text-white">Infosec K2K</span>, I lead K2K Labs, our applied research division 
                delivering open-source tools, security algorithms, and white papers — all focused on translating 
                complex research into shippable, production-grade systems.
              </p>
              <p>
                My work spans <span className="font-semibold text-white">posture management</span>, <span className="font-semibold text-white">decentralised IAM</span>, 
                <span className="font-semibold text-white"> AI threat protection</span>, and <span className="font-semibold text-white">mental resilience platforms</span>.
              </p>
              <p>
                Previously at <span className="font-semibold text-white">State Street</span>, I led GenAI initiatives as Principal 
                Data Scientist, building NLP and LLM systems for fintech, recognized as a two-time consecutive 
                winner of the State Street Global AI Hackathon.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">Core Philosophy</h3>
              <blockquote className="text-lg text-gray-300 italic leading-relaxed">
                "I don't just talk AI — I make it real. Whether it's for an MVP demo, a pitch, or a live deployment, 
                I move fast without compromising quality. I deliver when it matters."
              </blockquote>
              <div className="mt-4 text-sm text-gray-400">
                — Building the bridge between research and real-world impact
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specializations.map((spec, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {spec.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{spec.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{spec.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
