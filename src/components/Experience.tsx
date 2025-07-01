
import { MagicCard } from '@/components/magicui/magic-card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: 'Infosec K2K',
      role: 'Principal AI Scientist and Architect',
      duration: 'October 2024 - Present',
      location: 'Hyderabad, Telangana, India',
      description: 'Leading applied AI research and product development with focus on solving real-world cybersecurity problems, especially in Identity and Access Management (IAM) domain.',
      achievements: [
        'Established and lead K2K Labs, internal research and innovation division',
        'Architected IAM Security Posture Management tool aggregating data from AD, Entra ID, and CyberArk',
        'Developed MIRA, AI-powered mental health platform for CISOs and SOC teams',
        'Building blockchain-based decentralized identity solutions',
        'Creating frameworks to secure AI pipelines from adversarial threats'
      ],
      technologies: ['AI Security', 'IAM', 'Blockchain', 'Mental Health AI', 'MITRE ATT&CK']
    },
    {
      company: 'State Street',
      role: 'Manager (Principal AI Architect/Scientist)',
      duration: 'March 2024 - September 2024',
      location: 'Hyderabad, Telangana, India',
      description: 'Spearheaded enterprise-wide Generative AI platform development, delivering production-grade LLM-powered products across finance, compliance, HR, and operations.',
      achievements: [
        'Built Text-to-SQL Copilot translating natural language to complex Snowflake queries',
        'Developed Document Extraction Platform for financial documents using open-source LLMs',
        'Created LLM-based NAV Narratives App for portfolio insights and anomaly tracking',
        'Deployed AI Playground (Local LLM Store) for internal use cases',
        'Built fine-tuned LLMs for employee mental wellness monitoring',
        'Published T2I-RISE research at IEEE 2025'
      ],
      technologies: ['LLMs', 'Generative AI', 'Snowflake', 'RAG', 'FinTech', 'Document Intelligence']
    },
    {
      company: 'State Street',
      role: 'Principal AI Scientist',
      duration: 'April 2023 - March 2024',
      location: 'Hyderabad, Telangana, India',
      description: 'Drove innovation in financial NLP and multilingual causality detection using Generative AI and fine-tuned LLMs.',
      achievements: [
        'Designed causal reasoning models for financial events and economic impact analysis',
        'Researched and benchmarked OpenAI GPT models for financial narrative tasks',
        'Advanced techniques in prompt design, few-shot learning, and semantic evaluation',
        'Published 2 research papers at IEEE BigData 2023'
      ],
      technologies: ['Financial NLP', 'Causal AI', 'GPT Models', 'Multilingual Systems']
    },
    {
      company: 'State Street',
      role: 'Team Lead & Lead Data Scientist II',
      duration: 'March 2022 - June 2023',
      location: 'Hyderabad, Telangana, India',
      description: 'Led AI product teams and research squads in deep learning, document intelligence, and multilingual summarization.',
      achievements: [
        'Delivered production-ready Document Intelligence Platform using LayoutLM',
        'Designed in-house ML-powered annotation tool with auto-labeling capabilities',
        'Directed multilingual summarization research securing top ranks at FNP Workshop',
        'Published DoSA system research at EMNLP 2022'
      ],
      technologies: ['Document AI', 'LayoutLM', 'Multilingual NLP', 'Annotation Systems']
    },
    {
      company: 'FortunaPIX',
      role: 'Senior Data Scientist',
      duration: 'December 2019 - May 2021',
      location: 'Hyderabad Area, India',
      description: 'Solo Data Scientist building end-to-end AI solutions for cybersecurity and healthcare domains from scratch.',
      achievements: [
        'Built behavioral anomaly detection systems and insider threat models',
        'Developed AI-powered intrusion detection engines using structured/unstructured data',
        'Designed recommendation systems for real-time threat response using CVE/CWE intelligence',
        'Implemented malware prediction using MITRE ATT&CK tactics',
        'Delivered ML solutions in mental health risk scoring and diagnostics'
      ],
      technologies: ['Cybersecurity AI', 'Anomaly Detection', 'Threat Intelligence', 'Healthcare AI']
    },
    {
      company: 'YOUPLUS',
      role: 'Machine Learning Researcher',
      duration: 'October 2017 - December 2019',
      location: 'Bengaluru, Karnataka, India',
      description: 'Built ML/NLP-powered content intelligence systems for multilingual and multimedia datasets.',
      achievements: [
        'Contributed to Language Identification Model for Indian languages using Ghost VLAD Pooling',
        'Built audio preprocessing pipelines for 800+ hours of multilingual data',
        'Developed Nudity Detection and Brand Safety System using YOLOv3',
        'Led sentiment analysis for large-scale customer review data'
      ],
      technologies: ['Computer Vision', 'Speech Processing', 'Content Moderation', 'Sentiment Analysis']
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A journey through innovative AI solutions across cybersecurity, fintech, and technology domains, 
            consistently delivering production-grade systems and breakthrough research.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <MagicCard 
              key={index} 
              className="animate-fade-in-up rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
              gradientColor="#1a1a1a"
              gradientFrom="#3b82f6"
              gradientTo="#8b5cf6"
            >
              <div className="p-8 bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-gray-800/60">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1 mb-4 lg:mb-0">
                    <div className="flex items-center mb-2">
                      <Building className="w-5 h-5 text-blue-400 mr-2" />
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <h4 className="text-xl font-semibold text-blue-400 mb-2">{exp.role}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-white mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-lg font-semibold text-white mb-3">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} className="bg-gray-800/50 text-gray-300 hover:bg-gray-700/60 border border-gray-700/50 transition-all duration-200">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </MagicCard>
          ))}
        </div>
      </div>
    </section>
  );
};
