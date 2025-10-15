import React, { useEffect, useState } from "react";
import SVG from "./logo";
const Aside = React.memo(({ aboutInview, skillsInview, projectsInview }) => {
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
    <aside className="w-full  optimal:h-screen p-4 optimal:w-[50%]">
      <article
        className={
          "aside text-center  optimal:text-left  optimal:mt-60 " +
          (fixed ? "optimal:fixed" : "")
        }
      >
        <div className="relative flex flex-col items-center justify-center optimal:block">
          <h1 className="text-3xl  max-w-[500px] my-4 lg:text-6xl optimal:text-5xl relative  flex items-center justify-center">
            <SVG />
            <span className="whitespace-nowrap ml-[85px] optimal:ml-[65px]">
              ostafa Mohamed
            </span>
          </h1>
          <h2 className="my-12 text-xl mainHeader optimal:text-3xl font-Madimi">
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
          <ul className="items-center justify-center hidden my-4 nav gap-9 optimal:block optimal:w-fit ">
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
          <ul className="flex items-center justify-center mb-20 gap-7">
            <li>
              {" "}
              <a
                target="_blank"
                href={"https://www.linkedin.com/in/mostafa-hassan-972680214/"}
                rel="noreferrer"
                className="text-3xl optimal:fixed bottom-10 left-10"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href={"https://github.com/M0stafa123"}
                rel="noreferrer"
                className="text-3xl optimal:fixed bottom-10 left-20"
              >
                <i className="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </article>
    </aside>
  );
});

export default Aside;
