import AboutImage from "../assets/images/sanchez_final-95.jpg";

const AboutPage = () => {
  const picstyle = {
    width: "100%",
    height: "auto",
  };

  const piccontainerstyle = {
    width: "900px",
    height: "330px",
    paddingBottom: "10px",
  };

  const maincontainerstyle = {
    margin: "5% 5%",
    backGroundColor: "Red",
    minHeight: "500px",
  };

  return (
    <>
      <div style={maincontainerstyle}>
        <div className="flex">
          <div style={piccontainerstyle}>
            <img style={picstyle} src={AboutImage} alt="Debbie" />
          </div>

          <div className="pl-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            officiis aperiam rerum, at nisi consequuntur ratione minima, enim
            doloribus ex temporibus atque necessitatibus hic in cumque, totam
            corporis numquam. Tempore.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            officiis aperiam rerum, at nisi consequuntur ratione minima, enim
            doloribus ex temporibus atque necessitatibus hic in cumque, totam
            corporis numquam. Tempore.
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
