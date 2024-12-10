import { SiFacebook, SiGoogle } from "react-icons/si";
import { Link } from "react-router-dom";
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
              <Link className="text-[#F9A51A]">Login</Link>
            </p>
          </div>
        </form>
      </div>

      <div className="divider w-1/3 mx-auto text-base font-montserrat font-medium text-[#000000]">
        OR
      </div>
      <div className="w-1/3 mx-auto mt-1 mb-[60px]">
        <button className="btn btn-outline justify-start gap-24 w-full rounded-full mb-[9px]">
          <SiFacebook className="text-[30px]" />
          Continue with Facebook
        </button>
        <button className="btn btn-outline justify-start gap-24 w-full rounded-full">
          <SiGoogle className="text-[30px]" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
