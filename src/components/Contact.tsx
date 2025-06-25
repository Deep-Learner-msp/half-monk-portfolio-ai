
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'mspraj00@gmail.com',
      link: 'mailto:mspraj00@gmail.com',
      color: 'text-blue-600'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mspraja',
      link: 'https://www.linkedin.com/in/mspraja',
      color: 'text-blue-700'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'Hyderabad, Telangana, India',
      color: 'text-green-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Let's Connect</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to collaborate on innovative AI solutions? Let's discuss how we can tackle 
            complex problems together and build what matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`${contact.color} group-hover:scale-110 transition-transform duration-300`}>
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-500 mb-1">{contact.label}</div>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 hover:text-blue-600 transition-colors duration-200 font-medium"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <span className="text-gray-800 font-medium">{contact.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-purple-600 text-white animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">What I Bring</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">Strategic problem-solving with deep technical execution</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">End-to-end AI system development and deployment</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">Cross-domain expertise in cybersecurity and AI</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">Innovation leadership and team building</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-blue-100">Research-to-product translation expertise</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Card className="bg-white/90 backdrop-blur-sm border-0 animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Build the Future?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Whether you're looking for AI innovation, cybersecurity solutions, or strategic technical leadership, 
                let's connect and explore how we can create meaningful impact together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg smooth-transition"
                  onClick={() => window.open('mailto:mspraj00@gmail.com', '_blank')}
                >
                  <Mail className="mr-2" size={20} />
                  Send Email
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg smooth-transition"
                  onClick={() => window.open('https://www.linkedin.com/in/mspraja', '_blank')}
                >
                  <Linkedin className="mr-2" size={20} />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
