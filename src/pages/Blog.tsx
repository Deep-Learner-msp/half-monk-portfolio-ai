import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllBlogPosts, Category as BlogCategory } from '@/data/blogPosts';

type Category = 'All' | BlogCategory;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Supply Chain AI', 'Cybersecurity', 'Mental Health AI', 'Emerging AI'];

  const blogPosts = getAllBlogPosts();

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-black">
      <Navigation />

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
              AI Case Studies & Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Practical case studies, technical deep-dives, and real-world applications across
              supply chain, cybersecurity, mental health AI, and emerging techniques.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up delay-200">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`
                  ${selectedCategory === category
                    ? 'bg-white text-black hover:bg-gray-200'
                    : 'border-gray-600 text-gray-300 hover:bg-gray-800/40 hover:text-white bg-transparent'
                  }
                  transition-all duration-300 hover:scale-105
                `}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'All' && (
            <Link to={`/blog/${featuredPost.id}`}>
              <Card className="mb-12 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden animate-fade-in-up delay-400">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 h-64 md:h-auto flex items-center justify-center">
                      <div className="text-center p-8">
                        <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-medium rounded-full mb-4">
                          FEATURED CASE STUDY
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="inline-block px-3 py-1 bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-medium rounded-full mb-4 w-fit">
                        {featuredPost.category}
                      </span>
                      <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-gray-400 text-sm mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="font-medium mr-2">Read Case Study</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )}

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Link key={post.id} to={`/blog/${post.id}`}>
                <Card
                  className="group h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10 bg-white/5 backdrop-blur-sm animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <span className={`
                        inline-block px-3 py-1 text-xs font-medium rounded-full border
                        ${post.category === 'Supply Chain AI' ? 'bg-cyan-500/20 border-cyan-400/30 text-cyan-300' : ''}
                        ${post.category === 'Cybersecurity' ? 'bg-red-500/20 border-red-400/30 text-red-300' : ''}
                        ${post.category === 'Mental Health AI' ? 'bg-pink-500/20 border-pink-400/30 text-pink-300' : ''}
                        ${post.category === 'Emerging AI' ? 'bg-purple-500/20 border-purple-400/30 text-purple-300' : ''}
                      `}>
                        {post.category}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-300 transition-colors flex-grow-0">
                      {post.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-gray-500 text-xs mt-auto pt-4 border-t border-white/5">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No case studies found in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;
