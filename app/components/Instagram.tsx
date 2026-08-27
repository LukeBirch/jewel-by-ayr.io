const instagramUrl = "https://www.instagram.com/shop.ayr/";

export default function Instagram() {
  return (
    <section
      id="instagram"
      className="bg-[#f5f2eb] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Follow Along
          </p>

          <h2 className="text-4xl font-light tracking-wide md:text-5xl">
            @shop.ayr
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-neutral-600">
            Follow Jewel by Ayr on Instagram for new pieces, inspiration and
            behind-the-scenes moments.
          </p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block border border-black px-8 py-4 text-sm uppercase tracking-widest transition-colors hover:bg-black hover:text-white"
          >
            Follow on Instagram
          </a>
        </div>

        {/* Instagram image placeholders */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {[1, 2, 3, 4].map((number) => (
            <a
              key={number}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden bg-neutral-200"
            >
              <div className="flex h-full items-center justify-center text-xs uppercase tracking-widest text-neutral-500">
                Instagram Image {number}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}