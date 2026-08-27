import Image from "next/image";

export default function BaliSection() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <Image
        src="/images/bali.jpg"
        alt="Bali landscape"
        fill
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex min-h-[70vh] items-center justify-center px-6 text-center text-white">
        <div>
          <p className="mb-5 text-xs uppercase tracking-[0.4em]">
            From Bali
          </p>

          <h2 className="text-5xl font-light tracking-wide md:text-7xl">
            Inspired by Nature
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 md:text-base">
            Handmade pieces inspired by the natural beauty, textures and
            landscapes of Bali, Indonesia.
          </p>
        </div>
      </div>
    </section>
  );
}