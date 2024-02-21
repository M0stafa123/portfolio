import { useEffect, useState } from "react";
import SVG from "./logo";
const Aside = ({ aboutInview, skillsInview, projectsInview }) => {
  const [fixed, setFixed] = useState(false);
  setTimeout(() => {
    setFixed(true);
  }, 2300);
  const [active, setActive] = useState("about");
  const handleClick = (item) => {
    setActive(item);
  };
  useEffect(() => {
    if (aboutInview) setActive("about");
    else if (skillsInview) setActive("skills");
    else if (projectsInview) setActive("projects");
  }, [aboutInview, skillsInview, projectsInview]);
  return (
    <aside className="w-full  md:h-screen p-4 md:w-[50%]">
      <article
        className={
          "aside text-center  md:text-left  md:mt-60 " + (fixed ? "md:fixed" : "")
        }
      >
        <div className="relative flex items-center justify-center flex-col md:block">
          <h1 className="text-3xl  max-w-[500px] my-4 lg:text-6xl md:text-5xl relative  flex items-center justify-center">
            <SVG />
            <span className="whitespace-nowrap ml-[85px] md:ml-[65px]">
              ostafa Mohamed
            </span>
          </h1>
          <h2
            className=" mainHeader
          text-xl md:text-3xl my-4"
          >
            <span>W</span>
            <span>e</span>
            <span>b</span>
            <i> </i>
            <span>d</span>
            <span>e</span>
            <span>v</span>
            <span>e</span>
            <span>l</span>
            <span>o</span>
            <span>p</span>
            <span>e</span>
            <span>r</span>
            <span></span>
          </h2>
          <ul className="nav hidden items-center justify-center gap-9 md:block  md:w-fit my-4  ">
            <li
              className={active === "about" ? "active" : ""}
              onClick={() => handleClick("about")}
            >
              <a href="#about">
                <span></span>About
              </a>
            </li>
            <li
              className={active === "skills" ? "active" : ""}
              onClick={() => handleClick("skills")}
            >
              <a href="#skills">
                <span></span>Skills
              </a>
            </li>
            <li
              className={active === "projects" ? "active" : ""}
              onClick={() => handleClick("projects")}
            >
              <a href="#projects">
                <span></span>Projects
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-7 mb-20">
            <li>
              {" "}
              <a
                target="_blank"
                href={"https://www.linkedin.com/in/mostafa-hassan-972680214/"}
                rel="noreferrer"
                className="md:fixed bottom-10 left-10 text-3xl"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={"https://github.com/M0stafa123"}
                rel="noreferrer"
                className="md:fixed bottom-10 left-20 text-3xl"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </article>
    </aside>
  );
};

export default Aside;
