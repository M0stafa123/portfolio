const About = ({ aboutref }) => {
  return (
    <section
      ref={aboutref}
      id="about"
      className="flex flex-col justify-center h-screen mb-20"
    >
      <img
        src="./145aeb42-a3b4-492a-bd0a-ea2b5bbf4312.webp"
        fetchpriority="high"
        alt="software"
        className="software my-8 hidden md:block lg:max-w-[600px] mx-auto"
      />
      <p className="mx-auto mb-10 text-3xl text-center capitalize md:text-5xl  md:text-start md:mx-0 max-w-[800px] ">
        build fast, responsive and dynamic websites
      </p>
      <h1 className="my-4 text-3xl text-center capitalize md:text-start">
        how did i start?
      </h1>
      <p className="mx-auto !leading-[1.8] text-center md:text-left md:mx-0 md:text-xl">
        the journy started when i saw Egypt FWD scholarship. finished the foundations
        and advanced tracks then started learning with
        <a href="https://elzero.org/" target="_blank" rel="noreferrer">
          ELZERO SCHOOL
        </a>
        and enhance my skills with projects from
        <a
          href="https://www.frontendmentor.io/profile/M0stafa123/solutions"
          target="_blank"
          rel="noreferrer"
        >
          FrontEnd mentor
        </a>
        and problem solving from various sites. i have yet to get jop experience
      </p>
    </section>
  );
};
export default About;
