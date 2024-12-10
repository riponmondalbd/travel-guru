import { NavLink } from "react-router-dom";

const navLinks = (
  <>
    <li>
      <NavLink to={"/news"}>News</NavLink>
    </li>
    <li>
      <NavLink to={"/blog"}>Blog</NavLink>
    </li>
    <li>
      <NavLink to={"/register"}>Contact</NavLink>
    </li>
  </>
);

export { navLinks };
