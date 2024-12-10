import { Link } from "react-router-dom";
import LoginGoogleGithub from "../shared/LoginGoogleGithub/LoginGoogleGithub";
import BlackNavbar from "../shared/navbar/BlackNavbar";

const Register = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <BlackNavbar />
      <div className="md:w-2/3 lg:w-1/2 mx-auto border py-9 px-14 mt-[60px]">
        <h2 className="text-2xl font-montserrat font-bold mb-[50px]">
          Create an account
        </h2>
        <form className="card-body p-0 space-y-11">
          <div className="form-control ">
            <input
              type="text"
              placeholder="First Name"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="text"
              placeholder="Last Name"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="email"
              placeholder="Username or Email"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="password"
              placeholder="Confirm Password"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#F9A51A] rounded-none text-base font-montserrat font-medium">
              Create an account
            </button>
            <p className="text-center text-base font-montserrat font-medium mt-4">
              Already have account ?{" "}
              <Link to={"/login"} className="text-[#F9A51A] underline">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>

      <div className="divider w-2/3 md:w-1/2 lg:w-1/3 mx-auto text-base font-montserrat font-medium text-[#000000]">
        OR
      </div>
      <div className="w-2/3 md:w-1/2 lg:w-1/3 mx-auto mt-1 mb-[60px]">
        <LoginGoogleGithub />
      </div>
    </div>
  );
};

export default Register;
