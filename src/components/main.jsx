import Projects from "./projects";
import About from "./about";
import Aside from "./header";
import Skills from "./Skills";
import { useInView } from "react-intersection-observer";
const Main = () => {
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
    <main className="md:flex md:flex-row items-start gap-4 p-4">
      <Aside
        aboutInview={aboutInview}
        skillsInview={skillsInview}
        projectsInview={projectsInview}
      />
      <article className="w-full md:w-[50%]">
        <About aboutref={aboutref} />
        <hr className="my-5" />
        <Skills skillsref={skillsref} skillsInview={skillsInview} />
        <hr className="my-5" />
        <Projects projectsref={projectsref} />
      </article>
    </main>
  );
};

export default Main;
