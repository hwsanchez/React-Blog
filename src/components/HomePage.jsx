import "../App.css";
const HomePage = ({ heroPic } ) => {
  return (
    <>
      <div className="h">
        <div className="hero-image">
          <img src={heroPic} alt={"pictures"} className="" />
          <div className="text-center text-4xl absolute top-1/2 left-1/2 text-white -translate-x-1/2 -translate-y-1/2 font-thin tracking-widest">Ging House</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
