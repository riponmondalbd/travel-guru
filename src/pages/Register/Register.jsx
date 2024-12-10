import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import LoginGoogleGithub from "../shared/LoginGoogleGithub/LoginGoogleGithub";
import BlackNavbar from "../shared/navbar/BlackNavbar";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { createUser, logOut } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    // console.log(firstName, lastName, email, password, confirmPassword);

    //   clear message
    setSuccessMessage("");
    setErrorMessage("");

    // password validation
    if (password !== confirmPassword) {
      setErrorMessage("Password must be same");
      return;
    } else if (password < 6) {
      setErrorMessage("Password must be at least 6 Character");
      return;
    } else if (!/[a-z]/.test(password)) {
      setErrorMessage("Password must be contain at least one Letter");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage(
        "Password must be contain at least one Uppercase character"
      );
      return;
    } else if (!/[0-9]/.test(password)) {
      setErrorMessage("Password must be contain at least one Digit");
      return;
    } else if (!/[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]/.test(password)) {
      setErrorMessage("Password must be contain at least one Special Symbol");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMessage("User create Successfully");
        updateProfile(result.user, {
          displayName: firstName + " " + lastName,
        })
          .then(() => {
            // after resister user logout the user
            logOut();
            e.target.reset();
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <div className="max-w-7xl mx-auto">
      <BlackNavbar />
      <div className="md:w-2/3 lg:w-1/2 mx-auto border py-9 px-5 md:px-14 mt-[60px]">
        <h2 className="text-2xl font-montserrat font-bold mb-[50px]">
          Create an account
        </h2>
        <form
          onSubmit={handleRegister}
          className="card-body p-0 space-y-11 relative"
        >
          <div className="form-control ">
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
          </div>
          <div className="form-control ">
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
          </div>
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
              className="absolute right-2 bottom-[250px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
          </div>
          <div className="form-control ">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              name="confirmPassword"
              className="input input-bordered border-t-0 border-x-0 rounded-none px-0 text-base font-montserrat font-medium text-black"
              required
            />
            <span
              className="absolute right-2 bottom-[150px]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
            </span>
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

export default Register;
