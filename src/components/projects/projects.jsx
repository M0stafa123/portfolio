import { useEffect, useState } from "react";
import Card from "./Card";
import allProjects from "../../projects.json";
// import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Tabs from "./tabs";

const Projects = ({ projectsref }) => {
  // scroll after filtring

  const scrollToProjects = () => {
    const projects = document.getElementById("projects");
    if (projects) {
      projects.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [activeButton, setActiveButton] = useState("React");
  const [projects, setProjects] = useState(null);
  const [ispending, setIspending] = useState(true);

  useEffect(() => {
    const filteredProjects = allProjects
      .filter((project) =>
        project.Techs.some((tech) => {
          if (tech.toLowerCase().includes("React".toLowerCase())) {
            return true;
          }
          return false;
        })
      )
      .reverse();
    setTimeout(() => {
      setIspending(false);
    }, 7000);
    setProjects(filteredProjects);
  }, []);
  const handleClick = (Techs) => {
    setIspending(true);
    const filteredProjects = allProjects
      .filter((project) =>
        project.Techs.some((tech) => {
          if (tech.toLowerCase().includes(Techs.toLowerCase())) {
            return true;
          }
          return false;
        })
      )
      .reverse();
    setTimeout(() => {
      setIspending(false);
    }, 500);
    setProjects(filteredProjects);
    setActiveButton(Techs);
    scrollToProjects();
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
      <Tabs handleClick={handleClick} activeButton={activeButton} />
      {ispending && (
        <div className="mx-auto text-center text-gray-400">
          it doesn't take time but i am just flexing my loader :)
        </div>
      )}
      <article className="flex flex-wrap gap-4 cards">
        {!ispending &&
          projects?.map((project, i) => (
            <Slide
              triggerOnce
              className=" transition-all rounded-md hover:bg-[#ffffff0d] w-full md:w-[45%] p-4"
              key={project.name + i}
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
      </article>
    </section>
  );
};

export default Projects;
