import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import LoginGoogleGithub from "../shared/LoginGoogleGithub/LoginGoogleGithub";
import BlackNavbar from "../shared/navbar/BlackNavbar";

const Login = () => {
  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // console.log(email, password);

    //   clear message
    setSuccessMessage("");
    setErrorMessage("");

    // login user
    login(email, password)
      .then(() => {
        setSuccessMessage("Login Successfully");
        e.target.reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <BlackNavbar />
      <div className="md:w-2/3 lg:w-1/2 mx-auto border py-9 px-5 md:px-14 mt-[60px]">
        <h2 className="text-2xl font-montserrat font-bold mb-[50px]">Login</h2>
        <form
          onSubmit={handleLogin}
          className="card-body p-0 space-y-11 relative"
        >
          <div className="form-control ">
            <input
              type="email"
              placeholder="Username or Email"
              name="email"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
            <span
              className="absolute right-2 bottom-[210px] md:bottom-[190px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>

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
              Login
            </button>
            <p className="text-center text-base font-montserrat font-medium mt-4">
              Do not have account ?{" "}
              <Link to={"/register"} className="text-[#F9A51A] underline">
                Create an account
              </Link>
            </p>
          </div>
        </form>
        {successMessage && (
          <p className="font-montserrat font-semibold text-green-600 text-center mt-5">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="font-montserrat font-semibold text-red-600 text-center mt-5">
            {errorMessage}
          </p>
        )}
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
