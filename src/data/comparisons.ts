export interface ComparisonTool {
  name: string;
  affiliateKey?: string;
  summary: string;
  pricingNote: string;
  bestFor: string[];
  skipIf: string[];
}

export interface Comparison {
  slug: string;
  title: string;
  subtitle: string;
  updated: string;
  tools: ComparisonTool[];
  verdict: string;
  relatedBlog?: string;
}

export const comparisons: Comparison[] = [
  {
    slug: 'jasper-vs-copyai-vs-writesonic',
    title: 'Jasper vs Copy.ai vs Writesonic',
    subtitle: 'Which AI writing stack fits a lean content team in 2026?',
    updated: '2026-08-01',
    relatedBlog: 'jasper-vs-copyai-vs-writesonic-2026',
    tools: [
      {
        name: 'Jasper',
        affiliateKey: 'jasper',
        summary:
          'Brand-voice and campaign workflows oriented toward marketing teams that need templates, governance, and multi-channel drafts.',
        pricingNote: 'Higher-tier pricing; stronger for teams with brand kits.',
        bestFor: [
          'Marketing teams with brand guidelines',
          'Campaign and ad copy at scale',
          'Teams that want structured workflows',
        ],
        skipIf: [
          'You only need occasional blog drafts',
          'Budget is the main constraint',
          'You want a simple chatbot-style writer',
        ],
      },
      {
        name: 'Copy.ai',
        affiliateKey: 'copyai',
        summary:
          'Workflow automation and GTM content; strong when you chain research to draft to outreach steps.',
        pricingNote: 'Competitive mid-market; value depends on workflow usage.',
        bestFor: [
          'GTM and sales-adjacent content workflows',
          'Teams automating repeatable writing tasks',
          'Users who like workflow builders',
        ],
        skipIf: [
          'You need deep on-page SEO scoring',
          'You want a pure long-form editor first',
          'You dislike configuring workflows',
        ],
      },
      {
        name: 'Writesonic',
        affiliateKey: 'writesonic',
        summary:
          'AI writer plus SEO/article features aimed at publishers who want generation and optimization closer together.',
        pricingNote: 'Often positioned as a lower-cost all-in-one vs premium suites.',
        bestFor: [
          'Solo creators publishing frequently',
          'Budget-conscious SEO article production',
          'People who want writer + SEO in one UI',
        ],
        skipIf: [
          'You already own a dedicated SEO suite',
          'Enterprise brand controls are required',
          'You need advanced research workflows',
        ],
      },
    ],
    verdict:
      'Pick Jasper if brand control and team workflows matter most. Pick Copy.ai if you care about automating GTM content steps. Pick Writesonic if you want a lower-cost writer with SEO features bundled. None replaces a human editor for accuracy and originality.',
  },
  {
    slug: 'surfer-seo-alternatives',
    title: 'Best Surfer SEO Alternatives (Budget)',
    subtitle: 'Content-optimization options when Surfer price does not fit.',
    updated: '2026-08-01',
    relatedBlog: 'best-surfer-seo-alternatives-budget',
    tools: [
      {
        name: 'Frase',
        affiliateKey: 'frase',
        summary:
          'Research briefs and content optimization with a lighter price point for many small teams.',
        pricingNote: 'Often cheaper entry than Surfer for brief + optimize workflows.',
        bestFor: [
          'Teams that live in content briefs',
          'Budget SEO content ops',
          'Writers who want SERP-driven outlines',
        ],
        skipIf: [
          'You need Surfer-level content score fidelity',
          'You already pay for a full SEO platform',
          'You only write occasionally',
        ],
      },
      {
        name: 'Writesonic',
        affiliateKey: 'writesonic',
        summary:
          'Generation-first tool with SEO assists; useful if you want draft + optimize without a separate Surfer seat.',
        pricingNote: 'Bundled approach can beat paying for writer + Surfer separately.',
        bestFor: [
          'Solo SEOs who draft and optimize alone',
          'Teams consolidating tooling',
        ],
        skipIf: [
          'You need best-in-class SERP analysis depth',
          'Your writers already use a preferred CMS workflow',
        ],
      },
      {
        name: 'Semrush (Writing Assistant / Content tools)',
        affiliateKey: 'semrush',
        summary:
          'If you already buy Semrush for keywords and audits, its content tools may remove the need for a separate Surfer subscription.',
        pricingNote: 'Expensive as a Surfer alternative alone; sensible if Semrush is already in stack.',
        bestFor: [
          'Teams already on Semrush',
          'Combining keyword research + content checks',
        ],
        skipIf: [
          'You only need on-page content scoring',
          'You cannot justify a full SEO suite',
        ],
      },
    ],
    verdict:
      'If Surfer is too expensive, start with Frase for briefs/optimization or Writesonic if you also need generation. Only use Semrush content tools as the alternative when you already need Semrush for research—not as a cheaper Surfer clone.',
  },
  {
    slug: 'semrush-vs-surfer-seo',
    title: 'Semrush vs Surfer SEO',
    subtitle: 'Do blog teams need both, or is one enough?',
    updated: '2026-08-01',
    relatedBlog: 'semrush-vs-surfer-seo',
    tools: [
      {
        name: 'Semrush',
        affiliateKey: 'semrush',
        summary:
          'Broad SEO platform: keywords, competitive research, site audits, and some content assistance.',
        pricingNote: 'Higher cost; pays off when used beyond a single writer checklist.',
        bestFor: [
          'Keyword and competitor research',
          'Technical SEO + content planning together',
          'Agencies managing multiple sites',
        ],
        skipIf: [
          'You only optimize individual articles',
          'Budget only allows one specialized content tool',
        ],
      },
      {
        name: 'Surfer SEO',
        affiliateKey: 'surfer',
        summary:
          'Focused on-page content editor and scoring for writers optimizing drafts against SERP patterns.',
        pricingNote: 'Narrower scope; often better ROI for pure content teams.',
        bestFor: [
          'Writers optimizing long-form posts',
          'Content teams with a clear brief to draft to score loop',
        ],
        skipIf: [
          'You need full keyword research and audits',
          'You already have strong briefs elsewhere',
        ],
      },
    ],
    verdict:
      'Most blog teams do not need both on day one. Use Semrush (or similar) for research and strategy; add Surfer when writers spend real time optimizing drafts against SERPs. If budget forces a choice: research-first teams pick Semrush; write-optimize-first teams pick Surfer (or a cheaper content optimizer).',
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
