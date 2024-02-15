import Projects from "./projects";
import About from "./about";
import Aside from "./header";
import Skills from "./Skills";
const Main = () => {
  return (
    <main className="md:flex md:flex-row items-start gap-4 p-4">
      <Aside />
      <article className="w-full md:w-[50%]">
        <About />
        <hr className="my-5" />
        <Skills />
        <hr className="my-5" />
        <Projects />
      </article>
    </main>
  );
};

export default Main;
