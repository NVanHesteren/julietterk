const ITEMS = [
  "HCPC Registered", "BDA Member", "NHS-trained · 6+ years",
  "Online · UK-wide", "Ages 0 to 18", "No Referral Needed",
];

export default function Ticker() {
  // Duplicate items so the CSS scroll never gaps
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((t, i) => (
          <span key={i} className="ticker-item">
            <span className="ticker-dot" />{t}
          </span>
        ))}
      </div>
    </div>
  );
}
