const Card = ({ name, Techs, preview, live, github }) => {
  return (
    <div>
      <section>
        <img className="mx-auto " src={preview} alt="" />
      </section>
      <section>
        <h4 className="my-3">{name}</h4>
        <div className="flex items-center justify-between my-4">
          <a target="_blank" rel="noreferrer" href={live}>
            Live site
          </a>
          <a target="_blank" href={github} rel="noreferrer">
            Github link
          </a>
        </div>
        <div className="techs flex flex-wrap item center gap-4">
          {Techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card;
