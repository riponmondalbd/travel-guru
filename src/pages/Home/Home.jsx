import homeBackground from "../../assets/images/Rectangle 1.png";
import BlackNavbar from "../shared/navbar/BlackNavbar";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${homeBackground})`,
      }}
    >
      <div className="hero-overlay bg-opacity-40 bg-transparent bg-black">
        {/* <WhiteNavbar /> */}
        <BlackNavbar />
      </div>
    </div>
  );
};

export default Home;
