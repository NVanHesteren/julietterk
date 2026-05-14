/**
 * Image library. Centralised so swapping for real photography
 * is a one-file change. Unsplash placeholders for now.
 */
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=900&q=80&auto=format&fit=crop`;

export const IMG = {
  // Infant theme
  ia: u("1604329760661-e71dc83f8f26"), // baby with food
  ib: u("1566004100631-35d015d6a491"), // mother feeding baby
  ic: u("1599661046827-9a64bb68d822"), // baby led weaning
  // Child theme
  ca: u("1490818387583-1baba5e638af"), // child eating fruit
  cb: u("1502301103665-0b95cc738daf"), // toddler with food
  cc: u("1576765608535-5f04d1e3f289"), // child healthy eating
  // Teen theme
  ta: u("1543352634-99a5d50ae78e"),    // teen meal
  tb: u("1547592180-85f173990554"),    // healthy bowl
  // General
  hh: u("1490645935967-10de6ba17061"), // fresh produce
  homeHero: `https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=1200&q=80&auto=format&fit=crop`,
  about: `https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80&auto=format&fit=crop`,
} as const;

export const THUMBS = [
  u("1604329760661-e71dc83f8f26").replace("w=900", "w=400"),
  u("1502301103665-0b95cc738daf").replace("w=900", "w=400"),
  u("1490645935967-10de6ba17061").replace("w=900", "w=400"),
  u("1599661046827-9a64bb68d822").replace("w=900", "w=400"),
  u("1543352634-99a5d50ae78e").replace("w=900", "w=400"),
  u("1566004100631-35d015d6a491").replace("w=900", "w=400"),
  u("1547592180-85f173990554").replace("w=900", "w=400"),
];
