import Projects from "./projects";
import About from "./about";
import Aside from "./header";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
import React from "react";
const Main = React.memo(() => {
  console.log("Main render");
  const [aboutref, aboutInview] = useInView({
    threshold: 0,
  });
  const [skillsref, skillsInview] = useInView({
    threshold: 0,
  });
  const [projectsref, projectsInview] = useInView({
    threshold: 0,
  });
  return (
    <main className="items-start gap-4 p-4 md:flex md:flex-row">
      <Aside
        aboutInview={aboutInview}
        skillsInview={skillsInview}
        projectsInview={projectsInview}
      />
      <article className="w-full md:w-[50%] font-Courgette">
        <About aboutref={aboutref} />
        <hr className="my-5" />
        <Skills skillsref={skillsref} skillsInview={skillsInview} />
        <hr className="my-5" />
        <Projects projectsref={projectsref} />
      </article>
    </main>
  );
});

export default Main;
