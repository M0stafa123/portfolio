import React, { useEffect, useState } from "react";
import Card from "./Card";
// import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import axios from "axios";
// import { Zoom } from "react-awesome-reveal";
const Projects = ({ projectsref }) => {
  const [activeButton, setActiveButton] = useState("React");
  const [projects, setProjects] = useState(null);
  const [err, setErr] = useState(null);
  const [ispending, setIspending] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:1000/repos/filter/65c2774c940f12a255a51d7a/?Techs=React")
      .then((data) => {
        setProjects(data.data);
        setIspending(false);
      })
      .catch((err) => {
        setErr(err);
        setIspending(false);
      });
  }, []);
  const handleClick = (Techs, e) => {
    axios
      .get(
        `http://localhost:1000/repos/filter/65c2774c940f12a255a51d7a/?Techs=${Techs}`
      )
      .then((data) => {
        setProjects(data.data);
        setActiveButton(Techs);
      });
  };
  return (
    <section ref={projectsref} className="p-4" id="projects">
      <div>
        <h1 className="mainHeader">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>s</span>
        </h1>
      </div>
      {projects && (
        <section className="sticky z-10 flex flex-wrap gap-1 my-5 top-5 filter md:relative">
          <button
            className={activeButton === "React" ? "active" : ""}
            onClick={(e) => handleClick("React", e)}
          >
            React
          </button>
          <button
            className={activeButton === "Nodejs" ? "active" : ""}
            onClick={(e) => handleClick("Nodejs", e)}
          >
            Nodejs
          </button>
          <button
            className={activeButton === "Tailwind" ? "active" : ""}
            onClick={(e) => handleClick("Tailwind", e)}
          >
            Tailwind
          </button>
          <button
            className={activeButton.includes("HTML") ? "active" : ""}
            onClick={(e) => handleClick(["HTML", "CSS"], e)}
          >
            HTML & CSS
          </button>
        </section>
      )}

      <article className="flex flex-wrap gap-4 cards">
        {projects &&
          projects.map((project) => (
            <Slide
              triggerOnce
              className=" transition-all rounded-md hover:bg-[#ffffff0d] w-full md:w-[45%] p-4"
              key={project._id}
            >
              <Card
                name={project.name}
                Techs={project.Techs}
                preview={project.preview}
                live={project.live}
                github={project.github}
              />
            </Slide>
          ))}
        {ispending && (
          <div className="mx-auto">
            if the Projects took too much time. just wait a littel more the server is
            activating
            <svg
              className="loading"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 800 800"
            >
              <defs>
                <filter
                  id="nnneon-filter"
                  x="-100%"
                  y="-100%"
                  width="400%"
                  height="400%"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur
                    stdDeviation="13 12"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="SourceGraphic"
                    edgeMode="none"
                    result="blur"
                  ></feGaussianBlur>
                </filter>
                <filter
                  id="nnneon-filter2"
                  x="-100%"
                  y="-100%"
                  width="400%"
                  height="400%"
                  filterUnits="objectBoundingBox"
                  primitiveUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feGaussianBlur
                    stdDeviation="14 14"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="SourceGraphic"
                    edgeMode="none"
                    result="blur"
                  ></feGaussianBlur>
                </filter>
              </defs>
              <g strokeWidth="14.5" stroke="#178282" fill="none">
                <path
                  d="M387.18284189561194 215.14196794914312C395.11409933060725 210.5636790742557 404.88590066939275 210.5636790742557 412.81715810438806 215.14324966495354L553.6828525348544 296.47196298472704C561.6141099698498 301.05025185961443 566.5000106392425 309.5134213559419 566.5000106392425 318.6712808215272V481.32870746107415C566.5000106392425 490.4865669266594 561.6141099698498 498.9497364229869 553.6828525348544 503.52930701368473L412.81715810438806 584.8580203334582C404.88590066939275 589.4363092083456 395.11409933060725 589.4363092083456 387.18284189561194 584.8567386176478L246.31714746514547 503.52802529787436C238.38589003015016 498.9497364229869 233.4999893607574 490.4865669266594 233.4999893607574 481.32870746107415V318.6712808215272C233.4999893607574 309.5134213559419 238.38589003015016 301.05025185961443 246.31714746514547 296.4706812689166L387.18284189561194 215.14196794914312Z "
                  filter="url(#nnneon-filter)"
                ></path>
                <path
                  d="M402.18284189561194 215.14196794914312C410.11409933060725 210.5636790742557 419.88590066939275 210.5636790742557 427.81715810438806 215.14324966495354L568.6828525348544 296.47196298472704C576.6141099698498 301.05025185961443 581.5000106392425 309.5134213559419 581.5000106392425 318.6712808215272V481.32870746107415C581.5000106392425 490.4865669266594 576.6141099698498 498.9497364229869 568.6828525348544 503.52930701368473L427.81715810438806 584.8580203334582C419.88590066939275 589.4363092083456 410.11409933060725 589.4363092083456 402.18284189561194 584.8567386176478L261.31714746514547 503.52802529787436C253.38589003015016 498.9497364229869 248.4999893607574 490.4865669266594 248.4999893607574 481.32870746107415V318.6712808215272C248.4999893607574 309.5134213559419 253.38589003015016 301.05025185961443 261.31714746514547 296.4706812689166L402.18284189561194 215.14196794914312Z "
                  filter="url(#nnneon-filter2)"
                  opacity="1"
                ></path>
                <path
                  d="M372.18284189561194 215.14196794914312C380.11409933060725 210.5636790742557 389.88590066939275 210.5636790742557 397.81715810438806 215.14324966495354L538.6828525348544 296.47196298472704C546.6141099698498 301.05025185961443 551.5000106392425 309.5134213559419 551.5000106392425 318.6712808215272V481.32870746107415C551.5000106392425 490.4865669266594 546.6141099698498 498.9497364229869 538.6828525348544 503.52930701368473L397.81715810438806 584.8580203334582C389.88590066939275 589.4363092083456 380.11409933060725 589.4363092083456 372.18284189561194 584.8567386176478L231.31714746514547 503.52802529787436C223.38589003015016 498.9497364229869 218.4999893607574 490.4865669266594 218.4999893607574 481.32870746107415V318.6712808215272C218.4999893607574 309.5134213559419 223.38589003015016 301.05025185961443 231.31714746514547 296.4706812689166L372.18284189561194 215.14196794914312Z "
                  filter="url(#nnneon-filter2)"
                  opacity="1"
                ></path>
                <path d="M387.18284189561194 215.14196794914312C395.11409933060725 210.5636790742557 404.88590066939275 210.5636790742557 412.81715810438806 215.14324966495354L553.6828525348544 296.47196298472704C561.6141099698498 301.05025185961443 566.5000106392425 309.5134213559419 566.5000106392425 318.6712808215272V481.32870746107415C566.5000106392425 490.4865669266594 561.6141099698498 498.9497364229869 553.6828525348544 503.52930701368473L412.81715810438806 584.8580203334582C404.88590066939275 589.4363092083456 395.11409933060725 589.4363092083456 387.18284189561194 584.8567386176478L246.31714746514547 503.52802529787436C238.38589003015016 498.9497364229869 233.4999893607574 490.4865669266594 233.4999893607574 481.32870746107415V318.6712808215272C233.4999893607574 309.5134213559419 238.38589003015016 301.05025185961443 246.31714746514547 296.4706812689166L387.18284189561194 215.14196794914312Z "></path>

                <path
                  d="M 352 448 L 352 352 L 400 400 L 448 352 L 448 448 "
                  opacity="1"
                  fill="none"
                  stroke="#178282"
                  strokeWidth="20"
                />
              </g>
            </svg>
          </div>
        )}
        {err && <div>{err}</div>}
      </article>
    </section>
  );
};

export default Projects;
