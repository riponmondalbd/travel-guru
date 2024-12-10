import { Link } from "react-router-dom";
import logo from "./../../../assets/logo.png";
import { logInBtn, navLinks } from "./NavLinks";

const BlackNavbar = () => {
  //   const navLinks = (
  //     <>
  //       <li>
  //         <NavLink to={"/news"}>News</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={"/destination"}>Destination</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={"/blog"}>Blog</NavLink>
  //       </li>
  //       <li>
  //         <NavLink to={"/contact"}>Contact</NavLink>
  //       </li>
  //     </>
  //   );
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar justify-between ">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content font-montserrat font-medium text-base  rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>

          <Link to={"/"} className="btn btn-ghost">
            <img className="h-[56px]" src={logo} alt="logo" />
          </Link>
          <label className="md:ml-[80px] bg-transparent input input-bordered flex items-center gap-2 mr-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input
              type="text"
              className="grow w-full max-w-xs font-montserrat text-base font-medium"
              placeholder="Search"
            />
          </label>
        </div>
        <div className="">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-montserrat font-medium text-base">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end">{logInBtn}</div>
        </div>
      </div>
    </div>
  );
};

export default BlackNavbar;
