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
    title: 'Surfer SEO Alternatives (Budget)',
    subtitle: 'Frase, Writesonic, or Semrush content tools when Surfer is too expensive.',
    updated: '2026-08-12',
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
      'If Surfer is too expensive, start with Frase for briefs/optimization or Writesonic if you also need generation. Only use Semrush content tools as the alternative when you already need Semrush for research—not as a cheaper Surfer clone. Also compare Frase vs Surfer and Semrush vs Surfer if you’re choosing the bottleneck tool.',
  },
  {
    slug: 'semrush-vs-surfer-seo',
    title: 'Semrush vs Surfer SEO',
    subtitle: 'Research suite vs content optimizer—usually pick one first.',
    updated: '2026-08-12',
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
      'Most blog teams do not need both on day one. Use Semrush (or similar) for research and strategy; add Surfer when writers spend real time optimizing drafts against SERPs. If budget forces a choice: research-first teams pick Semrush; write-optimize-first teams pick Surfer (or a cheaper content optimizer). Solo bloggers weighing suites vs free tools should also read Semrush vs Ahrefs vs free.',
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
    subtitle: 'Briefs and speed vs deeper on-page scoring—which optimizer fits your bottleneck?',
    updated: '2026-08-12',
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
      'Choose Frase when briefing speed and coverage (and optionally AI-search visibility) are the bottleneck. Choose Surfer when drafts need deeper on-page optimization against competitive SERPs. Most teams should buy one first; add the second only after a clear weekly workflow gap appears. Budget path: Surfer alternatives; research-suite path: Semrush vs Surfer.',
  },
  {
    slug: 'is-surfer-seo-worth-it',
    title: 'Is Surfer SEO Worth It?',
    subtitle: 'When the content-score editor earns the seat—and when Frase is the better first buy.',
    updated: '2026-08-13',
    relatedBlog: 'is-surfer-seo-worth-it-2026',
    tools: [
      {
        name: 'Surfer SEO',
        affiliateKey: 'surfer',
        summary:
          'Optimization-first content editor with a live SERP/content score. Worth the seat when writers already have briefs and the weekly bottleneck is competitive on-page coverage—not topic discovery.',
        pricingNote:
          'As of August 2026 (third-party scrapes of surferseo.com/pricing, Jul–Aug 2026; annual often ~17% off): Discovery ~$59/mo or ~$49/mo annual; Standard ~$119/~$99; Pro ~$219/~$182; Peace of Mind ~$359/~$299; Enterprise custom, often cited from ~$999/mo. New accounts often get a 7-day Pro trial. Meters (documents, tracked pages) change when plans rebundle—verify live; do not buy from a screenshot.',
        bestFor: [
          'Writers optimizing drafts against tough SERPs every week',
          'Teams that already have briefs and need a shared content-score QA loop',
          'Small teams ready to use Standard-band seats instead of leaving Discovery idle',
        ],
        skipIf: [
          'Briefs and topic coverage are still the bottleneck (buy Frase first)',
          'Publish volume is low and ChatGPT/Claude + GSC still covers the week',
          'The editor would become shelfware, or research/audits are the real missing layer',
        ],
      },
      {
        name: 'Frase',
        affiliateKey: 'frase',
        summary:
          'Research → brief → write → SEO/GEO loop. Often the better first optimizer when writers stall before drafting, or when you need to prove the category before a Surfer Standard/Pro seat.',
        pricingNote:
          'As of August 2026 (frase.io/pricing; annual often ~20% off): Starter ~$49/mo or ~$39/mo annual (1 seat; hard stop at limits, often cited ~10 articles/mo—verify live); Professional ~$129/~$103 (3 seats, optional overages); Scale ~$299/~$239; extra seats ~$29/mo on Pro/Scale. 7-day trial, no credit card commonly advertised. Self-serve plans share the full loop; volume and seats differ.',
        bestFor: [
          'Teams blocked on briefs, outlines, and SERP/topic coverage',
          'Budget-sensitive first optimizer seat (Starter to prove weekly use)',
          'Ops that also care about AI-answer / GEO-style visibility alongside classic SEO',
        ],
        skipIf: [
          'Briefs are already excellent and you only need score-deep in-editor optimization',
          'Nobody will maintain a briefing workflow weekly',
          'You need a full keyword-research and site-audit suite instead of an optimizer',
        ],
      },
    ],
    verdict:
      'Buy one optimizer first. Choose Surfer when the weekly bottleneck is in-editor SERP scoring on already-briefed drafts. Choose Frase when briefs/coverage (and optionally GEO/AI-search visibility) are the bottleneck—or when you need a cheaper first seat to prove the category. Choose neither yet if ChatGPT/Claude plus Search Console still covers a modest calendar. Do not stack Surfer and Frase on day one; add the second only after a single tool’s limits show up in throughput. Verify all prices live (August 2026 notes).',
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
  {
    slug: 'jasper-alternatives-chatgpt-claude',
    title: 'Jasper Alternatives If You Already Use ChatGPT / Claude',
    subtitle: 'When a second AI writing seat still makes sense—and when ChatGPT or Claude alone is enough.',
    updated: '2026-08-12',
    relatedBlog: 'jasper-alternatives-chatgpt-claude',
    tools: [
      {
        name: 'ChatGPT / Claude',
        summary:
          'General-purpose LLMs for research, drafting, rewriting, and projects. Strong default for solo operators who already prompt well—not specialized brand-voice libraries or Surfer-style content scores.',
        pricingNote:
          'As of August 2026, ChatGPT Plus is often ~$20/mo; Claude Pro ~$20/mo or ~$17/mo annual (Team/Max higher)—verify live on OpenAI and Anthropic pricing pages.',
        bestFor: [
          'Solo writers who draft well with prompts and projects',
          'Operators who already pay for Plus/Pro and ship with human edit',
          'Teams that do not need shared brand kits yet',
        ],
        skipIf: [
          'You need shared Brand Voice and campaign workflows across seats',
          'You want native on-page SEO scoring in the writer',
          'Non-writers on the team need templated marketing workflows',
        ],
      },
      {
        name: 'Jasper',
        affiliateKey: 'jasper',
        summary:
          'Marketing content ops: Brand Voice, Knowledge assets, Canvas/agents, and seat-based campaign workflows on top of generation.',
        pricingNote:
          'As of August 2026 checks, Jasper Pro is often ~$69/seat/mo monthly or ~$59/seat/mo annual; Business is custom; 7-day trial common. Older Creator ~$49 tiers may be retired—confirm live.',
        bestFor: [
          'Marketing teams needing shared brand controls',
          'Campaign and multi-channel draft production',
          'Pods that outgrew plain chat UIs',
        ],
        skipIf: [
          'ChatGPT or Claude already covers your weekly drafts',
          'Budget cannot justify a second seat-class tool',
          'You mainly need SEO scoring, not brand ops',
        ],
      },
      {
        name: 'Copy.ai',
        affiliateKey: 'copyai',
        summary:
          'Writing plus GTM/workflow automation—stronger when you chain research → draft → outreach than as an occasional chat box.',
        pricingNote:
          'As of August 2026, a free tier is often reported and Chat plans commonly start near ~$29/mo (annual lower); Scale/enterprise much higher—verify live.',
        bestFor: [
          'GTM teams automating repeatable copy steps',
          'Outbound + marketing sharing one messaging system',
        ],
        skipIf: [
          'You dislike configuring workflows',
          'Deep on-page SEO scoring is the real job',
          'Volume is too low to repay setup time',
        ],
      },
      {
        name: 'Writesonic',
        affiliateKey: 'writesonic',
        summary:
          'Content generation with SEO/article and AI-search visibility positioning—less “cheap Jasper,” more draft + visibility suite at higher entry prices than classic writer tools.',
        pricingNote:
          'As of August 2026, Starter is often cited ~$79–$99/mo; higher tiers ~$199–$399+—verify live plan limits.',
        bestFor: [
          'Publishers who want content plus AI-visibility features',
          'Teams consolidating writer + light SEO/visibility',
        ],
        skipIf: [
          'You only wanted a cheaper Jasper brand seat',
          'You already own a dedicated optimizer + chat LLM',
          'Entry price exceeds a lean solo budget',
        ],
      },
    ],
    verdict:
      'Stay on ChatGPT or Claude if prompts and human edit already ship your content. Add Jasper when shared Brand Voice and campaign workflows are the bottleneck. Prefer Copy.ai for GTM automation and Writesonic when AI-search visibility bundling matters more than a second brand seat. Verify all prices live (notes as of August 2026).',
  },
  {
    slug: 'semrush-vs-ahrefs-vs-free',
    title: 'Best SEO Tools for Solo Bloggers: Semrush vs Ahrefs vs Free',
    subtitle: 'One-person blog stacks—paid suite, Ahrefs, or a free research kit.',
    updated: '2026-08-12',
    relatedBlog: 'best-seo-tools-solo-bloggers-semrush-ahrefs-free',
    tools: [
      {
        name: 'Semrush',
        affiliateKey: 'semrush',
        summary:
          'Broad SEO platform: keywords, competitors, site audits, tracking, plus content assists—one login for many solo-blog jobs.',
        pricingNote:
          'As of August 2026, Pro-class entry is often ~$139.95/mo or ~$117/mo annual—verify live tiers and limits.',
        bestFor: [
          'Solo bloggers who want keywords + audits + competitors together',
          'Operators who will use the suite weekly, not monthly',
          'Sites that need recurring competitive snapshots',
        ],
        skipIf: [
          'You only optimize a few posts per month',
          'A free GSC-led stack still answers your questions',
          'You only need a content score editor (consider Surfer/Frase instead)',
        ],
      },
      {
        name: 'Ahrefs',
        summary:
          'SEO suite with a strong reputation for backlink and competitor research. Practical paid use for serious solo work usually means looking past the most limited entry tier.',
        pricingNote:
          'As of August 2026, Starter is often ~$29/mo (limited); Lite ~$129/mo is a common “real work” floor—confirm live. Ahrefs has no public affiliate program; we discuss it educationally only.',
        bestFor: [
          'Solo SEOs focused on backlinks and competitor gaps',
          'Operators who will budget for Lite-class access',
        ],
        skipIf: [
          'Starter limits block the reports you need and Lite is out of budget',
          'You mainly need on-page content scoring',
          'You want the broadest all-in-one marketing toolkit first',
        ],
      },
      {
        name: 'Free stack (GSC + Keyword Planner + freemium)',
        summary:
          'Google Search Console, Google Keyword Planner (ads account), plus limited free tiers of tools like AlsoAsked, AnswerThePublic, and Keywords Everywhere—enough to find queries, watch coverage, and prioritize.',
        pricingNote:
          'Mostly free; freemium tools meter searches/credits. Weaker than paid suites on deep backlink competitive intel.',
        bestFor: [
          'Brand-new solo blogs validating topics',
          'Writers who will actually use GSC weekly',
          'Budgets that cannot justify ~$100+/mo research seats',
        ],
        skipIf: [
          'You compete in niches where backlink intel is weekly work',
          'You need scalable keyword databases and site audits',
          'Free search caps constantly interrupt your research',
        ],
      },
    ],
    verdict:
      'Start with a free GSC-led stack while you validate topics. Choose Semrush when you want one broad suite; choose Ahrefs when backlink/competitor depth is the bottleneck and you can budget past Starter limits. Most solo bloggers should not buy both paid suites on day one. Pair research tools with a content optimizer only after drafts are the weekly pain—see Semrush vs Surfer and Frase vs Surfer. Verify prices live (August 2026 notes).',
  },
];

export function getComparison(slug: string): Comparison | undefined {
  return comparisons.find((c) => c.slug === slug);
}
