const Tabs = ({ handleClick, activeButton }) => {
  const tabs = ["Client Projects", "React", "Nodejs", "Tailwind", "HTML"];

  return (
    <>
      <section className="sticky z-10 flex flex-wrap items-center justify-center gap-1 my-20 top-5 filter optimal:relative">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeButton === tab ? "active" : ""}
            onClick={() => handleClick(tab)}
          >
            {tab}
          </button>
        ))}
      </section>
    </>
  );
};

export default Tabs;
