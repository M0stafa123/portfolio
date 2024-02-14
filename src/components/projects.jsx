import { useEffect, useState } from "react";
import Card from "./Card";
// import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import axios from "axios";
// import { Zoom } from "react-awesome-reveal";
const Projects = ({ projectRef }) => {
  const [projects, setProjects] = useState(null);
  const [err, setErr] = useState(null);
  const [ispending, setIspending] = useState(true);
  useEffect(() => {
    axios
      .get("https://portfolio-z8h6.onrender.com/repos/65c2774c940f12a255a51d7a")
      .then((data) => {
        setProjects(data.data);
        setIspending(false);
      })
      .catch((err) => {
        setErr(err);
        setIspending(false);
      });
  }, [projects]);
  return (
    <section ref={projectRef} className="p-4" id="projects">
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
      <article className=" cards flex flex-wrap gap-4">
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
          <div>
            if the Projects took too much time. just wait a litter more the server is
            activating
          </div>
        )}
        {err && <div>{err}</div>}
      </article>
    </section>
  );
};

export default Projects;
