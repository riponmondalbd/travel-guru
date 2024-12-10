import { Link } from "react-router-dom";

const NavbarLoginBtn = () => {
  return (
    <div>
      <Link className="btn btn-warning" to={"/login"}>
        Login
      </Link>
    </div>
  );
};

export default NavbarLoginBtn;
