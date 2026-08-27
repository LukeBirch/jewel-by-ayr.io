import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Collection from "./components/Collection";
import BaliSection from "./components/BaliSection";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Collection />
        <BaliSection />
        <Instagram />
      </main>

      <Footer />
    </>
  );
}