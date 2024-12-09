import homeBackground from "../../assets/images/Rectangle 1.png";
import WhiteNavbar from "../shared/navbar/WhiteNavbar";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40 bg-transparent bg-black">
        <WhiteNavbar />
      </div>
    </div>
  );
};

export default Home;
