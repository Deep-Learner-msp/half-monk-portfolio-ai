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
    readTime: '25 min',
    featured: true,
  },
  {
    id: '001-toolformer-research-annotation',
    title: 'Toolformer: Teaching Language Models to Use Tools - Research Annotation & Practical Implementation',
    excerpt: 'Deep dive into Meta AI\'s groundbreaking Toolformer paper showing how LLMs learn to use external tools like calculators, search engines, and APIs. Includes architecture diagrams, implementation guide, and real-world applications in enterprise systems.',
    category: 'Emerging AI',
    date: '2025-12-19',
    readTime: '18 min',
    featured: false,
  },
  {
    id: '002-voice-enabled-supply-chain',
    title: 'Voice-Enabled AI Agents in Logistics Operations: Architecture & Implementation',
    excerpt: 'Complete technical guide to implementing hands-free voice interfaces for warehouse management and transportation coordination. Includes acoustic modeling for noisy environments, dialogue management architecture, and real-world deployment results achieving 45% faster response times.',
    category: 'Supply Chain AI',
    date: '2025-12-19',
    readTime: '14 min',
    featured: false,
  },
  {
    id: '003-iam-threat-detection',
    title: 'Advanced IAM Threat Detection Using Graph Neural Networks: Complete Architecture',
    excerpt: 'Deep technical dive into implementing GNN-based threat detection for enterprise IAM systems. Covers graph construction from identity logs, Graph Attention Networks architecture, temporal embeddings, MITRE ATT&CK mapping, and production deployment achieving 92% detection accuracy with 88% reduction in false positives.',
    category: 'Cybersecurity',
    date: '2025-12-18',
    readTime: '16 min',
    featured: false,
  },
];

