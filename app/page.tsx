import Background from "./components/Background";
import GlassBackground from "./components/GlassBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Motion3D from "./components/Motion3D";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";

export default function Home() {
  return (
    <>
      <Background />
      <main className="relative z-10 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      </main>
      <Motion3D />
    </>
  );
}
