import About from '@/components/About';
import Achievements from '@/components/Achievement';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Skills from '@/components/Skills';

export default function Home() {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
