import {
  Hero,
  About,
  Schedule,
  Team,
  Partners,
  Sponsers,
} from 'sections/index';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="bg-cover bg-center bg-[url('../public/sections/hero/bg.jpg')] object-cover">
        <Hero />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/sections/about/bg.jpg')] object-cover">
        <About />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/sections/schedule/bg.png')] padding ">
        <Schedule />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/sections/team/bg.jpg')] padding">
        <Team />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/sections/sponser/bg.jpg')] padding ">
        <Sponsers />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/sections/partner/bg.jpg')] padding">
        <Partners />
      </section>
      <Footer />
    </main>
  );
}
