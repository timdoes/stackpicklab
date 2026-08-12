/**
 * Affiliate link registry.
 * Replace EXAMPLE URLs by copying affiliate-links.example.json → affiliate-links.json
 * (gitignored) and updating this map, or wire a loader later.
 */
export type AffiliateKey =
  | 'copyai'
  | 'surfer'
  | 'semrush'
  | 'jasper'
  | 'frase'
  | 'writesonic';

export interface AffiliateLink {
  name: string;
  url: string;
  key: AffiliateKey;
}

export const affiliates: Record<AffiliateKey, AffiliateLink> = {
  copyai: {
    key: 'copyai',
    name: 'Copy.ai',
    url: 'https://EXAMPLE.com/copyai?ref=YOUR_ID',
  },
  surfer: {
    key: 'surfer',
    name: 'Surfer SEO',
    url: 'https://EXAMPLE.com/surfer?ref=YOUR_ID',
  },
  semrush: {
    key: 'semrush',
    name: 'Semrush',
    url: 'https://EXAMPLE.com/semrush?ref=YOUR_ID',
  },
  jasper: {
    key: 'jasper',
    name: 'Jasper',
    url: 'https://EXAMPLE.com/jasper?ref=YOUR_ID',
  },
  frase: {
    key: 'frase',
    name: 'Frase',
    url: 'https://EXAMPLE.com/frase?ref=YOUR_ID',
  },
  writesonic: {
    key: 'writesonic',
    name: 'Writesonic',
    url: 'https://EXAMPLE.com/writesonic?ref=YOUR_ID',
  },
};

export function getAffiliate(key: AffiliateKey): AffiliateLink {
  return affiliates[key];
}
