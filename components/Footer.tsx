import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-cream-deep pt-[72px] pb-8 border-t border-ink/10">
      <div className="max-w-wide mx-auto px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12 mb-14">
          <div>
            <span className="font-serif font-normal text-[18px] text-ink tracking-[-0.012em] block leading-none">
              Juliette Reese-Kari
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-ink-light font-medium">
              Paediatric Dietitian
            </span>
            <p className="text-sm text-ink-mid leading-relaxed max-w-[320px] mt-4">
              HCPC registered, NHS-trained, BDA member. Online consultations across the UK for infants, children and teens.
            </p>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.16em] text-ink-light font-medium mb-4">Site</h5>
            <ul className="list-none space-y-2.5">
              <li><Link href="/" className="text-sm text-ink hover:text-sage transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-sm text-ink hover:text-sage transition-colors">About</Link></li>
              <li><Link href="/services" className="text-sm text-ink hover:text-sage transition-colors">Services</Link></li>
              <li><Link href="/#faq" className="text-sm text-ink hover:text-sage transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.16em] text-ink-light font-medium mb-4">Book</h5>
            <ul className="list-none space-y-2.5">
              <li>
                <a
                  data-cal-namespace="booking"
                  data-cal-link="julietterk"
                  data-cal-config='{"layout":"month_view"}'
                  className="text-sm text-ink hover:text-sage transition-colors cursor-pointer"
                >
                  New patient · £90
                </a>
              </li>
              <li>
                <a
                  data-cal-namespace="booking"
                  data-cal-link="julietterk"
                  data-cal-config='{"layout":"month_view"}'
                  className="text-sm text-ink hover:text-sage transition-colors cursor-pointer"
                >
                  Follow-up · £60
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] uppercase tracking-[0.16em] text-ink-light font-medium mb-4">Contact</h5>
            <ul className="list-none space-y-2.5">
              <li><a href="mailto:julietterk@gmail.com" className="text-sm text-ink hover:text-sage transition-colors">Email me</a></li>
              <li>
                <a
                  href="https://www.linkedin.com/in/juliette-reese-kari-216658192/"
                  target="_blank"
                  rel="noopener"
                  className="text-sm text-ink hover:text-sage transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-7 border-t border-ink/10 flex flex-wrap justify-between items-center gap-6 text-xs text-ink-light">
          <div>© {new Date().getFullYear()} Juliette Reese-Kari · julietterk.com</div>
          <div>HCPC registered (DT29509) · BDA member</div>
        </div>
      </div>
    </footer>
  );
}
