
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Star, Zap, Award } from 'lucide-react';

export const Awards = () => {
  const awards = [
    {
      title: '2nd Best Work at Financial Narrative Summarization Task',
      event: 'FNP Workshop - LREC 2022',
      year: '2022',
      description: 'Recognized for outstanding research in multilingual financial document summarization using advanced NLP techniques.',
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      category: 'Research Excellence'
    },
    {
      title: 'Ranked 1 in Greek Language Financial Narrative Summarization',
      event: 'FNP Workshop - LREC 2022',
      year: '2022',
      description: 'Achieved top performance in Greek language financial narrative summarization task, demonstrating expertise in multilingual NLP.',
      icon: <Star className="w-8 h-8 text-blue-600" />,
      category: 'Technical Achievement'
    },
    {
      title: 'Winner of State Street Technology Global Hackathon in AI',
      event: 'State Street Global Hackathon',
      year: '2023-2024',
      description: 'Two-time consecutive winner for innovative AI solutions in financial technology, delivering high-impact live product demos.',
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      category: 'Innovation'
    },
    {
      title: 'Standing Ovation Award for Conversation AI Assistant',
      event: 'State Street Global Hackathon',
      year: '2024',
      description: 'Received standing ovation for developing a complete Conversation AI assistant problem solution in just 24 hours.',
      icon: <Award className="w-8 h-8 text-blue-600" />,
      category: 'Outstanding Performance'
    },
    {
      title: 'Bravo Recognition Award',
      event: 'State Street',
      year: '2023',
      description: 'Achieved Bravo Recognition Award for consistently delivering results with integrity and speed across multiple high-impact projects.',
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      category: 'Professional Excellence'
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Research Excellence': 'bg-yellow-100 text-yellow-800',
      'Technical Achievement': 'bg-blue-100 text-blue-800',
      'Innovation': 'bg-blue-100 text-blue-800',
      'Outstanding Performance': 'bg-blue-100 text-blue-800',
      'Professional Excellence': 'bg-yellow-100 text-yellow-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="awards" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 gradient-text">Awards & Recognition</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Recognition for exceptional contributions to AI research, innovative problem-solving, 
            and delivering transformative solutions in competitive environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {awards.map((award, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {award.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(award.category)}`}>
                        {award.category}
                      </span>
                      <span className="text-gray-500 text-sm font-medium">{award.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                      {award.title}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-3">{award.event}</p>
                    <p className="text-gray-700 leading-relaxed">{award.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white animate-fade-in">
            <CardContent className="p-6 text-center">
              <Trophy className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">5+</div>
              <div className="text-sm opacity-90">Major Awards</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-700 text-white animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardContent className="p-6 text-center">
              <Zap className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">2x</div>
              <div className="text-sm opacity-90">Hackathon Winner</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <Star className="w-12 h-12 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">#1</div>
              <div className="text-sm opacity-90">Ranked Achievements</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
