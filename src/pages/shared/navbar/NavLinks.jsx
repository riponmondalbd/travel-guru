import { Link, NavLink } from "react-router-dom";

const navLinks = (
  <>
    <li>
      <NavLink to={"/news"}>News</NavLink>
    </li>
    <li>
      <NavLink to={"/destination"}>Destination</NavLink>
    </li>
    <li>
      <NavLink to={"/blog"}>Blog</NavLink>
    </li>
    <li>
      <NavLink to={"/contact"}>Contact</NavLink>
    </li>
  </>
);

const logInBtn = (
  <Link className="btn btn-warning" to={"/login"}>
    Login
  </Link>
);

export { logInBtn, navLinks };
