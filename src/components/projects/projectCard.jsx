const Card = ({ name, Techs, preview, live, github }) => {
  return (
    <div className="card">
      <section>
        <img
          className="mx-auto lg:h-[150px] w-full"
          loading="lazy"
          src={preview}
          alt={name}
        />
      </section>
      <section>
        <h4 className="my-3">{name}</h4>
        <div className="flex items-center justify-between my-4">
          {live && (
            <a target="_blank" rel="noreferrer" href={live}>
              Live site
            </a>
          )}
          <a target="_blank" href={github} rel="noreferrer">
            Github link
          </a>
        </div>
        <div className="flex flex-wrap gap-4 techs item center">
          {Techs.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Card;
