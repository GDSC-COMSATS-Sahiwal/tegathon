import {
  Hero,
  About,
  Schedule,
  Team,
  Partners,
  Sponsers,
  Highlights,
  Faq,
} from 'sections/index';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="bg-blue-500 xl:padding-l xl:padding-r padding-b">
        <Hero />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/about_bg.png')] object-cover padding">
        <About />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/schedule_bg.png')] padding ">
        <Schedule />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/BG-4.png')] padding">
        <Team />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/partners_bg.png')] padding">
        <Partners />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/sponsors_bg.png')] padding ">
        <Sponsers />
      </section>
      <section className="bg-red-500 padding">
        <Highlights />
      </section>
      <section className="bg-yellow-500 padding">
        <Faq />
      </section>

      <section className="padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
}
