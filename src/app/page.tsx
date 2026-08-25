import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteNav } from "@/components/SiteNav";
import { Stack } from "@/components/Stack";

export default function Home() {
  return (
    <main className="flex-1">
      <SiteNav />
      <Hero />
      <Stack />
      <Projects />
      <About />
      <Contact />
    </main>
  );
}
