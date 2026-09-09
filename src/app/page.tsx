import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <About />
      <Team />
      <Services />
      <Process />
      <Contact />
    </>
  );
}
