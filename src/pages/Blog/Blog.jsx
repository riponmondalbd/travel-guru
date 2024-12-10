import { Link } from "react-router-dom";
import BlackNavbar from "../shared/navbar/BlackNavbar";

const Blog = () => {
  return (
    <div>
      <BlackNavbar />
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to={-1}>
              <button className="btn bg-[#F9A51A]">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
