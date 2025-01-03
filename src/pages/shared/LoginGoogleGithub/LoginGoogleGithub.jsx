import { useContext } from "react";
import { SiGithub, SiGoogle } from "react-icons/si";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const LoginGoogleGithub = () => {
  const { googleLogin, gitHubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  //   google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        // console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //   github login
  const handleGithubLogin = () => {
    gitHubLogin()
      .then(() => {
        // console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline justify-start gap-4 md:gap-24 w-full rounded-full mb-[9px]"
      >
        <SiGoogle className="text-[30px]" />
        Continue with Google
      </button>
      <button
        onClick={handleGithubLogin}
        className="btn btn-outline justify-start gap-4 md:gap-24 w-full rounded-full"
      >
        <SiGithub className="text-[30px]" />
        Continue with Github
      </button>
    </div>
  );
};

export default LoginGoogleGithub;
