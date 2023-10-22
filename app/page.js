import {
  Hero,
  About,
  Schedule,
  Team,
  Partners,
  Sponsers,
  Highlights,
  Faq,
} from "sections/index";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <section className="bg-cover bg-center bg-[url('../public/hero/heroBg.webp')] object-cover">
        <Hero />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/about_bg.webp')] object-cover padding">
        <About />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/schedule_bg.webp')] padding ">
        <Schedule />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/BG-4.webp')] padding">
        <Team />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/partners_bg.webp')] padding">
        <Partners />
      </section>
      <section className="bg-cover bg-center bg-[url('../public/images/sponsors_bg.webp')] padding ">
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
