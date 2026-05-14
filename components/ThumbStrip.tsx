import { THUMBS } from "@/lib/images";

const THUMB_ALTS = [
  "Baby exploring food during weaning",
  "Toddler eating healthy snack",
  "Fresh fruit and vegetables for children",
  "Baby-led weaning with soft finger foods",
  "Teenager preparing a nutritious meal",
  "Mother feeding infant",
  "Healthy balanced meal for children",
];

export default function ThumbStrip() {
  const doubled = [...THUMBS, ...THUMBS];
  return (
    <div className="bg-cream py-6 overflow-hidden">
      <div className="image-ticker-track flex gap-3">
        {doubled.map((src, i) => (
          <div
            key={i}
            className="w-[200px] md:w-[260px] aspect-square rounded overflow-hidden bg-sage-pale flex-shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={THUMB_ALTS[i % THUMB_ALTS.length]}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
