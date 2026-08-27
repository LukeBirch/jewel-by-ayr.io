export default function About() {
  return (
    <section
      id="about"
      className="bg-[#f5f2eb] px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-neutral-500">
          About .Ayr
        </p>

        <h2 className="text-4xl font-light leading-tight tracking-wide text-neutral-900 md:text-6xl">
          We find beauty in the rough.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
          Inspired by nature and handmade in Bali, .Ayr creates unique
          jewellery using natural stones and carefully selected materials.
          Each piece celebrates the individuality of the stone and the
          character that makes it unique.
        </p>
      </div>
    </section>
  );
}