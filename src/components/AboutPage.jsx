import ScrollToTop from "./ScrollToTop";

const AboutPage = ( {nerraPic }) => {
  const lineColor = {
    height: "0.1rem",
  };

  return (
    <>
      <ScrollToTop />
      <div className="mr-10 ml-10 mt-10 mb-10">
        <div className="block sm:flex">
          <div className="mx-auto sm:mx-0 max-w-md">
            <img
              src={ nerraPic }
              alt="Debbie"
              className="w-full h-auto ml-auto mr-auto"
            />
          </div>
          <div className="block pl-8 right-container">
            <div className="big-text-container pt-5 pb-5 font-serif text-neutral-400 text-3xl tracking-wider font-thin">
              Creativity and Inspiration to share...
            </div>
            <div className="about-text-container font-sans text-zinc-500">
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
