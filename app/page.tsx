import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Achievements from "@/components/achievements";
import Services from "@/components/services";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Services />
      <Contact />
    </div>
  );
}
