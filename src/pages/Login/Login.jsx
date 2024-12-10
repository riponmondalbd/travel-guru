import { Link } from "react-router-dom";
import LoginGoogleGithub from "../shared/LoginGoogleGithub/LoginGoogleGithub";
import BlackNavbar from "../shared/navbar/BlackNavbar";

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <BlackNavbar />
      <div className="md:w-2/3 lg:w-1/2 mx-auto border py-9 px-14 mt-[60px]">
        <h2 className="text-2xl font-montserrat font-bold mb-[50px]">Login</h2>
        <form className="card-body p-0 space-y-11">
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
            <div className="flex justify-between">
              <div className="flex items-center gap-[10px]">
                <input type="checkbox" name="remember" id="remember" />
                <label
                  className=" text-base font-montserrat font-medium text-[#000000]"
                  htmlFor="remember"
                >
                  Remember Me
                </label>
              </div>
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-[#F9A51A] underline text-base font-montserrat font-medium"
                >
                  Forgot password?
                </a>
              </label>
            </div>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#F9A51A] rounded-none text-base font-montserrat font-medium">
              Create an account
            </button>
            <p className="text-center text-base font-montserrat font-medium mt-4">
              Do not have account ?{" "}
              <Link to={"/register"} className="text-[#F9A51A] underline">
                Create an account
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

export default Login;