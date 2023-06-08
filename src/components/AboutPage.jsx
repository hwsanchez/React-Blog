import AboutImage from "../assets/images/sanchez_final-95.jpg";

const AboutPage = () => {
  const picstyle = {
    maxWidth: "100%",
    height: "auto"
  };

  const piccontainerstyle = {
    display: "inline-block",
    maxHeight: "400px",
    maxWidth: "400px",



  };

  const maincontainerstyle = {
    margin: "5% 5%",
    minHeight: "500px",
  };

  const lineColor = {
    height: "0.1rem"
  }

  return (
    <>
      <div style={maincontainerstyle}>
        <div className="flex">
          <div style={piccontainerstyle}>
            <img style={picstyle} src={AboutImage} alt="Debbie" />
          </div>
          <div className="pl-5">
            <div className="pb-5 font-serif text-neutral-400 text-3xl tracking-wider font-thin">
              Creativity and Ideas to share
            </div>
            <div className="font-sans text-zinc-500">
              <p>
                Hi, I’m Debbie! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repudiandae architecto sed nostrum tenetur
                dolores saepe perferendis in molestias totam animi, voluptatum
                vel excepturi earum suscipit ipsam? Libero id eveniet
                voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
              <br />
              <p>
                Repudiandae architecto sed nostrum tenetur dolores saepe
                perferendis in molestias totam animi, voluptatum vel excepturi
                earum suscipit ipsam? Libero id eveniet voluptatem..
              </p>
              <hr
                style={lineColor}
                className="mt-7 max-w-xs bg-zinc-300 border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
