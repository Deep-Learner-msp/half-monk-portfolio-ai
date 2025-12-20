export type Category = 'Supply Chain AI' | 'Cybersecurity' | 'Mental Health AI' | 'Emerging AI';

export interface BlogPostMetadata {
  id: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  readTime: string;
  image?: string;
  featured: boolean;
}

export interface BlogPostContent {
  id: string;
  title: string;
  category: Category;
  date: string;
  readTime: string;
  challenge: {
    description: string;
    painPoints: string[];
  };
  approach: {
    description: string;
    techniques: string[];
  };
  solution: {
    description: string;
    implementation: string[];
  };
  results: {
    description: string;
    metrics: {
      label: string;
      value: string;
      improvement: string;
    }[];
  };
  keyTakeaways: string[];
  technologies: string[];
}

// Blog post listings for the main blog page
export const blogPostsMetadata: BlogPostMetadata[] = [
  {
    id: '004-ai-adversarial-defense',
    title: 'Defending AI Systems Against Adversarial Attacks: A Practical Implementation Guide',
    excerpt: 'Real-world code and architecture for protecting production ML models from data poisoning, model evasion, and prompt injection attacks with threat analysis and layered defense strategies.',
    category: 'Cybersecurity',
    date: '2025-12-20',
    readTime: '15 min',
    featured: true,
  },
  {
    id: '001-agentic-workflows-supply-chain',
    title: 'Building Agentic Workflows for Supply Chain Automation',
    excerpt: 'How autonomous agents are transforming supply chain operations with intelligent orchestration, reducing manual intervention by 67% and improving visibility across logistics networks.',
    category: 'Supply Chain AI',
    date: '2025-12-20',
    readTime: '8 min',
    featured: false,
  },
  {
    id: '002-voice-enabled-supply-chain',
    title: 'Voice-Enabled AI Agents in Logistics Operations',
    excerpt: 'Implementing hands-free voice interfaces for warehouse management and transportation coordination, achieving 45% faster response times in critical operations.',
    category: 'Supply Chain AI',
    date: '2025-12-19',
    readTime: '6 min',
    featured: true,
  },
  {
    id: '003-iam-threat-detection',
    title: 'Advanced IAM Threat Detection Using Graph Neural Networks',
    excerpt: 'Leveraging graph-based machine learning to detect anomalous access patterns and privilege escalation attempts in enterprise identity systems with 92% accuracy.',
    category: 'Cybersecurity',
    date: '2025-12-18',
    readTime: '10 min',
    featured: false,
  },
];

