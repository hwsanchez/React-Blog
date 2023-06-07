import "../App.css";
import familyPics from "../assets/images/family_pics.jpeg";
import logo from "../assets/images/GingLogo.jpg";
const HomePage = () => {
  return (
    <>
      <div className="photo-container relative text-center text-white">
        <img src={familyPics} alt={"forrest"} style={{ width: "100%" }} />
        <img
          src={logo}
          alt="logo"
          className="centered absolute top-1/2 left-1/2 -translate-y-2/4"
        />
        {/* <div className="font-thin text-b tracking-widest text-2xl font-serif centered absolute top top-1/2 left-1/2 -translate-y-2/4 text-s">
          Gift'n Giving
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
