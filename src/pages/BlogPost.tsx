import { useParams, Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { Calendar, Clock, ArrowLeft, TrendingUp, Target, Lightbulb, Award, Briefcase, Layers, BookOpen, MessageCircle, Linkedin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getBlogPostById } from '@/data/blogPosts';
import TechnicalBlogPost from './TechnicalBlogPost';
import { AnimationPlayer } from '@/components/blog/AnimationPlayer';
import { TechnicalDeepDive } from '@/components/blog/TechnicalDeepDive';
import { SEO } from '@/components/SEO';
import { ArticleStructuredData, BreadcrumbStructuredData } from '@/components/StructuredData';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Route to technical post component for specific IDs
  if (id === '004-ai-adversarial-defense') {
    return <TechnicalBlogPost />;
  }

  const post = id ? getBlogPostById(id) : undefined;

  // Animation mapping for each blog post
  const animationConfig: Record<string, { src: string; title: string; description: string; poster: string }> = {
    '003-iam-threat-detection': {
      src: '/animations/GNNIAMArchitecture.mp4',
      poster: '/animations/GNNIAMArchitecture-poster.jpg',
      title: 'Graph Neural Network Architecture for IAM Threat Detection',
      description: 'Interactive visualization showing heterogeneous graph construction (Users → Roles → Resources), Graph Attention Network processing with attention weights, temporal behavior analysis, and anomaly detection. Watch how the system achieves 92% F1 score with 88% reduction in false positives.',
    },
    '002-voice-enabled-supply-chain': {
      src: '/animations/VoiceAIPipeline.mp4',
      poster: '/animations/VoiceAIPipeline-poster.jpg',
      title: 'Voice AI Processing Pipeline',
      description: 'Complete end-to-end pipeline from warehouse audio input through Wav2Vec 2.0 speech recognition (94.7% accuracy in 85dB+ noise), BERT-based intent classification (98.3% accuracy), dialogue management, to TTS output. See how the system achieves <200ms latency with edge processing.',
    },
    '001-toolformer-research-annotation': {
      src: '/animations/ToolformerLearning.mp4',
      poster: '/animations/ToolformerLearning-poster.jpg',
      title: 'Toolformer Self-Supervised Learning Process',
      description: 'Step-by-step visualization of how Toolformer teaches LLMs to use tools without human annotation: sampling potential API calls, executing and evaluating them using weighted loss, filtering beneficial invocations, and fine-tuning. Watch how this achieves +15.2% improvement on math tasks.',
    },
  };

  // Real-world applications and use cases
  const applicationsConfig: Record<string, { title: string; useCases: { industry: string; application: string; benefit: string }[] }> = {
    '003-iam-threat-detection': {
      title: 'Real-World Applications & Use Cases',
      useCases: [
        {
          industry: 'Financial Services',
          application: 'Banking IAM threat detection for privileged account monitoring across millions of daily transactions',
          benefit: 'Prevents insider trading, unauthorized wire transfers, and account takeover attempts with 96% catch rate'
        },
        {
          industry: 'Healthcare (HIPAA Compliance)',
          application: 'Electronic Health Record access monitoring detecting unusual patient data access patterns',
          benefit: 'Protects patient privacy, ensures HIPAA compliance, reduces data breach risk by 89%'
        },
        {
          industry: 'Cloud Service Providers',
          application: 'Multi-tenant environment access monitoring for AWS, Azure, GCP IAM systems',
          benefit: 'Prevents lateral movement, detects privilege escalation across 100K+ user accounts'
        },
        {
          industry: 'Government & Defense',
          application: 'Classified system access monitoring with multi-level security clearance verification',
          benefit: 'Identifies insider threats and foreign adversary reconnaissance with 99.1% accuracy'
        },
        {
          industry: 'Enterprise SaaS',
          application: 'Customer IAM protection for B2B platforms with federated identity management',
          benefit: 'Reduces customer security incidents by 78%, improves trust and compliance posture'
        }
      ]
    },
    '002-voice-enabled-supply-chain': {
      title: 'Real-World Applications & Use Cases',
      useCases: [
        {
          industry: 'E-Commerce Fulfillment',
          application: 'Amazon-style warehouse picking optimization with voice-guided workflows for 500+ pickers',
          benefit: '35% increase in pick rate, 42% reduction in training time, 89% worker satisfaction'
        },
        {
          industry: 'Automotive Manufacturing',
          application: 'Assembly line parts tracking and quality control with hands-free voice commands',
          benefit: '28% faster assembly time, 67% reduction in defect logging errors'
        },
        {
          industry: '3PL & Cold Storage',
          application: 'Temperature-controlled warehouse operations where gloves prevent device use',
          benefit: '51% productivity gain, zero device-related safety incidents, perfect audit compliance'
        },
        {
          industry: 'Pharmaceutical Distribution',
          application: 'FDA-regulated drug tracking with voice verification for serialization compliance',
          benefit: '100% traceability, 94% reduction in compliance violations, real-time deviation alerts'
        },
        {
          industry: 'Retail Store Operations',
          application: 'Backroom inventory management and stockroom picking for omnichannel fulfillment',
          benefit: '40% faster order fulfillment, 85% improvement in inventory accuracy'
        }
      ]
    },
    '001-toolformer-research-annotation': {
      title: 'Real-World Applications & Use Cases',
      useCases: [
        {
          industry: 'Financial Analytics',
          application: 'Automated financial report generation combining LLM narrative with calculator/database tools',
          benefit: 'Generates accurate earnings reports 10x faster with zero mathematical errors'
        },
        {
          industry: 'Customer Support AI',
          application: 'AI agents that query order databases, check inventory, and calculate refunds inline',
          benefit: 'Resolves 78% of tickets autonomously, 4.2/5 customer satisfaction rating'
        },
        {
          industry: 'Scientific Research',
          application: 'Research assistants that execute Python code, query literature databases, and verify calculations',
          benefit: 'Accelerates hypothesis testing by 65%, ensures reproducible computational results'
        },
        {
          industry: 'Code Generation',
          application: 'IDE assistants that execute code, query documentation APIs, and validate outputs',
          benefit: '43% increase in developer productivity, 89% code correctness on first attempt'
        },
        {
          industry: 'Education Technology',
          application: 'Tutoring systems that demonstrate step-by-step problem solving with tool use',
          benefit: '92% student comprehension improvement, personalized learning at scale'
        }
      ]
    },
  };

  // Frameworks and tools
  const frameworksConfig: Record<string, { frameworks: { name: string; purpose: string; why: string }[] }> = {
    '003-iam-threat-detection': {
      frameworks: [
        {
          name: 'PyTorch Geometric',
          purpose: 'Graph neural network implementation with built-in GAT, GCN, and GIN layers',
          why: 'Industry-standard for graph ML with 50K+ GitHub stars, excellent documentation, and CUDA acceleration'
        },
        {
          name: 'Neo4j Graph Database',
          purpose: 'Store and query 2.5M node, 18M edge identity graphs with millisecond Cypher queries',
          why: 'Production-proven for fraud detection at Walmart, eBay, and Airbnb with native graph storage'
        },
        {
          name: 'Apache Spark',
          purpose: 'Distributed graph construction pipeline processing 50M+ daily access events',
          why: 'Handles enterprise-scale data with fault tolerance, scales horizontally across 100+ nodes'
        },
        {
          name: 'MITRE ATT&CK Framework',
          purpose: 'Map detected anomalies to known adversary tactics (T1078, T1098, T1069)',
          why: 'Universal threat language for SOC teams, enables integration with existing SIEM systems'
        },
        {
          name: 'MLflow',
          purpose: 'Track GNN model experiments, hyperparameters, and production deployment versions',
          why: 'Open-source ML lifecycle management with 15K+ enterprises using it in production'
        }
      ]
    },
    '002-voice-enabled-supply-chain': {
      frameworks: [
        {
          name: 'Wav2Vec 2.0 (Facebook AI)',
          purpose: 'Self-supervised speech recognition achieving 94.7% WER in noisy warehouses',
          why: 'SOTA accuracy with limited labeled data, fine-tunes on domain audio in hours vs. weeks'
        },
        {
          name: 'HuggingFace Transformers',
          purpose: 'BERT model fine-tuning for 47 supply chain intents with 98.3% accuracy',
          why: 'Largest model hub (500K+ models), one-line deployment, automatic optimization'
        },
        {
          name: 'FastAPI',
          purpose: 'Build async API backend serving 8,500+ daily voice transactions with <200ms latency',
          why: 'Auto-generates OpenAPI docs, native async support, 3x faster than Flask'
        },
        {
          name: 'Rasa',
          purpose: 'Dialogue management framework handling 12 workflow types with context tracking',
          why: 'Open-source alternative to DialogFlow with on-premise deployment for data privacy'
        },
        {
          name: 'Raspberry Pi 4 + ONNX Runtime',
          purpose: 'Edge inference for wake word detection and audio preprocessing (<50ms)',
          why: '$35 device runs quantized models at 60 FPS, eliminating cloud dependency'
        }
      ]
    },
    '001-toolformer-research-annotation': {
      frameworks: [
        {
          name: 'Meta Toolformer (Research)',
          purpose: 'Self-supervised learning for tool use without human annotation',
          why: 'Breakthrough enabling LLMs to use any API with <100 few-shot examples'
        },
        {
          name: 'LangChain',
          purpose: 'Production framework for chaining LLM calls with tool execution',
          why: 'Most popular LLM orchestration (70K+ GitHub stars), integrates with 50+ tools'
        },
        {
          name: 'OpenAI Function Calling',
          purpose: 'Native tool integration for GPT-3.5/4 with JSON schema validation',
          why: 'Zero-shot tool use with 95%+ accuracy, automatic parameter extraction'
        },
        {
          name: 'Semantic Kernel (Microsoft)',
          purpose: 'Enterprise LLM orchestration with plugin architecture for custom tools',
          why: 'Production-ready with Azure integration, supports C#/Python/Java'
        },
        {
          name: 'AutoGPT / BabyAGI',
          purpose: 'Autonomous agent frameworks with multi-step tool use and planning',
          why: 'Enables complex workflows (research, code generation) with minimal supervision'
        }
      ]
    },
  };

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
      <SEO
        title={`${post.title} | MSP Raja`}
        description={post.challenge.description}
        keywords={[...post.technologies, post.category, 'AI Case Study', 'Machine Learning Implementation']}
        ogType="article"
        ogUrl={`https://www.mspraja.com/blog/${post.id}`}
        canonicalUrl={`https://www.mspraja.com/blog/${post.id}`}
        article={{
          publishedTime: post.date,
          author: 'MSP Raja',
          section: post.category,
          tags: post.technologies,
        }}
      />
      <ArticleStructuredData
        headline={post.title}
        description={post.challenge.description}
        datePublished={post.date}
        author={{ name: 'MSP Raja', url: 'https://www.mspraja.com' }}
        publisher={{ name: 'MSP Raja Portfolio', logo: 'https://www.mspraja.com/logo.png' }}
        url={`https://www.mspraja.com/blog/${post.id}`}
        keywords={post.technologies}
      />
      <BreadcrumbStructuredData
        items={[
          { name: 'Home', url: 'https://www.mspraja.com/' },
          { name: 'Blog', url: 'https://www.mspraja.com/blog' },
          { name: post.title, url: `https://www.mspraja.com/blog/${post.id}` },
        ]}
      />
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

          {/* Animation Visualization */}
          {id && animationConfig[id] && (
            <section className="mb-12 animate-fade-in-up delay-350">
              <AnimationPlayer
                src={animationConfig[id].src}
                poster={animationConfig[id].poster}
                title={animationConfig[id].title}
                description={animationConfig[id].description}
                autoplay={false}
                loop={true}
              />
            </section>
          )}

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

          {/* Technical Deep Dive */}
          {id && <TechnicalDeepDive blogId={id} />}

          {/* Real-World Applications */}
          {id && applicationsConfig[id] && (
            <section className="mb-12 animate-fade-in-up delay-550">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="w-6 h-6 text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">{applicationsConfig[id].title}</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {applicationsConfig[id].useCases.map((useCase, index) => (
                  <Card key={index} className="border border-cyan-500/20 bg-cyan-500/5 hover:bg-cyan-500/10 transition-all">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1.5">{useCase.industry}</h3>
                      <p className="text-gray-300 text-sm mb-2 leading-snug">{useCase.application}</p>
                      <p className="text-green-300 text-xs flex items-start gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                        <span>{useCase.benefit}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Frameworks & Tools */}
          {id && frameworksConfig[id] && (
            <section className="mb-12 animate-fade-in-up delay-575">
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Frameworks & Tools Used</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {frameworksConfig[id].frameworks.map((framework, index) => (
                  <Card key={index} className="border border-purple-500/20 bg-purple-500/5 hover:border-purple-500/30 transition-all">
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-white mb-1.5">{framework.name}</h3>
                      <p className="text-gray-300 text-sm mb-2 leading-snug">{framework.purpose}</p>
                      <p className="text-blue-300 text-xs leading-snug">{framework.why}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

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

          {/* LinkedIn CTA */}
          <section className="mb-12 animate-fade-in-up delay-800">
            <Card className="border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-transparent">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-white mb-1">Discuss This Solution</h3>
                    <p className="text-gray-400 text-sm">Questions about implementation or want to explore similar challenges?</p>
                  </div>
                  <div className="flex gap-3 flex-shrink-0">
                    <a href="https://www.linkedin.com/in/mspraja/" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-all">
                        <Linkedin className="w-4 h-4 mr-2" />
                        Connect
                      </Button>
                    </a>
                    <Link to="/contact">
                      <Button variant="outline" className="border-blue-500/40 text-blue-300 hover:bg-blue-500/10">
                        Get In Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
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
