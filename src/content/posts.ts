import type { Post, Tag } from './types';
import { legacyPosts } from './legacyPosts';

export const SERIES_NAME = '365 Days of AI Lessons';
export const SERIES_BLURB =
  'One short lesson a day through 2026, each under five minutes to read. Written from production work: agents, evaluations, and the failures between them.';

const EVAL_HARNESS_CODE = `@harness.suite("ticket-to-pr", version="2.3.0")
class TicketToPR(Suite):
    fixtures = load_fixtures("tickets/2026-q3", n=180)
    # budgets live in the fixture, not the agent
    budget = Budget(max_steps=40, max_cost_usd=1.50)

    def grade(self, run: Run) -> Score:
        if not run.diff.applies_cleanly():
            return Score.fail("patch does not apply")
        tests = run.sandbox.pytest(timeout=600)
        return Score(
            passed=tests.ok,
            reason=tests.summary,
            steps=run.steps,
            cost=run.cost_usd,
        )`;

const EVAL_HARNESS_FLOW = `flowchart LR
  T[Ticket] --> P[Plan]
  P --> E[Edit]
  E --> X[Run tests]
  X -- pass --> R[Open PR]
  R --> G[Grade run]
  X -- fail --> E
  B[Budget guard] -.-> E`;

const posts2026: Post[] = [
  {
    slug: 'eval-harness-is-a-product',
    title: 'An eval harness is a product, not a script',
    date: '2026-09-24', tag: 'Evals', topics: ['Agentic AI'], mins: 14, kind: 'Essay',
    summary: 'What changed when our agent evaluations got owners, versions and a release process.',
    body: [
      { t: 'h2', id: 'the-script-phase', text: 'The script phase' },
      { t: 'p', text: 'For the first year, every agent we built shipped with its own evaluation script. The person who built the agent wrote it, usually in the week before launch. Each script graded differently.' },
      { t: 'p', text: "That worked until two teams compared numbers. One team's 70% and another team's 70% did not mean the same thing. Neither number survived a model upgrade." },
      { t: 'h2', id: 'what-a-harness-owns', text: 'What a harness owns' },
      { t: 'p', text: 'A harness is the part of evaluation that should not change between agents. It owns fixtures, budgets, the sandbox and the run record. The agent owns only its behavior.[^1]' },
      { t: 'p', text: 'In practice a suite is a small class. The harness supplies everything around it.' },
      { t: 'code', lang: 'python', file: 'harness/suites/ticket_to_pr.py', code: EVAL_HARNESS_CODE },
      { t: 'p', text: 'The grader returns a reason with every failure. That one rule did more for trust than any metric we added.' },
      { t: 'h2', id: 'the-run-loop', text: 'The run loop' },
      { t: 'p', text: 'Every run follows the same loop. The budget guard sits outside the agent, so an agent cannot spend its way to a pass.' },
      {
        t: 'mermaid', code: EVAL_HARNESS_FLOW,
        label: 'Flowchart: ticket, plan, edit, run tests. Tests pass to open PR then grade run. Tests fail loop back to edit. Budget guard can stop edit.',
        caption: 'Figure 1. The run loop for the ticket-to-PR suite. The dashed edge is the budget guard, which can stop any edit step.',
      },
      { t: 'h2', id: 'what-we-measure', text: 'What we measure' },
      { t: 'p', text: 'We moved one agent, unchanged, from its old script to the harness. These numbers cover 180 held-out tickets.[^2]' },
      {
        t: 'table', head: ['Measure', 'Script', 'Harness'], numeric: [false, true, true],
        rows: [
          ['Reported pass rate', '71%', '58%'],
          ['Grader disagreement with human audit', '14%', '3%'],
          ['Runs that replay deterministically', '0%', '92%'],
          ['Median cost per run', '$1.62', '$1.01'],
          ['Time to add a new suite', '~2 days', '40 min'],
        ],
        caption: 'Table 1. Same agent, same model, same tickets. Only the evaluation changed.',
      },
      { t: 'p', text: 'The reported pass rate went down. That was the point. The old script accepted patches that compiled but did not fix the ticket.' },
      { t: 'quote', text: 'The old script was not wrong about the agent. It was wrong about itself.' },
      { t: 'h2', id: 'what-i-would-do-again', text: 'What I would do again' },
      { t: 'p', text: 'Version the suites. Make graders explain themselves. Put budgets in the fixture. Record every tool call so any run can be replayed.[^3]' },
      { t: 'p', text: 'The harness is now the most reused code in our agent stack. It has an owner, a changelog and a release cycle. That is the whole lesson.' },
    ],
    footnotes: [
      "Behavior means the agent's plan, tool calls and outputs. Model choice is a fixture parameter, not an agent property.",
      'Tickets were sampled from Q3 2026 and held out from all prompt and tool development.',
      'Replay covers tool calls, not model sampling. Replayed runs pin temperature to zero.',
    ],
  },
  {
    slug: 'day-212-retries-are-a-policy',
    title: 'Day 212: Retries are a policy, not a loop',
    date: '2026-07-31', tag: 'Agentic AI', series: true, mins: 3, kind: 'Lesson',
    summary: 'Decide when an agent may retry before it runs, and write the decision down.',
  },
  {
    slug: 'ticket-to-pull-request-where-harnesses-fail',
    title: 'Ticket to pull request: where coding harnesses fail',
    date: '2026-07-30', tag: 'Agentic AI', mins: 11, kind: 'Essay',
    summary: 'Six failure modes from 180 tickets, and the check that catches each one.',
  },
  { slug: 'planning-under-semantic-constraints', title: 'Planning under semantic constraints', date: '2026-06-18', tag: 'Research notes', mins: 9, kind: 'Essay' },
  { slug: 'day-140-tool-descriptions-are-prompts', title: 'Day 140: Tool descriptions are prompts', date: '2026-05-20', tag: 'LLMs', series: true, mins: 2, kind: 'Lesson' },
  { slug: 'exceptions-are-the-supply-chain-ai-problem', title: 'Exceptions are the supply chain AI problem', date: '2026-05-06', tag: 'Supply Chain AI', mins: 8, kind: 'Essay' },
  { slug: 'context-budgets-for-multi-agent-systems', title: 'Context budgets for multi-agent systems', date: '2026-03-12', tag: 'Agentic AI', mins: 10, kind: 'Essay' },
  { slug: 'day-35-a-grader-you-cannot-read', title: 'Day 35: A grader you cannot read is a grader you cannot trust', date: '2026-02-04', tag: 'Evals', series: true, mins: 3, kind: 'Lesson' },
  { slug: 'day-1-one-lesson-a-day', title: 'Day 1: One lesson a day for a year', date: '2026-01-01', tag: 'Research notes', series: true, mins: 2, kind: 'Lesson' },
  { slug: 'what-25-production-skills-taught-me', title: 'What 25 production skills taught me about agent interfaces', date: '2025-12-09', tag: 'Agentic AI', mins: 12, kind: 'Essay' },
  { slug: 'generative-ui-needs-a-contract', title: 'Generative UI needs a contract', date: '2025-11-14', tag: 'LLMs', mins: 7, kind: 'Essay' },
  { slug: 'shipment-data-is-a-graph', title: 'Shipment data is a graph, not a table', date: '2025-10-28', tag: 'Supply Chain AI', mins: 6, kind: 'Essay' },
];

/** Every post, newest first */
export const posts: Post[] = [...posts2026, ...legacyPosts].sort((a, b) => b.date.localeCompare(a.date));

export const FEATURED_SLUG = 'eval-harness-is-a-product';

export const TAG_ORDER: Tag[] = ['Agentic AI', 'Evals', 'Supply Chain AI', 'LLMs', 'Cybersecurity', 'Research notes'];

export const getPost = (slug: string) => posts.find(p => p.slug === slug);
export const getPostByLegacyId = (id: string) => posts.find(p => p.legacyId === id);

export const postMeta = (p: Post) => (p.series ? '365 Days · ' : '') + p.tag + ' · ' + p.mins + ' min';
