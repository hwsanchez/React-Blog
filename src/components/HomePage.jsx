import "../App.css";
const HomePage = ({ heroPic } ) => {
  return (
    <>
      <div className="home-main-wrapper">
        <div className="hero-image">
          <img src={heroPic} alt={"pictures"} className="" />
          <div className="hero-text font-thin">Ging House</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
