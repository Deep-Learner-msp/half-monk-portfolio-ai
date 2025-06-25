
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen, Award } from 'lucide-react';

export const Publications = () => {
  const publications = [
    {
      title: 'T2I-RISE: Text-to-Insights with Reinforcement learning, Integration of Semantic layers and Enrichment - A Comprehensive Approach with Conversational Context and Feedback Systems',
      venue: 'IEEE 2025',
      year: '2025',
      type: 'Conference Paper',
      description: 'Introduced a novel natural language-to-SQL framework combining RAG, RLHF, and feedback loops for querying complex databases.',
      topics: ['Natural Language Processing', 'Reinforcement Learning', 'Database Systems', 'RAG'],
      status: 'Published'
    },
    {
      title: 'Investigating Large Language Models for Financial Causality Detection in Multilingual Setup',
      venue: 'IEEE BigData 2023',
      year: '2023',
      type: 'Conference Paper',
      description: 'Research on applying large language models for detecting causal relationships in financial narratives across multiple languages.',
      topics: ['Financial NLP', 'Causal AI', 'Multilingual Systems', 'LLMs'],
      status: 'Published'
    },
    {
      title: 'Generative AI Approach to Distributed Summarization of Financial Narratives',
      venue: 'IEEE BigData 2023',
      year: '2023',
      type: 'Conference Paper',
      description: 'Novel approach to summarizing financial documents using generative AI techniques in distributed settings.',
      topics: ['Generative AI', 'Document Summarization', 'Financial Analysis', 'Distributed Systems'],
      status: 'Published'
    },
    {
      title: 'DoSA: A System to Accelerate Annotations on Business Documents with Human-in-the-Loop',
      venue: 'EMNLP Conference 2022',
      year: '2022',
      type: 'Conference Paper',
      description: 'Presented an innovative annotation platform that combines machine learning with human expertise to accelerate document annotation processes.',
      topics: ['Human-in-the-Loop', 'Document Intelligence', 'Annotation Systems', 'Active Learning'],
      status: 'Published'
    },
    {
      title: 'DiMSum: Distributed and Multilingual Summarization of Financial Narratives',
      venue: 'FNP Workshop @ LREC 2022',
      year: '2022',
      type: 'Workshop Paper',
      description: 'Research on distributed approaches to multilingual summarization of financial documents.',
      topics: ['Multilingual NLP', 'Financial Summarization', 'Distributed Computing'],
      status: 'Published',
      award: '2nd Best Work at Financial Narrative Summarization Task'
    },
    {
      title: 'Identification of Indian Languages using Ghost-VLAD pooling',
      venue: 'Patent Application',
      year: '2019',
      type: 'Patent',
      description: 'Innovative approach to Indian language identification using Ghost-VLAD pooling techniques for speech processing.',
      topics: ['Speech Recognition', 'Language Identification', 'Indian Languages', 'Audio Processing'],
      status: 'Patented'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Patented': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Patent': return <Award className="w-5 h-5" />;
      default: return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Publications & Research</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge research contributions spanning AI, NLP, cybersecurity, and financial technology, 
            published in top-tier conferences and journals.
          </p>
        </div>

        <div className="grid gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-blue-600 mt-1">
                        {getTypeIcon(pub.type)}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                          {pub.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span className="text-blue-600 font-semibold">{pub.venue}</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-gray-600 font-medium">{pub.year}</span>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(pub.status)}`}>
                            {pub.status}
                          </span>
                        </div>
                        {pub.award && (
                          <div className="mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                              <Award className="w-4 h-4 mr-1" />
                              {pub.award}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{pub.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {pub.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-sm font-medium">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 lg:min-w-[120px]">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
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
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white animate-fade-in">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Research Impact</h3>
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">6+</div>
                  <div className="text-blue-100">Publications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">3</div>
                  <div className="text-blue-100">Best Paper Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">1</div>
                  <div className="text-blue-100">Patent</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
