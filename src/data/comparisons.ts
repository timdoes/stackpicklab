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
  {
    slug: 'ai-writing-tools-under-100',
    title: 'Best AI Writing Tools Under $100/mo',
    subtitle: 'Small marketing team picks that can stay inside a lean monthly budget.',
    updated: '2026-08-04',
    relatedBlog: 'best-ai-writing-tools-under-100',
    tools: [
      {
        name: 'Writesonic',
        affiliateKey: 'writesonic',
        summary:
          'Budget-friendly writer with SEO/article features so small teams can draft and lightly optimize without two subscriptions.',
        pricingNote:
          'As of August 2026, often positioned to fit lean monthly budgets—verify live plan limits vs publish volume.',
        bestFor: [
          'Small teams shipping blogs and marketing copy weekly',
          'Consolidating writer + light SEO',
          'Budget-conscious publishers',
        ],
        skipIf: [
          'You need enterprise brand governance',
          'You already pay for a deep content optimizer',
          'Document limits on cheap tiers are too low for your calendar',
        ],
      },
      {
        name: 'Frase',
        affiliateKey: 'frase',
        summary:
          'SERP-driven briefs and optimization for teams whose bottleneck is coverage and outlines—not campaign template libraries.',
        pricingNote:
          'Entry plans are commonly small-team friendly as of August 2026; match document caps to monthly output.',
        bestFor: [
          'SEO-led marketing pairs',
          'Brief-first content workflows',
          'Teams optimizing topic coverage on a budget',
        ],
        skipIf: [
          'You mainly need ads/social campaign copy',
          'You want the deepest live content-score editor',
          'You rarely publish long-form SEO content',
        ],
      },
      {
        name: 'Copy.ai',
        affiliateKey: 'copyai',
        summary:
          'Worth the seat under $100 only if GTM/outbound workflows run weekly; weak value as an occasional chat box.',
        pricingNote:
          'Mid-market pricing can fit the band depending on plan—value tracks workflow usage, not logo prestige.',
        bestFor: [
          'Lean GTM teams automating repeatable drafts',
          'Outbound + marketing content sharing one messaging system',
        ],
        skipIf: [
          'You dislike configuring workflows',
          'You need on-page SEO scoring as the core job',
          'Volume is too low to justify automation setup time',
        ],
      },
    ],
    verdict:
      'Under ~$100/mo, prefer Writesonic for draft+light SEO, Frase for brief-led SEO content, and Copy.ai only if workflows are actually used. Treat Jasper-class brand suites as an intentional upgrade once governance—not price—is the constraint. Always verify live pricing as of purchase date.',
  },
  {
    slug: 'frase-vs-surfer',
    title: 'Frase vs Surfer SEO',
    subtitle: 'Briefs and speed vs deeper on-page optimization—which optimizer fits 2026 SEO teams?',
    updated: '2026-08-05',
    relatedBlog: 'frase-vs-surfer-2026',
    tools: [
      {
        name: 'Frase',
        affiliateKey: 'frase',
        summary:
          'Research-to-brief-to-draft workflow with SERP-informed outlines; increasingly positioned around AI-answer / GEO-style visibility as well as classic SEO content.',
        pricingNote:
          'As of August 2026, entry cost is often in the same rough neighborhood as other solo optimizer seats—confirm tiers and document limits live.',
        bestFor: [
          'Teams blocked on briefs and topic coverage',
          'Content ops that want fast keyword-to-outline loops',
          'Marketers tracking AI-search visibility alongside SEO content',
        ],
        skipIf: [
          'You already have excellent briefs and only need score-deep editing',
          'You need a full keyword research and site-audit suite',
          'Nobody will maintain a briefing workflow weekly',
        ],
      },
      {
        name: 'Surfer SEO',
        affiliateKey: 'surfer',
        summary:
          'Optimization-first content editor with granular SERP/NLP-style guidance and a live content score for competitive long-form pages.',
        pricingNote:
          'As of August 2026, plan names and metering (documents, audits, add-ons) change often—verify current pricing against publish volume.',
        bestFor: [
          'Writers optimizing drafts against tough SERPs',
          'Teams standardizing on-page quality with a content score',
          'SEO pods that live in the content editor',
        ],
        skipIf: [
          'You only need occasional outlines',
          'Research/audits/tracking are the real missing layer',
          'The editor would become shelfware',
        ],
      },
    ],
    verdict:
      'Choose Frase when briefing speed and coverage (and optionally AI-search visibility) are the bottleneck. Choose Surfer when drafts need deeper on-page optimization against competitive SERPs. Most teams should buy one first; add the second only after a clear weekly workflow gap appears.',
  },
  {
    slug: 'ai-content-tools-for-agencies',
    title: 'AI Content Tools for Agencies',
    subtitle: 'Multi-client stacks for brand control, SEO QC, and research—without overlapping seat waste.',
    updated: '2026-08-07',
    relatedBlog: 'best-ai-content-tools-for-agencies',
    tools: [
      {
        name: 'Jasper',
        affiliateKey: 'jasper',
        summary:
          'Brand and campaign production across client accounts when voice controls and structured marketing workflows are part of the deliverable.',
        pricingNote:
          'Team plans often sit above lean solo budgets as of August 2026—justify with multi-brand campaign volume.',
        bestFor: [
          'Agencies selling multi-channel campaigns',
          'Multi-brand voice governance',
          'Pods that need templates and brand kits',
        ],
        skipIf: [
          'Clients only buy SEO blog retainers',
          'Tooling budget is the binding constraint',
          'You lack process to maintain per-client brand contexts',
        ],
      },
      {
        name: 'Surfer SEO',
        affiliateKey: 'surfer',
        summary:
          'Shared on-page optimization standard so freelancer drafts meet a consistent SEO bar across client blogs.',
        pricingNote:
          'Pays off when multiple writers ship weekly; weak ROI if used sporadically.',
        bestFor: [
          'SEO content studios',
          'Agencies standardizing writer QC',
          'Competitive long-form client verticals',
        ],
        skipIf: [
          'SEO blogs are not in-scope',
          'You only need research/reporting, not in-editor optimization',
        ],
      },
      {
        name: 'Semrush',
        affiliateKey: 'semrush',
        summary:
          'Research and reporting layer for multi-site portfolios: keywords, competitors, audits—plus some content assists.',
        pricingNote:
          'Expensive if used only as a content scorer; rational when strategy and reporting are billed.',
        bestFor: [
          'Agencies owning SEO strategy across clients',
          'Competitive research and site audits',
          'Portfolios that need recurring reporting',
        ],
        skipIf: [
          'You only optimize individual articles',
          'You cannot utilize research features weekly',
        ],
      },
      {
        name: 'Frase',
        affiliateKey: 'frase',
        summary:
          'Briefing and coverage tool for SEO pods that need freelancers aligned on outlines without jumping straight to a heavier suite.',
        pricingNote:
          'Often a friendlier entry for smaller client rosters as of August 2026—check document caps.',
        bestFor: [
          'Agencies that sell brief-led SEO content',
          'Smaller rosters standardizing outlines',
        ],
        skipIf: [
          'You already standardized on Surfer for every writer',
          'Clients need full research-suite reporting instead',
        ],
      },
    ],
    verdict:
      'Agencies should separate jobs: Semrush-class tools for research/reporting, Surfer or Frase for writer QC, Jasper (or Copy.ai) only when brand campaigns or GTM workflows are actual service lines. Prefer one standard per job over five overlapping AI seats.',
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
