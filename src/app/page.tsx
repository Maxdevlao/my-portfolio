import { About } from "@/components/About";
import { BackToTop } from "@/components/BackToTop";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { Languages } from "@/components/Languages";
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
      <Education />
      <Languages />
      <Contact />
      <BackToTop />
    </main>
  );
}
