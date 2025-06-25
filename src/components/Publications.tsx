
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Award } from 'lucide-react';

export const Publications = () => {
  const publications = [
    {
      title: 'System and Method for Contextual Detection and Resilience Management of Burnout Risk in Cybersecurity and High-Stress Operational Teams',
      venue: 'Patent - Infosec K2K',
      year: '2024',
      type: 'Patent',
      description: 'Patent-pending system combining workload telemetry with psychological check-ins to proactively manage human resilience risk in operational environments.',
      topics: ['Mental Health AI', 'Cybersecurity', 'Resilience Management', 'Telemetry'],
      status: 'Patent Pending',
      link: '#'
    },
    {
      title: 'Generative AI Approach to Distributed Summarisation of Financial Narratives',
      venue: 'IEEE International Conference on Big Data 2023',
      year: '2023',
      type: 'Conference Paper',
      description: 'Novel approach to summarizing financial documents using generative AI techniques in distributed settings.',
      topics: ['Generative AI', 'Document Summarization', 'Financial Analysis', 'Distributed Systems'],
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/document/10386313'
    },
    {
      title: 'Investigating Large Language Models for Financial Causality Detection in Multilingual Setup',
      venue: 'IEEE BigData 2023 / FNP Workshop',
      year: '2023',
      type: 'Conference Paper',
      description: 'Research on applying large language models for detecting causal relationships in financial narratives across multiple languages.',
      topics: ['Financial NLP', 'Causal AI', 'Multilingual Systems', 'LLMs'],
      status: 'Published',
      link: 'https://ieeexplore.ieee.org/document/10386558'
    },
    {
      title: 'DoSA: A System to Accelerate Annotations on Business Documents with Human-in-the-Loop',
      venue: 'DASH Workshop @ EMNLP 2022',
      year: '2022',
      type: 'Conference Paper',
      description: 'Innovative annotation platform that combines machine learning with human expertise to accelerate document annotation processes.',
      topics: ['Human-in-the-Loop', 'Document Intelligence', 'Annotation Systems', 'Active Learning'],
      status: 'Published',
      link: 'https://arxiv.org/abs/2211.04934'
    },
    {
      title: 'DiMSum: Distributed and Multilingual Summarization of Financial Narratives',
      venue: 'FNP Workshop @ LREC 2022',
      year: '2022',
      type: 'Workshop Paper',
      description: 'Research on distributed approaches to multilingual summarization of financial documents.',
      topics: ['Multilingual NLP', 'Financial Summarization', 'Distributed Computing'],
      status: 'Published',
      link: 'https://aclanthology.org/2022.fnp-1.9.pdf',
      award: '2nd Best Work at Financial Narrative Summarization Task'
    },
    {
      title: 'Language Identification for Indian Languages Using GHOST-VLAD',
      venue: 'ICASSP 2020',
      year: '2020',
      type: 'Conference Paper',
      description: 'Innovative approach to Indian language identification using Ghost-VLAD pooling techniques for speech processing.',
      topics: ['Speech Recognition', 'Language Identification', 'Indian Languages', 'Audio Processing'],
      status: 'Published',
      link: 'https://arxiv.org/abs/2002.01664'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-900/30 text-green-400 border-green-500/30';
      case 'Patent Pending': return 'bg-blue-900/30 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-900/30 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Patent': return <Award className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white font-serif">Publications & Research</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge research contributions spanning AI, NLP, cybersecurity, and financial technology, 
            published in top-tier conferences and journals.
          </p>
        </div>

        <div className="grid gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/10 bg-black/80 backdrop-blur-sm animate-fade-in-up hover:border-white/20" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-white mt-1">
                        {getTypeIcon(pub.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                          {pub.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-gray-300 font-semibold">{pub.venue}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-400 font-medium">{pub.year}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(pub.status)}`}>
                            {pub.status}
                          </span>
                        </div>
                        {pub.award && (
                          <div className="mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-900/30 text-yellow-400 border border-yellow-500/30">
                              <Award className="w-4 h-4 mr-1" />
                              {pub.award}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{pub.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="px-3 py-1 bg-white/5 text-gray-300 rounded-full text-sm font-medium border border-white/10">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:min-w-[120px]">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 transition-all duration-200"
                      onClick={() => window.open(pub.link, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Paper
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-white/5 backdrop-blur-sm border border-white/10 text-white animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Research Impact</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6+</div>
                  <div className="text-gray-300">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-gray-300">Best Paper Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-gray-300">Patent</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
