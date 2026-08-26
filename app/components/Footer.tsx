export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold tracking-wide">
              Jewel by Ayr
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Jewellery designed to be treasured.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#about" className="hover:opacity-60">
              About
            </a>

            <a href="#collection" className="hover:opacity-60">
              Collection
            </a>

            <a href="#contact" className="hover:opacity-60">
              Contact
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-5 text-sm">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60"
            >
              Instagram
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-60"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Jewel by Ayr. All rights reserved.
        </div>
      </div>
    </footer>
  );
}