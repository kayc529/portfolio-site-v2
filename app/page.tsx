import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main className='w-full flex flex-col items-center gap-y-[200px]'>
      <Hero />
      <About />
      <Experience />
      <Work />
      <Contact />
    </main>
  );
}
