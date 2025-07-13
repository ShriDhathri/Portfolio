import About from '@/components/About';
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
    </main>
  );
}
