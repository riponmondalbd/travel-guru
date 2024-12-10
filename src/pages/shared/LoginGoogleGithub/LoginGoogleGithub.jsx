import { SiFacebook, SiGoogle } from "react-icons/si";

const LoginGoogleGithub = (
  <div>
    <button className="btn btn-outline justify-start gap-4 md:gap-24 w-full rounded-full mb-[9px]">
      <SiFacebook className="text-[30px]" />
      Continue with Facebook
    </button>
    <button className="btn btn-outline justify-start gap-4 md:gap-24 w-full rounded-full">
      <SiGoogle className="text-[30px]" />
      Continue with Google
    </button>
  </div>
);

export default LoginGoogleGithub;
