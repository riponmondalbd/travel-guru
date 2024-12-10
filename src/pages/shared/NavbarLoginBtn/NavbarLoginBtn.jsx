import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";

const NavbarLoginBtn = () => {
  const { user } = useContext(AuthContext);

  console.log(user);
  return (
    <div>
      {user ? (
        <>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button">
              <p className="text-base font-montserrat text-[#000000] font-bold">
                {user.displayName}
              </p>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <Link className="btn btn-warning" to={"/login"}>
          Login
        </Link>
      )}
    </div>
  );
};

export default NavbarLoginBtn;
