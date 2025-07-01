
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { Mail, Linkedin, MapPin, Phone, Github } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91-9632969122',
      link: 'tel:+919632969122',
      color: 'text-emerald-400 hover:text-emerald-300'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'mspraj00@gmail.com',
      link: 'mailto:mspraj00@gmail.com',
      color: 'text-blue-400 hover:text-blue-300'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mspraja',
      link: 'https://www.linkedin.com/in/mspraja',
      color: 'text-blue-500 hover:text-blue-400'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/mspraja',
      link: 'https://github.com/Deep-Learner-msp',
      color: 'text-gray-400 hover:text-gray-300'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Hyderabad, India',
      color: 'text-red-400 hover:text-red-300'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-100 hover:text-white transition-colors duration-300">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed hover:text-gray-300 transition-colors duration-300">
            Ready to collaborate on transformative AI solutions? Let's discuss how we can tackle 
            complex problems together and build scalable systems that drive real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="relative animate-fade-in-up">
            <GlowingEffect disabled={false} className="rounded-2xl" />
            <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-800/60 bg-gray-900/40 backdrop-blur-sm relative hover:bg-gray-900/60 hover:border-gray-700/80">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-100 group-hover:text-white transition-colors duration-300">Get In Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((contact, index) => (
                    <div key={index} className="flex items-center gap-4 group/item hover:bg-gray-800/30 p-2 rounded-lg transition-all duration-300">
                      <div className={`${contact.color} group-hover/item:scale-110 transition-transform duration-300`}>
                        {contact.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-500 mb-1 group-hover/item:text-gray-400 transition-colors duration-200">{contact.label}</div>
                        {contact.link ? (
                          <a 
                            href={contact.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-200 hover:text-white transition-colors duration-200 font-medium group-hover/item:scale-105 inline-block transition-transform"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <span className="text-gray-200 font-medium group-hover/item:text-white transition-colors duration-200">{contact.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <GlowingEffect disabled={false} className="rounded-2xl" />
            <Card className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 text-gray-100 border border-gray-800/60 backdrop-blur-sm relative hover:from-gray-900/80 hover:to-gray-900/60 hover:border-gray-700/80 transition-all duration-500 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 group-hover:text-white transition-colors duration-300">What I Bring</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 group/bullet hover:bg-gray-800/20 p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 group-hover/bullet:bg-gray-300 group-hover/bullet:scale-125 transition-all duration-300"></div>
                    <span className="text-gray-300 group-hover/bullet:text-gray-200 transition-colors duration-300">Strategic problem-solving with deep technical execution</span>
                  </div>
                  <div className="flex items-start gap-3 group/bullet hover:bg-gray-800/20 p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 group-hover/bullet:bg-gray-300 group-hover/bullet:scale-125 transition-all duration-300"></div>
                    <span className="text-gray-300 group-hover/bullet:text-gray-200 transition-colors duration-300">End-to-end AI system development and deployment</span>
                  </div>
                  <div className="flex items-start gap-3 group/bullet hover:bg-gray-800/20 p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 group-hover/bullet:bg-gray-300 group-hover/bullet:scale-125 transition-all duration-300"></div>
                    <span className="text-gray-300 group-hover/bullet:text-gray-200 transition-colors duration-300">Cross-domain expertise in cybersecurity and AI</span>
                  </div>
                  <div className="flex items-start gap-3 group/bullet hover:bg-gray-800/20 p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 group-hover/bullet:bg-gray-300 group-hover/bullet:scale-125 transition-all duration-300"></div>
                    <span className="text-gray-300 group-hover/bullet:text-gray-200 transition-colors duration-300">Innovation leadership and team building</span>
                  </div>
                  <div className="flex items-start gap-3 group/bullet hover:bg-gray-800/20 p-2 rounded transition-all duration-300">
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0 group-hover/bullet:bg-gray-300 group-hover/bullet:scale-125 transition-all duration-300"></div>
                    <span className="text-gray-300 group-hover/bullet:text-gray-200 transition-colors duration-300">Research-to-product translation expertise</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="relative animate-fade-in">
            <GlowingEffect disabled={false} className="rounded-2xl" />
            <Card className="bg-gray-900/40 backdrop-blur-sm border border-gray-800/60 relative hover:bg-gray-900/60 hover:border-gray-700/80 transition-all duration-500 group">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-100 group-hover:text-white transition-colors duration-300">Ready to Build the Future?</h3>
                <p className="text-gray-400 mb-6 max-w-2xl mx-auto group-hover:text-gray-300 transition-colors duration-300">
                  Whether you're looking for AI innovation, cybersecurity solutions, or strategic technical leadership, 
                  let's connect and explore how we can create meaningful impact together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-gray-100 text-black hover:bg-white hover:shadow-2xl px-8 py-4 text-lg smooth-transition hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('mailto:mspraj00@gmail.com', '_blank')}
                  >
                    <Mail className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                    Send Email
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-gray-600/60 text-gray-200 hover:bg-gray-800/40 hover:border-gray-500/80 hover:text-white px-8 py-4 text-lg smooth-transition bg-transparent hover:scale-105 transition-all duration-300"
                    onClick={() => window.open('https://www.linkedin.com/in/mspraja', '_blank')}
                  >
                    <Linkedin className="mr-2 group-hover:rotate-12 transition-transform duration-300" size={20} />
                    Connect on LinkedIn
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
