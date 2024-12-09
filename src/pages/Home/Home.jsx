import homeBackground from "../../assets/images/Rectangle 1.png";
import WhiteNavbar from "../shared/navbar/WhiteNavbar";
import Slider from "./Slider";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70  bg-black">
        <div className="max-w-7xl mx-auto">
          <WhiteNavbar />
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
