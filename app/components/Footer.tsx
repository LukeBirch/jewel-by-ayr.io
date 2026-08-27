const instagramUrl = "https://www.instagram.com/shop.ayr/";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-light tracking-wide">
              .Ayr
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-7 text-neutral-400">
              Handmade jewellery inspired by natural stones and the beauty
              of Bali.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-400">
              Explore
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <a href="#about" className="transition-opacity hover:opacity-60">
                About
              </a>

              <a
                href="#collection"
                className="transition-opacity hover:opacity-60"
              >
                Collection
              </a>

              <a
                href="#instagram"
                className="transition-opacity hover:opacity-60"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xs uppercase tracking-[0.3em] text-neutral-400">
              Connect
            </h3>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm transition-opacity hover:opacity-60"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-neutral-800 pt-6">
          <div className="flex flex-col justify-between gap-3 text-xs text-neutral-500 md:flex-row">
            <p>
              © {new Date().getFullYear()} Jewel by Ayr. All rights reserved.
            </p>

            <p>
              Handmade with care.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}