import "../App.css";
import familyPics from "../assets/images/family_pics.jpeg";
const HomePage = () => {
  return (
    <>
      <div className="home-main-wrapper">
        <div className="hero-image">
          <img src={familyPics} alt={"pictures"} className="" />
          <div className="hero-text font-thin">Ging House</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
