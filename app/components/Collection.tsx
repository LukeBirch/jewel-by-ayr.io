import Image from "next/image";

const products = [
  {
    name: "Stone Necklace",
    image: "/images/product-1.jpg",
  },
  {
    name: "Natural Stone",
    image: "/images/product-2.jpg",
  },
  {
    name: "Handmade Earrings",
    image: "/images/product-3.jpg",
  },
  {
    name: "Wire Wrapped Stone",
    image: "/images/product-4.jpg",
  },
];

export default function Collection() {
  return (
    <section
      id="collection"
      className="bg-white px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-neutral-500">
            Discover
          </p>

          <h2 className="text-4xl font-light tracking-wide md:text-5xl">
            The Collection
          </h2>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <a
              key={product.name}
              href="#shop"
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="pt-4">
                <h3 className="text-sm uppercase tracking-widest">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-neutral-500">
                  View piece →
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Shop button */}
        <div className="mt-16 text-center">
          <a
            href="#shop"
            className="inline-block bg-black px-8 py-4 text-sm uppercase tracking-widest text-white transition-opacity hover:opacity-70"
          >
            View Collection
          </a>
        </div>
      </div>
    </section>
  );
}