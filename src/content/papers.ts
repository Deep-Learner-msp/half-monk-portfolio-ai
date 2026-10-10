import type { WhitePaper } from './types';

export const papers: WhitePaper[] = [
  {
    slug: 'standardized-agent-evaluation',
    no: 'No. 03',
    title: 'Standardized evaluation for agentic workflows',
    subtitle: 'A harness specification for comparing agents across teams and releases.',
    date: '2026-08-18',
    pages: 24,
    topics: ['Evals', 'Agentic AI', 'Multi-agent systems'],
    abstract:
      'Teams that build agents tend to build their own evaluation scripts. The scripts drift, grade differently and cannot be compared. This paper specifies a shared harness: a fixture format, a run record, a grader interface and a budget model. We applied it to 11 agent workflows over two quarters. Results became comparable across teams, grader disagreement fell, and the cost of adding an evaluation dropped from days to under an hour.',
    findings: [
      'Grader disagreement with human audit fell from 14% to 3% once every grader had to return a reason with its score.',
      'Budgets belong in the fixture, not the agent. Moving them there cut median cost per run by 38%.',
      'Recording tool calls made 92% of runs replayable. Replay is what made regressions visible.',
      'A new evaluation suite takes 40 minutes to add, down from about two days.',
    ],
    sections: [
      { id: 'p1', n: '1', title: 'Why scripts drift', paras: [
        "An evaluation script is usually written once, by the person who built the agent, under launch pressure. It encodes that person's idea of success. When the agent changes, the script changes with it, and the history of what a pass meant is lost.",
        'Across the 11 workflows in this study we found 9 distinct definitions of a passing run. Only 4 were written down.',
      ] },
      { id: 'p2', n: '2', title: 'The run record', paras: [
        'Every run produces one record: inputs, the full sequence of tool calls with arguments and results, model identifiers, token counts, wall time and cost. The record is append-only and content-addressed. Two runs with the same record are the same run.',
        'Recording tool results is what makes replay possible. A replayed run substitutes recorded results for live calls, which removes most sources of nondeterminism outside the model.',
      ] },
      { id: 'p3', n: '3', title: 'Graders', paras: [
        'A grader is a function from a run record to a score and a reason. The reason is required. A grader that cannot explain a failure in one sentence is rejected at review.',
        'We use three grader types: programmatic checks, reference comparisons and model-based judges. Model-based judges are allowed only when the first two cannot express the criterion. Each one is audited against 50 human-labeled runs before use.',
      ] },
      { id: 'p4', n: '4', title: 'Budgets', paras: [
        'Budgets cap steps, tokens, wall time and cost. They are declared in the fixture, so every agent attempting the same task faces the same limits. An agent that exceeds its budget fails with the reason "budget", reported separately from task failure.',
      ] },
      { id: 'p5', n: '5', title: 'Results across 11 workflows', paras: [
        'Over two quarters all 11 workflows moved to the harness. Grader disagreement against human audit fell from 14% to 3%. 92% of runs became replayable. Median cost per run fell 38%, mostly because runaway runs were stopped early instead of being allowed to finish.',
      ] },
      { id: 'p6', n: '6', title: 'Limitations', paras: [
        'Replay does not cover model sampling, so replayed runs pin temperature to zero. The harness assumes tools can be recorded and stubbed. Two of our workflows call systems where that is not yet possible.',
        'A shared harness can also encode shared blind spots. We rotate grader authors each quarter to limit this.',
      ] },
    ],
  },
  {
    slug: 'ticket-to-pull-request-harness',
    no: 'No. 02',
    title: 'Ticket to pull request: a harness for autonomous coding agents',
    subtitle: 'Sandboxing, budgeting and grading a coding agent end to end.',
    date: '2026-04-09',
    pages: 18,
    topics: ['Agentic AI', 'Evals'],
    abstract:
      'How to sandbox, budget and grade a coding agent that works from a ticket to a reviewable pull request, with failure modes from 180 tickets.',
  },
  {
    slug: 'token-budgets-and-summary-contracts',
    no: 'No. 01',
    title: 'Token budgets and summary contracts for multi-agent systems',
    subtitle: 'Keeping orchestrator context bounded and handoffs auditable.',
    date: '2025-12-02',
    pages: 16,
    topics: ['Multi-agent systems', 'LLMs'],
    abstract:
      'Orchestrators fail when sub-agents return too much. A budget per agent and a fixed summary schema keep context bounded and handoffs auditable.',
  },
];

const MONTH_KEYS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

/** BibTeX derived from the paper's own metadata */
export function bibtexFor(p: WhitePaper, siteUrl: string): string {
  const [year, month] = p.date.split('-');
  const key = 'raja' + year + p.slug.split('-')[0];
  return [
    `@techreport{${key},`,
    `  title       = {${p.title.charAt(0).toUpperCase() + p.title.slice(1)}},`,
    '  author      = {Raja, MSP},',
    '  institution = {mspraja.com},',
    '  type        = {White paper},',
    `  year        = {${year}},`,
    `  month       = ${MONTH_KEYS[+month - 1]},`,
    `  url         = {${siteUrl}/papers/${p.slug}}`,
    '}',
  ].join('\n');
}
