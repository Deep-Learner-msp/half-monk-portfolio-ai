
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Skills = () => {
  const skillCategories = [
    {
      category: 'AI & Machine Learning',
      skills: ['Natural Language Processing', 'Computer Vision', 'Speech Recognition', 'Generative AI', 'Large Language Models', 'Deep Learning', 'MLOps', 'Reinforcement Learning', 'Active Learning', 'Multi-modal AI'],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      category: 'Cybersecurity',
      skills: ['Identity & Access Management', 'Threat Detection', 'Behavioral Analytics', 'MITRE ATT&CK', 'Cyber Kill Chain', 'Vulnerability Assessment', 'Intrusion Detection', 'Malware Analysis', 'Security Posture Management'],
      color: 'bg-purple-100 text-purple-800'
    },
    {
      category: 'Blockchain & Infrastructure',
      skills: ['Decentralized Identity', 'Smart Contracts', 'Blockchain Security', 'Distributed Systems', 'Kubernetes', 'Docker', 'CI/CD', 'Cloud Platforms', 'Microservices'],
      color: 'bg-green-100 text-green-800'
    },
    {
      category: 'Programming & Frameworks',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Transformers', 'FastAPI', 'React', 'Node.js', 'SQL', 'NoSQL', 'Apache Spark', 'Elasticsearch', 'MongoDB'],
      color: 'bg-orange-100 text-orange-800'
    },
    {
      category: 'Research & Domain Expertise',
      skills: ['Document Intelligence', 'Financial NLP', 'Multilingual Systems', 'Mental Health Analytics', 'Annotation Platforms', 'Data Engineering', 'Statistical Analysis', 'A/B Testing'],
      color: 'bg-pink-100 text-pink-800'
    },
    {
      category: 'Leadership & Strategy',
      skills: ['Team Leadership', 'Product Strategy', 'Technical Architecture', 'Cross-functional Collaboration', 'Stakeholder Management', 'Innovation Management', 'Agile Methodologies'],
      color: 'bg-indigo-100 text-indigo-800'
    }
  ];

  const certifications = [
    'Generative AI with Large Language Models',
    'Python for Data Science and Machine Learning Bootcamp',
    'Fundamentals of MCP',
    'Machine Learning Nano Degree',
    'Python 101 for Data Science from CognitiveClass.ai'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive expertise spanning the full AI lifecycle — from research and model design 
            to deployment via MLOps pipelines, with deep domain knowledge in cybersecurity and mental health.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className={`${category.color} hover:scale-105 transition-transform duration-200`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-fade-in">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">Professional Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/30 transition-all duration-300">
                  <p className="font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
