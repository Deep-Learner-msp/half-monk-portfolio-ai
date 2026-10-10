// Profile facts used on the home page and the About page.

export const SITE_URL = 'https://www.mspraja.com';
export const EMAIL = 'mspraj00@gmail.com';
export const LINKEDIN = 'https://www.linkedin.com/in/mspraja';
export const GITHUB = 'https://github.com/Deep-Learner-msp';

export interface Role {
  role: string;
  org: string;
  /** Long range for the cinematic timeline */
  y: string;
  /** Short range for the About list */
  yShort: string;
  start: string;
  loc: string;
  line: string;
  /** One-line summary for the About list */
  aboutLine: string;
  points: string[];
  current?: boolean;
}

export const career: Role[] = [
  {
    role: 'Principal AI R&D Architect', org: 'FourKites', y: 'Oct 2025 – now', yShort: '2025–now', start: '2025-10', loc: 'Hyderabad', current: true,
    line: 'Office of the CEO. I build lean pods that make FourKites AI-native and take on core supply chain problems end to end.',
    aboutLine: 'Principal AI R&D Architect, Office of the CEO. Agentic systems and evaluation.',
    points: ['Agent workflow orchestration with explicit state and budgets', 'Autonomous coding harnesses that take a ticket to a reviewed pull request', 'Standardized agent evaluation; 25+ production AI skills deployed across the org', 'Won the FourKites Hackathon 2026 with an engineering dashboard built in 24 hours'],
  },
  {
    role: 'Principal AI Scientist and Architect', org: 'Infosec K2K', y: 'Oct 2024 – Sep 2025', yShort: '2024–2025', start: '2024-10', loc: 'Hyderabad',
    line: 'Applied AI research for identity and access management.',
    aboutLine: 'Principal AI Scientist and Architect. Set up K2K Labs for identity security research.',
    points: ['Set up K2K Labs, the internal research division', 'IAM security posture tool across Active Directory, Entra ID and CyberArk', 'Filed a patent on burnout risk detection for security teams'],
  },
  {
    role: 'Principal AI Architect', org: 'State Street', y: 'Mar 2022 – Sep 2024', yShort: '2022–2024', start: '2022-03', loc: 'Hyderabad',
    line: 'Lead Data Scientist to Principal AI Architect. Enterprise generative AI across finance, compliance and operations.',
    aboutLine: 'Lead Data Scientist to Principal AI Architect. Enterprise generative AI platform.',
    points: ['Text-to-SQL copilot over Snowflake, published as T2I-RISE', 'Document extraction for financial documents on open-source LLMs', 'Won the Global AI Hackathon in 2023 and 2024'],
  },
  {
    role: 'Senior Data Scientist', org: 'FortunaPIX', y: 'Dec 2019 – May 2021', yShort: '2019–2021', start: '2019-12', loc: 'Hyderabad',
    line: 'Sole data scientist, building ML for cybersecurity and healthcare from scratch.',
    aboutLine: 'Senior Data Scientist. Anomaly detection for security and healthcare.',
    points: ['Insider threat and behavioral anomaly detection', 'Malware prediction mapped to MITRE ATT&CK tactics'],
  },
  {
    role: 'Machine Learning Researcher', org: 'YOUPLUS', y: 'Oct 2017 – Dec 2019', yShort: '2017–2019', start: '2017-10', loc: 'Bengaluru',
    line: 'ML for multilingual speech and video content.',
    aboutLine: 'Machine Learning Researcher. Speech, vision and content moderation.',
    points: ['Language identification for Indian languages, published at ICASSP', 'Brand safety detection in video with YOLOv3'],
  },
];

export type Accent = 'red' | 'blue' | 'violet' | 'amber';

export interface Award {
  y: string;
  big: string;
  t: string;
  e: string;
  accent: Accent;
  /** Spans two columns in the awards grid */
  featured?: boolean;
}

export const awards: Award[] = [
  { y: '2026', big: '24h', t: 'Winner, FourKites Hackathon', e: 'Built an engineering dashboard in 24 hours.', accent: 'amber', featured: true },
  { y: '2024', big: '01', t: 'Winner, State Street Global AI Hackathon', e: 'Second consecutive win, with a live product demo.', accent: 'red' },
  { y: '2024', big: '24h', t: 'Standing Ovation Award', e: 'A complete conversational AI assistant built in 24 hours. State Street Global Hackathon.', accent: 'blue' },
  { y: '2023', big: '01', t: 'Winner, State Street Global AI Hackathon', e: 'First win in the global AI track.', accent: 'red' },
  { y: '2023', big: '★', t: 'Bravo Recognition Award', e: 'State Street, for delivery across several high-impact projects.', accent: 'violet' },
  { y: '2022', big: '#2', t: '2nd best work, Financial Narrative Summarisation', e: 'FNP shared task at LREC 2022, for DiMSum.', accent: 'blue' },
  { y: '2022', big: '#1', t: 'Ranked first for Greek', e: 'Same shared task, Greek-language summarisation.', accent: 'amber' },
];

/** The condensed list on the About page */
export const awardsShort = [
  { y: '2026', t: 'Winner, FourKites Hackathon. Built an engineering dashboard in 24 hours.' },
  { y: '2023, 2024', t: 'Winner, State Street Global AI Hackathon' },
  { y: '2024', t: 'Standing Ovation Award, State Street Global Hackathon' },
  { y: '2023', t: 'Bravo Recognition Award, State Street' },
  { y: '2022', t: '2nd best work, Financial Narrative Summarisation task, FNP at LREC' },
  { y: '2022', t: 'Ranked #1 for Greek, Financial Narrative Summarisation task' },
];

export const stats = [
  { n: '9+', label: 'Years in AI and ML', col: 1, row: 1, grad: 1 },
  { n: '25+', label: 'Production AI skills deployed', col: 2, row: 2 },
  { n: '7', label: 'Peer-reviewed papers', col: 1, row: 3 },
  { n: '3×', label: 'Hackathon winner at FourKites and State Street', col: 3, row: 3, grad: 2 },
  { n: '1', label: 'Patent pending', col: 2, row: 4 },
];

export const focus: { n: string; t: string; d: string; accent: Accent }[] = [
  { n: '01', t: 'Agentic architecture', d: 'Orchestrating agent workflows with explicit state, budgets and handoffs between agents.', accent: 'blue' },
  { n: '02', t: 'Evals and harnesses', d: 'Standard agent evaluation, and coding harnesses that take a ticket to a reviewed pull request.', accent: 'red' },
  { n: '03', t: 'Enterprise data and documents', d: 'Text-to-SQL, document extraction and summarisation over the data enterprises already have.', accent: 'violet' },
  { n: '04', t: 'Supply chain AI', d: 'Agents and generative-UI tools for operations teams. 25+ production AI skills deployed across the org.', accent: 'amber' },
];
