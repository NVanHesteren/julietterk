const THUMBS = [
  "/pexels-alexy-almond-3758023.jpg",
  "/pexels-arthousestudio-4589141.jpg",
  "/pexels-cottonbro-6157268.jpg",
  "/pexels-cottonbro-7117594.jpg",
  "/pexels-enginakyurt-1435899.jpg",
  "/pexels-karola-g-7946607.jpg",
  "/pexels-marko-tuokko-831095-2965017.jpg",
  "/pexels-mart-production-7491105.jpg",
  "/pexels-readymade-3987341.jpg",
  "/pexels-thecactusena-28935566.jpg",
  "/pexels-tima-miroshnichenko-7047014.jpg",
  "/pexels-vanessa-loring-5083236.jpg",
  "/pexels-yaroslav-shuraev-8851926.jpg",
];

const THUMB_ALTS = [
  "Child enjoying a healthy meal",
  "Colourful fresh food for children",
  "Parent and child preparing food together",
  "Baby exploring food during weaning",
  "Fresh fruit and vegetables",
  "Toddler eating a nutritious snack",
  "Family mealtime with healthy food",
  "Child with a balanced plate",
  "Healthy ingredients for children's meals",
  "Baby-led weaning with finger foods",
  "Child learning to cook with parent",
  "Mother feeding infant",
  "Happy family eating together",
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
