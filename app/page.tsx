
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Certifications />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