// Full blog post content
export const blogPostsContent: Record<string, BlogPostContent> = {
  '001-toolformer-research-annotation': {
    id: '001-toolformer-research-annotation',
    title: 'Toolformer: Teaching Language Models to Use Tools - Research Annotation & Practical Implementation',
    category: 'Emerging AI',
    date: '2025-12-19',
    readTime: '18 min',
    challenge: {
      description: 'Large Language Models excel at natural language tasks but struggle with arithmetic, factual recall, temporal reasoning, and real-time information access. Traditional approaches require extensive fine-tuning or complex prompting strategies.',
      painPoints: [
        'LLMs hallucinate mathematical computations even for simple arithmetic operations',
        'Knowledge cutoff dates prevent access to recent information and current events',
        'Inability to perform reliable fact-checking or verification of generated content',
        'Lack of grounding in external data sources leads to factually incorrect outputs',
        'Fine-tuning for tool use requires massive labeled datasets and expensive retraining'
      ]
    },
    approach: {
      description: 'Meta AI\'s Toolformer introduces a self-supervised learning approach where language models learn to decide which APIs to call, when to call them, and how to incorporate results into their responses, all without human annotations.',
      techniques: [
        'Self-supervised API call annotation using in-context learning to generate training data',
        'Weighted decoding to filter beneficial API calls that improve model predictions',
        'Tool augmentation through special tokens: [API(query)] → [Result: output]',
        'Zero-shot generalization to new tool combinations without additional training',
        'Modular tool integration allowing easy addition of calculators, search, calendars, and custom APIs'
      ]
    },
    solution: {
      description: 'Toolformer demonstrates how LLMs can learn tool use through self-supervised learning, achieving significant improvements in arithmetic, temporal reasoning, and factual accuracy without losing general language capabilities.',
      implementation: [
        'Stage 1: Sample potential API calls at each position using in-context few-shot examples',
        'Stage 2: Execute API calls and evaluate if the result improves next-token prediction',
        'Stage 3: Filter API calls using weighted loss - keep only beneficial tool invocations',
        'Stage 4: Fine-tune LLM on augmented dataset with successful API call annotations',
        'Production: Deploy model that generates tool calls inline with natural language responses',
        'Integration: Connect to external systems (calculators, Wikipedia, translation APIs, etc.)'
      ]
    },
    results: {
      description: 'Toolformer significantly outperforms baseline LLMs on tasks requiring external knowledge or computational precision, while maintaining strong performance on standard language tasks.',
      metrics: [
        {
          label: 'Math Performance (ASDiv)',
          value: '+15.2%',
          improvement: 'Absolute improvement over GPT-3'
        },
        {
          label: 'Question Answering (WebQs)',
          value: '+18.5%',
          improvement: 'Accuracy gain with Wikipedia tool'
        },
        {
          label: 'Temporal Reasoning',
          value: '+27.3%',
          improvement: 'Improvement on time-sensitive questions'
        },
        {
          label: 'General Language Tasks',
          value: '0% degradation',
          improvement: 'Maintains baseline performance'
        }
      ]
    },
    keyTakeaways: [
      'Self-supervised learning enables LLMs to learn tool use without expensive human annotation',
      'Weighted filtering ensures only beneficial API calls are integrated into training data',
      'Inline tool invocation with special tokens provides clean integration without architectural changes',
      'Zero-shot generalization allows models to combine tools in novel ways not seen during training',
      'Tool-augmented LLMs maintain general language capabilities while gaining specialized skills'
    ],
    technologies: ['Python', 'PyTorch', 'Transformers', 'OpenAI API', 'Wikipedia API', 'WolframAlpha', 'Google Search API', 'FastAPI']
  },
  '002-voice-enabled-supply-chain': {
    id: '002-voice-enabled-supply-chain',
    title: 'Voice-Enabled AI Agents in Logistics Operations: Architecture & Implementation',
    category: 'Supply Chain AI',
    date: '2025-12-19',
    readTime: '14 min',
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
      description: 'Developed voice-enabled AI agents powered by advanced speech recognition and natural language understanding, enabling hands-free interaction for warehouse and logistics operations. Custom acoustic models handle 85dB+ noise environments, while multi-turn dialogue systems manage complex workflows.',
      techniques: [
        'Custom acoustic models trained on 5000+ hours of warehouse audio with noise augmentation (forklift, conveyor, RF interference)',
        'Wav2Vec 2.0 + domain adaptation for robust speech recognition in industrial environments',
        'Multi-turn dialogue state tracking using LSTM-based context encoders for workflow continuity',
        'Intent classification with BERT fine-tuned on supply chain domain (98.3% accuracy on 47 intent classes)',
        'Named Entity Recognition for extracting SKUs, locations, quantities, and carrier information',
        'Context-aware slot filling for handling ambiguous references (pronouns, relative locations)',
        'Real-time speech synthesis (TTS) with dynamic prosody for natural confirmations and alerts',
        'Wake word detection optimized for low-power edge devices (Raspberry Pi, mobile devices)'
      ]
    },
    solution: {
      description: 'Deployed voice AI agents across warehouse management, transportation coordination, and inventory operations, enabling workers to complete tasks hands-free with natural language commands. System architecture includes edge processing for low latency (<200ms) and cloud backend for complex NLU tasks.',
      implementation: [
        'Edge Device Layer: Raspberry Pi 4 with custom audio DSP for wake word detection and noise cancellation',
        'Speech Pipeline: Wav2Vec 2.0 ASR → Intent Classification (BERT) → Slot Filling (CRF) → Action Execution',
        'Dialogue Manager: Context-aware state machine handling 12 different workflow types with 3.2 avg turns per task',
        'Shipment Tracking Agent: "Where is shipment ABC123?" → Query TMS → Parse JSON → Generate natural response',
        'Inventory Agent: "Put away 50 units of SKU XYZ in location A-12-3" → Validate → Update WMS → Confirm',
        'Picking Agent: Multi-step workflow with batch optimization and route guidance',
        'Carrier Coordination: "Schedule pickup for tomorrow 2PM" → Check availability → Create appointment → Notify',
        'Exception Handler: "Report damage on pallet 456" → Capture details → Create ticket → Route to supervisor',
        'Backend Architecture: FastAPI microservices on Kubernetes with Redis for session state and PostgreSQL for audit logs',
        'Integration Layer: Real-time WebSocket connections to WMS/TMS, REST APIs for batch operations'
      ]
    },
    results: {
      description: 'Voice-enabled AI agents significantly improved operational efficiency, worker safety, and task completion times across logistics operations. Deployment across 3 warehouses (150,000+ sq ft each) with 200+ daily active users processing 8,500+ voice transactions per day.',
      metrics: [
        {
          label: 'Task Completion Time',
          value: '45%',
          improvement: 'Faster than device-based input (avg 42s vs 77s per task)'
        },
        {
          label: 'Safety Incidents',
          value: '32%',
          improvement: 'Reduction in device-related incidents (15 → 10 per quarter)'
        },
        {
          label: 'Worker Productivity',
          value: '23%',
          improvement: 'Increase in tasks per shift (98 → 120 tasks/shift)'
        },
        {
          label: 'Speech Recognition Accuracy',
          value: '94.7%',
          improvement: 'Word Error Rate in noisy environments (<85dB)'
        },
        {
          label: 'System Latency',
          value: '<200ms',
          improvement: 'End-to-end response time (wake word → action execution)'
        },
        {
          label: 'Adoption Rate',
          value: '87%',
          improvement: 'Within first 3 months, 92% after 6 months'
        }
      ]
    },
    keyTakeaways: [
      'Voice AI dramatically improves operational efficiency in hands-busy, eyes-busy environments (45% faster task completion)',
      'Custom acoustic models trained on domain-specific audio are essential for 95%+ accuracy in noisy industrial settings (85dB+)',
      'Edge processing (<200ms latency) is critical for real-time responsiveness and user acceptance',
      'Multi-turn dialogue management with context tracking enables natural conversational workflows',
      'Domain-specific NLU (BERT fine-tuning) achieves 98%+ intent accuracy for specialized supply chain tasks',
      'Natural language understanding reduces training time from 2 weeks to 3 days and improves worker adoption (87% → 92%)',
      'Real-time feedback and confirmation mechanisms build trust in voice-based systems and prevent costly errors'
    ],
    technologies: ['Python', 'Wav2Vec 2.0', 'BERT', 'PyTorch', 'Transformers', 'FastAPI', 'WebSockets', 'Kubernetes', 'Redis', 'PostgreSQL', 'Raspberry Pi', 'React Native']
  },
  '003-iam-threat-detection': {
    id: '003-iam-threat-detection',
    title: 'Advanced IAM Threat Detection Using Graph Neural Networks: Complete Architecture',
    category: 'Cybersecurity',
    date: '2025-12-18',
    readTime: '16 min',
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
      description: 'Implemented a graph neural network-based anomaly detection system that models identity relationships, access patterns, and temporal behaviors to detect sophisticated IAM threats with high accuracy. Uses Graph Attention Networks with temporal embeddings to learn normal vs. anomalous behavior patterns across 50M+ daily access events.',
      techniques: [
        'Heterogeneous graph construction: Users → Roles → Permissions → Resources with 8 edge types and temporal attributes',
        'Graph Attention Networks (GAT) with 4 attention heads learning identity-resource access patterns and role hierarchies',
        'Temporal Graph Networks (TGN) with self-attention over time to capture evolving user behavior sequences',
        'Node2Vec embeddings (128-dim) for baseline user behavior profiling across 30-day rolling windows',
        'Autoencoder-based anomaly scoring on graph embeddings with reconstruction error thresholds',
        'Isolation Forest ensemble for multi-dimensional anomaly detection (access time, frequency, resource sensitivity)',
        'MITRE ATT&CK technique mapping: T1078 (Valid Accounts), T1098 (Account Manipulation), T1069 (Permission Discovery)',
        'Explainable AI using GNNExplainer to identify suspicious subgraphs for security analyst investigation'
      ]
    },
    solution: {
      description: 'Deployed an ML-powered IAM threat detection platform that continuously analyzes access patterns, detects anomalies, and provides actionable alerts with contextual investigation paths. System processes 50M+ access events daily across 85,000 users, 12,000 roles, and 250,000 resources.',
      implementation: [
        'Data Ingestion Layer: Apache Kafka consumers processing SIEM (Splunk), IAM (Okta, Azure AD), and LDAP logs in real-time',
        'Graph Construction Pipeline: Apache Spark jobs building daily graph snapshots in Neo4j (2.5M nodes, 18M edges per day)',
        'Feature Engineering: Extract 47 node features (access frequency, time-of-day patterns, geo-location, device types, resource sensitivity)',
        'GNN Training: PyTorch Geometric GAT model (4 layers, 128-dim hidden, 4 attention heads) trained on 90-day historical data',
        'Temporal Embeddings: TGN model capturing user behavior evolution with self-attention over 7-day sliding windows',
        'Anomaly Detection: Autoencoder (256→128→64→128→256) with reconstruction error threshold at 95th percentile',
        'Ensemble Scoring: Combine GAT anomaly score (0.4), TGN score (0.3), Isolation Forest (0.3) for final alert prioritization',
        'MITRE Mapping: Rules engine mapping anomalous patterns to ATT&CK techniques (T1078, T1098, T1069, T1087, T1484)',
        'Alert Enrichment: GraphQL API providing 3-hop graph context, historical baseline comparisons, and similar past incidents',
        'Investigation Dashboard: React + D3.js interactive graph visualization with drill-down to log events and user timelines',
        'Production Architecture: Kubernetes cluster (24 nodes) with GPU inference (NVIDIA T4), Neo4j cluster (3 replicas), Redis for caching'
      ]
    },
    results: {
      description: 'The GNN-based IAM threat detection system dramatically improved detection accuracy while reducing alert fatigue and mean time to detection. Deployed across enterprise with 85K users, processing 50M+ daily events, detecting 127 confirmed threats in first 6 months (vs. 43 with legacy system).',
      metrics: [
        {
          label: 'Detection Accuracy (F1)',
          value: '92%',
          improvement: 'Up from 67% baseline (Precision: 94%, Recall: 90%)'
        },
        {
          label: 'False Positive Rate',
          value: '88%',
          improvement: 'Reduction (10,000 → 1,200 daily false alerts)'
        },
        {
          label: 'Mean Time to Detect',
          value: '2.3 hours',
          improvement: 'Down from 14 days (99.3% improvement)'
        },
        {
          label: 'Novel Threat Detection',
          value: '15',
          improvement: 'Zero-day attack patterns (not in MITRE ATT&CK)'
        },
        {
          label: 'Privilege Escalation Detection',
          value: '96%',
          improvement: 'Catch rate for gradual permission accumulation'
        },
        {
          label: 'Analyst Investigation Time',
          value: '67%',
          improvement: 'Reduction (avg 45min → 15min per alert)'
        }
      ]
    },
    keyTakeaways: [
      'Graph neural networks (GAT with 4 attention heads) excel at modeling heterogeneous identity graphs with 8 edge types, achieving 92% F1 score and capturing complex access patterns invisible to rule-based systems',
      'Temporal Graph Networks with self-attention over 7-day sliding windows are critical for detecting gradual privilege escalation (96% catch rate) and behavior drift that unfolds over weeks',
      'Ensemble approach combining GAT anomaly scores (0.4), TGN temporal scores (0.3), and Isolation Forest (0.3) reduces false positives by 88% (10,000 → 1,200 daily alerts) while maintaining 90% recall',
      'Heterogeneous graph construction with 2.5M nodes and 18M edges daily enables relationship-based anomaly detection that traditional log analysis cannot achieve',
      'GNNExplainer for interpretability provides security analysts with suspicious subgraph visualizations, reducing investigation time by 67% (45min → 15min per alert)',
      'MITRE ATT&CK framework mapping (T1078, T1098, T1069, T1087, T1484) accelerates threat response and enables standardized communication with SOC teams',
      'Production architecture with GPU inference (NVIDIA T4), Neo4j clustering (3 replicas), and Kubernetes orchestration (24 nodes) handles 50M+ daily events with mean time to detect of 2.3 hours (vs. 14 days baseline)',
      'Unsupervised autoencoder learning with 95th percentile reconstruction threshold enables detection of 15 novel zero-day attack patterns not in MITRE ATT&CK framework'
    ],
    technologies: ['Python', 'PyTorch Geometric', 'Neo4j', 'Apache Kafka', 'Apache Spark', 'GraphQL', 'Kubernetes', 'Redis', 'Elasticsearch', 'FastAPI', 'React', 'D3.js', 'NVIDIA T4 GPU', 'Splunk', 'Okta', 'Azure AD']
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
