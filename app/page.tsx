import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Experience } from "./components/experience";
import { Hero } from "./components/hero";
import { Navigation } from "./components/navigation";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
