import anime from "animejs";
import { useEffect } from "react";

const About = ({ aboutRef }) => {
  useEffect(() => {
    anime({
      targets: ".software",
      translateY: [{ value: 25 }],
      loop: true,
      easing: "linear",
      direction: "alternate",
      duration: "2500",
    });
  }, []);

  return (
    <section ref={aboutRef} id="about" className="flex flex-col justify-center mb-10">
      <img
        src="./145aeb42-a3b4-492a-bd0a-ea2b5bbf4312.png"
        alt="software"
        className="software mb-auto"
      />
      <p className=" mb-10 capitalize text-4xl">
        build fast, responsive and dynamic websites
      </p>
      <h1 className="text-3xl my-4 capitalize">how did i start?</h1>
      <p className=" text-center mx-auto md:text-left md:mx-0 md:text-xl leading-10">
        the journy started when i saw Egypt FWD scholarship. finished the foundations
        and advanced tracks then started learning with{" "}
        <a
          href="https://elzero.org/"
          className="transition-all hover:text-mainText"
          target="_blank"
          rel="noreferrer"
        >
          ELZERO SCHOOL{" "}
        </a>
        and enhance my skills with projects from
        <a
          href="https://www.frontendmentor.io/profile/M0stafa123/solutions"
          className=" transition-all hover:text-mainText"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          FrontEnd mentor
        </a>{" "}
        and problem solving from various sites. i have yet to get jop experience
      </p>
    </section>
  );
};
export default About;
