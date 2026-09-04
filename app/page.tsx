import Hero from "@/components/hero";
import About from "@/components/about";
import Connect from "@/components/connect";
import Experience from "@/components/experience";
import Activity from "@/components/activity";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Achievements from "@/components/achievements";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Connect />
      <Experience />
      <Activity />
      <Projects limit={4} />
      <Skills />
      <Achievements />
      <Education />
      <Contact />
    </main>
  );
}
