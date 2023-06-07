import "../App.css";
import styles from "../assets/styles.module.css";
import familyPics from "../assets/images/family_pics.jpeg";
const HomePage = () => {
  return (
    <>
      <div className="photoContainer relative text-center text-white">
        <img src={familyPics} alt={"forrest"} />
        <div className="font-thin text-5xl -tracking-tight centered absolute top top-1/2 left-1/2 -translate-y-2/4">
          Gift'n Giving
        </div>
      </div>
    </>
  );
};

export default HomePage;
