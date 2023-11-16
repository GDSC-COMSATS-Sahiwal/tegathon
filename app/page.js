import {
  Hero,
  About,
  Schedule,
  Team,
  Partners,
  Highlights,
  Sponsers,
  Faq,
} from 'sections/index';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="bg-cover bg-center bg-[url('../public/sections/hero/bg.webp')] object-cover">
        <Hero />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/sections/about/bg.webp')] object-cover">
        <About />
      </section>
      <section
        id="schedule"
        className="bg-cover bg-center bg-[url('../public/sections/schedule/bg.webp')] padding"
      >
        <Schedule />
      </section>
      <section
        id="team"
        className="bg-cover bg-center bg-[url('../public/sections/team/bg.webp')] padding"
      >
        <Team />
      </section>
      <section
        id="sponsers"
        className="bg-cover bg-center bg-[url('../public/sections/sponser/bg.webp')] padding "
      >
        <Sponsers />
      </section>
      <section
        id="partners"
        className="bg-cover bg-center bg-[url('../public/sections/partner/bg.webp')] padding"
      >
        <Partners />
      </section>
      <section
        id="highlights"
        className="relative z-[1] bg-cover bg-center bg-[url('../public/sections/highlights/bg.webp')] padding"
      >
        <Highlights />
      </section>
      <section
        id="faq"
        className="relative z-[1] bg-cover bg-center bg-[url('../public/sections/faq/bg.webp')] padding-y px-2 sm:px-16"
      >
        <Faq />
      </section>
      <Footer />
    </main>
  );
}
