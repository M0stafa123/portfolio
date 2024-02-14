import Projects from "./projects";
import About from "./about";
import Aside from "./header";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
const Main = () => {
  const [aboutRef, aboutInView] = useInView({
    threshold: 0.7,
  });
  const [skillsref, skillsinview] = useInView({
    threshold: 0.4,
  });
  const [projectRef, projectInView] = useInView({
    threshold: 0.5,
  });

  return (
    <main className="md:flex md:flex-row items-start gap-4 p-4">
      <Aside
        aboutRef={aboutRef}
        skillsRef={skillsref}
        projectRef={projectRef}
        skillsinview={skillsinview}
        aboutInView={aboutInView}
        projectInView={projectInView}
      />
      <article className="w-full md:w-[50%]">
        <About aboutRef={aboutRef} />
        <hr className="my-5" />
        <Skills skillsref={skillsref} skillsinview={skillsinview} />
        <hr className="my-5" />
        <Projects projectRef={projectRef} />
      </article>
    </main>
  );
};

export default Main;