// Full blog post content
export const blogPostsContent: Record<string, BlogPostContent> = {
  '001-agentic-workflows-supply-chain': {
    id: '001-agentic-workflows-supply-chain',
    title: 'Building Agentic Workflows for Supply Chain Automation',
    category: 'Supply Chain AI',
    date: '2025-12-20',
    readTime: '8 min',
    challenge: {
      description: 'Modern supply chains face critical challenges with manual coordination across multiple systems, leading to delays, errors, and reduced visibility. Traditional automation lacks the intelligence to handle complex, dynamic scenarios.',
      painPoints: [
        'Manual intervention required for 80% of exception handling across logistics networks',
        'Average 4-6 hour delay in critical shipment updates due to system fragmentation',
        'Limited real-time visibility causing reactive rather than proactive operations',
        'Coordination overhead consuming 35% of operations team capacity'
      ]
    },
    approach: {
      description: 'Implemented an agentic workflow platform using autonomous AI agents capable of intelligent decision-making, cross-system orchestration, and self-optimization based on real-time supply chain data.',
      techniques: [
        'Multi-agent architecture with specialized agents for visibility, coordination, and exception handling',
        'Reinforcement learning for optimal routing and resource allocation decisions',
        'Event-driven orchestration with intelligent task prioritization and escalation',
        'Natural language interfaces for seamless human-agent collaboration'
      ]
    },
    solution: {
      description: 'Deployed an enterprise-scale agentic platform that autonomously manages supply chain operations, from shipment tracking to exception resolution, with minimal human intervention.',
      implementation: [
        'Visibility Agent: Real-time data aggregation from 15+ heterogeneous systems (TMS, WMS, ERP)',
        'Coordination Agent: Intelligent orchestration of carrier communications and scheduling',
        'Exception Agent: Autonomous detection and resolution of shipment anomalies',
        'Analytics Agent: Continuous monitoring and predictive insights for proactive operations',
        'Integration with existing supply chain systems via REST APIs and event streams'
      ]
    },
    results: {
      description: 'The agentic workflow platform transformed supply chain operations, delivering substantial improvements in efficiency, visibility, and operational excellence.',
      metrics: [
        {
          label: 'Manual Intervention Reduced',
          value: '67%',
          improvement: 'From 80% to 26% of operations'
        },
        {
          label: 'Exception Resolution Time',
          value: '3.2 hours',
          improvement: '52% faster than baseline'
        },
        {
          label: 'Visibility Coverage',
          value: '94%',
          improvement: 'Up from 68% coverage'
        },
        {
          label: 'Operational Capacity Freed',
          value: '28%',
          improvement: 'Redeployed to strategic work'
        }
      ]
    },
    keyTakeaways: [
      'Agentic AI enables autonomous decision-making that adapts to dynamic supply chain conditions',
      'Multi-agent architectures provide specialized intelligence while maintaining system-wide coordination',
      'Event-driven orchestration is critical for real-time responsiveness in logistics operations',
      'Human-agent collaboration through natural language interfaces maximizes adoption and trust'
    ],
    technologies: ['Python', 'LangChain', 'Claude API', 'Apache Kafka', 'PostgreSQL', 'Docker', 'Kubernetes']
  },
  '002-voice-enabled-supply-chain': {
    id: '002-voice-enabled-supply-chain',
    title: 'Voice-Enabled AI Agents in Logistics Operations',
    category: 'Supply Chain AI',
    date: '2025-12-19',
    readTime: '6 min',
    challenge: {
      description: 'Warehouse and logistics operations require workers to juggle multiple devices and interfaces while performing physical tasks, leading to inefficiency, safety risks, and reduced productivity.',
      painPoints: [
        'Workers spending 25-30% of time on manual data entry and system navigation',
        'Safety incidents increased by 18% when workers multitask with handheld devices',
        'Average 3-minute delay per task due to device switching and interface complexity',
        'Limited accessibility for workers in noisy or hands-busy environments'
      ]
    },
    approach: {
      description: 'Developed voice-enabled AI agents powered by advanced speech recognition and natural language understanding, enabling hands-free interaction for warehouse and logistics operations.',
      techniques: [
        'Custom acoustic models trained on industrial environments with high noise levels',
        'Multi-turn dialogue management for complex task workflows and clarifications',
        'Context-aware intent recognition for domain-specific supply chain operations',
        'Real-time speech synthesis with confirmation feedback for critical actions'
      ]
    },
    solution: {
      description: 'Deployed voice AI agents across warehouse management, transportation coordination, and inventory operations, enabling workers to complete tasks hands-free with natural language commands.',
      implementation: [
        'Shipment Tracking: Voice queries for real-time location and status updates',
        'Inventory Management: Hands-free picking, counting, and put-away operations',
        'Carrier Coordination: Voice-based scheduling and route optimization requests',
        'Exception Handling: Verbal reporting and resolution of operational issues',
        'Integration with WMS, TMS, and mobile devices via WebSocket and REST APIs'
      ]
    },
    results: {
      description: 'Voice-enabled AI agents significantly improved operational efficiency, worker safety, and task completion times across logistics operations.',
      metrics: [
        {
          label: 'Task Completion Time',
          value: '45%',
          improvement: 'Faster than device-based input'
        },
        {
          label: 'Safety Incidents',
          value: '32%',
          improvement: 'Reduction in device-related incidents'
        },
        {
          label: 'Worker Productivity',
          value: '23%',
          improvement: 'Increase in tasks per shift'
        },
        {
          label: 'Adoption Rate',
          value: '87%',
          improvement: 'Within first 3 months'
        }
      ]
    },
    keyTakeaways: [
      'Voice AI dramatically improves operational efficiency in hands-busy, eyes-busy environments',
      'Custom acoustic models are essential for high accuracy in noisy industrial settings',
      'Natural language understanding reduces training time and improves worker adoption',
      'Real-time feedback and confirmation mechanisms build trust in voice-based systems'
    ],
    technologies: ['Python', 'OpenAI Whisper', 'Claude API', 'WebSockets', 'React Native', 'AWS Lambda', 'Redis']
  },
  '003-iam-threat-detection': {
    id: '003-iam-threat-detection',
    title: 'Advanced IAM Threat Detection Using Graph Neural Networks',
    category: 'Cybersecurity',
    date: '2025-12-18',
    readTime: '10 min',
    challenge: {
      description: 'Enterprise identity and access management systems generate massive volumes of access events, making it difficult to detect sophisticated threats like privilege escalation, lateral movement, and insider attacks using traditional rule-based approaches.',
      painPoints: [
        'Rule-based systems generating 10,000+ false positives daily, overwhelming security teams',
        'Average 14-day detection time for privilege escalation attempts',
        'Limited visibility into complex attack patterns spanning multiple systems and time periods',
        'Inability to detect novel attack vectors not covered by existing rules'
      ]
    },
    approach: {
      description: 'Implemented a graph neural network-based anomaly detection system that models identity relationships, access patterns, and temporal behaviors to detect sophisticated IAM threats with high accuracy.',
      techniques: [
        'Graph construction from identity, role, permission, and resource relationships',
        'Graph Attention Networks (GAT) for learning complex identity access patterns',
        'Temporal graph embeddings to capture evolving behavior over time',
        'Unsupervised anomaly detection with MITRE ATT&CK framework alignment'
      ]
    },
    solution: {
      description: 'Deployed an ML-powered IAM threat detection platform that continuously analyzes access patterns, detects anomalies, and provides actionable alerts with contextual investigation paths.',
      implementation: [
        'Real-time graph construction from SIEM, IAM, and directory service logs',
        'GNN-based embedding generation for users, roles, and access patterns',
        'Anomaly scoring using autoencoders and isolation forests on graph embeddings',
        'MITRE ATT&CK technique mapping for threat classification and prioritization',
        'Interactive threat investigation dashboard with graph visualization'
      ]
    },
    results: {
      description: 'The GNN-based IAM threat detection system dramatically improved detection accuracy while reducing alert fatigue and mean time to detection.',
      metrics: [
        {
          label: 'Detection Accuracy',
          value: '92%',
          improvement: 'Up from 67% baseline'
        },
        {
          label: 'False Positive Rate',
          value: '88%',
          improvement: 'Reduction in false alerts'
        },
        {
          label: 'Mean Time to Detect',
          value: '2.3 hours',
          improvement: 'Down from 14 days'
        },
        {
          label: 'Novel Threat Detection',
          value: '15',
          improvement: 'Previously unknown attack patterns identified'
        }
      ]
    },
    keyTakeaways: [
      'Graph neural networks excel at modeling complex identity relationships and access patterns',
      'Temporal embeddings are critical for detecting gradual privilege escalation attempts',
      'Unsupervised learning enables detection of novel attacks beyond known threat signatures',
      'MITRE ATT&CK framework alignment accelerates threat investigation and response'
    ],
    technologies: ['Python', 'PyTorch Geometric', 'Neo4j', 'Apache Spark', 'Elasticsearch', 'FastAPI', 'React']
  }
};

// Helper function to get blog post by ID
export const getBlogPostById = (id: string): BlogPostContent | undefined => {
  return blogPostsContent[id];
};

// Helper function to get all blog post metadata
export const getAllBlogPosts = (): BlogPostMetadata[] => {
  return blogPostsMetadata;
};

// Helper function to get blog posts by category
export const getBlogPostsByCategory = (category: Category): BlogPostMetadata[] => {
  return blogPostsMetadata.filter(post => post.category === category);
};

// Helper function to get featured blog posts
export const getFeaturedBlogPosts = (): BlogPostMetadata[] => {
  return blogPostsMetadata.filter(post => post.featured);
};
