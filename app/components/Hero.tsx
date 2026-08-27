import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-neutral-900">
      {/* Hero image */}
      <Image
        src="/images/hero.jpg"
        alt="Jewel by Ayr jewellery"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 px-6 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.4em]">
          Handmade Jewellery
        </p>

        <h1 className="text-6xl font-light tracking-wide md:text-8xl">
          .Ayr
        </h1>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-7 md:text-base">
          Natural stones, handmade jewellery and pieces inspired by Bali.
        </p>

        <a
          href="#collection"
          className="mt-8 inline-block border border-white px-8 py-4 text-sm uppercase tracking-widest transition-colors hover:bg-white hover:text-black"
        >
          Explore Collection
        </a>
      </div>
    </section>
  );
}