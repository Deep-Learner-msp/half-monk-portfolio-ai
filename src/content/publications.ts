import type { Publication } from './types';

export const publications: Publication[] = [
  {
    year: 2026, venueShort: 'UAI 2026',
    title: 'Semantic-Constrained Planning (SEA + SCP)',
    desc: 'Planning for agent tasks under semantic constraints the planner can read and check.',
    venue: 'Conference on Uncertainty in Artificial Intelligence (UAI 2026)',
    status: 'Under review', links: [], noLinks: 'Paper forthcoming',
  },
  {
    year: 2024, venueShort: 'BigData 24',
    title: 'T2I-RISE: Text-to-Insights with Reinforcement Learning, Integration of Semantic Layers and Enrichment',
    short: 'T2I-RISE: Text-to-Insights with reinforcement learning and semantic layers',
    desc: 'Natural-language questions to data insights, using reinforcement learning, a semantic layer and conversational feedback.',
    venue: 'IEEE International Conference on Big Data (BigData 2024)',
    status: 'Published', links: [{ label: 'Paper', href: 'https://ieeexplore.ieee.org/document/10825844' }],
  },
  {
    year: 2024, venueShort: 'Patent',
    title: 'System and method for contextual detection and resilience management of burnout risk in high-stress operational teams',
    short: 'Contextual detection and resilience management of burnout risk in high-stress operational teams',
    desc: 'Combines workload telemetry with short check-ins to flag burnout risk in security and operations teams.',
    venue: 'Patent application, Infosec K2K',
    status: 'Patent pending', links: [], noLinks: 'Filed 2024',
  },
  {
    year: 2023, venueShort: 'BigData 23',
    title: 'Generative AI Approach to Distributed Summarisation of Financial Narratives',
    desc: 'Summarising long financial reports with generative models in a distributed pipeline.',
    venue: 'IEEE International Conference on Big Data (BigData 2023)',
    status: 'Published', links: [{ label: 'Paper', href: 'https://ieeexplore.ieee.org/document/10386313' }],
  },
  {
    year: 2023, venueShort: 'BigData 23',
    title: 'Investigating Large Language Models for Financial Causality Detection in a Multilingual Setup',
    desc: 'Benchmarks LLMs on finding cause and effect in financial text across languages.',
    venue: 'IEEE BigData 2023, Financial Narrative Processing Workshop',
    status: 'Published', links: [{ label: 'Paper', href: 'https://ieeexplore.ieee.org/document/10386558' }],
  },
  {
    year: 2022, venueShort: 'EMNLP 22',
    title: 'DoSA: A System to Accelerate Annotations on Business Documents with Human-in-the-Loop',
    short: 'DoSA: Accelerating annotation on business documents with human-in-the-loop',
    desc: 'An annotation tool that pre-labels business documents and learns from reviewer corrections.',
    venue: 'DASH Workshop at EMNLP 2022',
    status: 'Published', links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2211.04934' }],
  },
  {
    year: 2022, venueShort: 'LREC 22',
    title: 'DiMSum: Distributed and Multilingual Summarization of Financial Narratives',
    desc: '2nd best work in the shared task, and ranked #1 for Greek.',
    venue: 'FNP Workshop at LREC 2022',
    note: '2nd best work in the shared task. Ranked #1 for Greek.',
    status: 'Published', links: [{ label: 'Paper', href: 'https://aclanthology.org/2022.fnp-1.9.pdf' }],
  },
  {
    year: 2020, venueShort: 'ICASSP 20',
    title: 'Language Identification for Indian Languages Using Ghost-VLAD',
    desc: 'Spoken language identification for Indian languages using Ghost-VLAD pooling.',
    venue: 'IEEE ICASSP 2020',
    status: 'Published', links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2002.01664' }],
  },
];

export const SERVICE = 'Reviewer, Conference on Uncertainty in Artificial Intelligence (UAI 2026)';
