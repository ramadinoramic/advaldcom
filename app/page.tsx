import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Thesis from '@/components/sections/Thesis';
import Capabilities from '@/components/sections/Capabilities';
import Stack from '@/components/sections/Stack';
import WorkNote from '@/components/sections/WorkNote';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Thesis />
        <Capabilities />
        <Stack />
        <WorkNote />
        <About />
        <Contact />
      </main>
    </>
  );
}
