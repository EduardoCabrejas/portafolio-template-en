import AboutMe from "./Home/page";
import { Suspense } from "react";
import Skills from "./Skills/page";
import Projects from "./Projects/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <div className="flex-col gap-4 w-full flex items-center justify-center">
              <div className="w-20 h-20 border-4 border-transparent text-lightBlue3 text-4xl animate-spin flex items-center justify-center border-t-lightBlue2 rounded-full">
                <div className="w-16 h-16 border-4 border-transparent text-darkBlue3 text-2xl animate-spin flex items-center justify-center border-t-darkBlue2 rounded-full"></div>
              </div>
            </div>
            <p className="suspense">Loading Portfolio...</p>
          </div>
        }
      >
        <div className="bodyContainer">
        <div id="about-me">
          <AboutMe />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="projects">
        <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
        </div>
      </Suspense>
    </>
  );
}
