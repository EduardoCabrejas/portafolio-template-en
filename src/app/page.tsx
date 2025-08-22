import AboutMe from "./AboutMe/page";
import { Suspense } from "react";
import Experience from './Experience/page';
import Education from "./Education/page";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loader/>}
      >
          <section id="about-me" className="md:mt-8">
            <AboutMe />
          </section>
          <section id="experience" className="mt-8 md:mt-12">
            <Experience />
          </section>
          <section id="education" className="mt-8 md:mt-12">
            <Education />
          </section>
          <section id="skills" className="mt-8 md:mt-12">
            <Skills />
          </section>
          <section id="projects" className="mt-8 md:mt-12">
            <Projects />
          </section>
      </Suspense>
    </>
  );
}
