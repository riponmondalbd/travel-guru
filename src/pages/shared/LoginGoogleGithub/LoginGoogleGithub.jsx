import { useContext } from "react";
import { SiFacebook, SiGoogle } from "react-icons/si";
import { AuthContext } from "../../../provider/AuthProvider";

const LoginGoogleGithub = () => {
  const { googleLogin } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <button className="btn btn-outline justify-start gap-4 md:gap-24 w-full rounded-full mb-[9px]">
        <SiFacebook className="text-[30px]" />
        Continue with Facebook
      </button>
      <button
        onClick={handleGoogleLogin}
        className="btn btn-outline justify-start gap-4 md:gap-24 w-full rounded-full"
      >
        <SiGoogle className="text-[30px]" />
        Continue with Google
      </button>
    </div>
  );
};

export default LoginGoogleGithub;
