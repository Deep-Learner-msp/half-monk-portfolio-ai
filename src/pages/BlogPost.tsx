import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Calendar, Clock, ArrowLeft, TrendingUp, Target, Lightbulb, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getBlogPostById } from '@/data/blogPosts';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  const post = id ? getBlogPostById(id) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <Link to="/blog">
            <Button>Return to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/blog">
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white mb-8 -ml-4 transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to All Case Studies
            </Button>
          </Link>

          {/* Header */}
          <div className="mb-12 animate-fade-in-up">
            <span className={`
              inline-block px-4 py-2 text-sm font-medium rounded-full border mb-6
              ${post.category === 'Supply Chain AI' ? 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300' : ''}
              ${post.category === 'Cybersecurity' ? 'bg-red-500/20 border-red-400/30 text-red-300' : ''}
              ${post.category === 'Mental Health AI' ? 'bg-pink-500/20 border-pink-400/30 text-pink-300' : ''}
              ${post.category === 'Emerging AI' ? 'bg-purple-500/20 border-purple-400/30 text-purple-300' : ''}
            `}>
              {post.category}
            </span>

            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} read
              </div>
            </div>
          </div>

          {/* Challenge Section */}
          <section className="mb-12 animate-fade-in-up delay-200">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-red-400" />
              <h2 className="text-3xl font-bold text-white">The Challenge</h2>
            </div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {post.challenge.description}
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Pain Points:</h3>
                  {post.challenge.painPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Approach Section */}
          <section className="mb-12 animate-fade-in-up delay-300">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-6 h-6 text-yellow-400" />
              <h2 className="text-3xl font-bold text-white">The Approach</h2>
            </div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {post.approach.description}
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white mb-4">Techniques Used:</h3>
                  {post.approach.techniques.map((technique, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{technique}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Solution Section */}
          <section className="mb-12 animate-fade-in-up delay-400">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-blue-400" />
              <h2 className="text-3xl font-bold text-white">The Solution</h2>
            </div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {post.solution.description}
                </p>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-white mb-4">Implementation Details:</h3>
                  {post.solution.implementation.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Results Section */}
          <section className="mb-12 animate-fade-in-up delay-500">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-green-400" />
              <h2 className="text-3xl font-bold text-white">Results & Impact</h2>
            </div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <CardContent className="p-8">
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  {post.results.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {post.results.metrics.map((metric, index) => (
                    <Card key={index} className="border border-green-500/20 bg-green-500/5">
                      <CardContent className="p-6">
                        <h4 className="text-sm text-gray-400 mb-2">{metric.label}</h4>
                        <div className="text-4xl font-bold text-green-400 mb-2">
                          {metric.value}
                        </div>
                        <p className="text-sm text-gray-300">{metric.improvement}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Key Takeaways */}
          <section className="mb-12 animate-fade-in-up delay-600">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Key Takeaways</h2>
            </div>
            <Card className="border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-4">
                  {post.keyTakeaways.map((takeaway, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                      <p className="text-gray-300 text-lg leading-relaxed">{takeaway}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Technologies */}
          <section className="mb-12 animate-fade-in-up delay-700">
            <h3 className="text-xl font-semibold text-white mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {post.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-800/60 border border-gray-700/40 text-gray-300 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="text-center pt-8 border-t border-white/10">
            <Link to="/blog">
              <Button className="bg-white text-black hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                <ArrowLeft className="w-4 h-4 mr-2" />
                View More Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
