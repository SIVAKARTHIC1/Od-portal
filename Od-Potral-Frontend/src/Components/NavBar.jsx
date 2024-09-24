import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/authProvider";
import NavMenuFaculty from "./NavMenu-Faculty";
import NavMenuStudent from "./NavMenu-Student";
import { HiOutlineLogout } from "react-icons/hi";

const NavBar = ({ isStudent = true }) => {
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  function logout() {
    dispatch({ type: "user/Logout" });
    navigate("/");
  }
  
  return (
    <nav className="w-full py-6 space-y-7 flex flex-col px-3 h-screen">
      <div className="mt-3">
        <h1 className="text-primary-text font-bold text-center text-xl">
          OD-PORTAL
        </h1>
      </div>
      <div className="flex-grow">
        {isStudent ? <NavMenuStudent /> : <NavMenuFaculty />}
      </div>
      <button
        className="px-12 py-3 cursor-pointer flex items-center gap-2 bg-hover"
        onClick={() => logout()}
      >
        <HiOutlineLogout />
        Logout
      </button>
    </nav>
  );
};
export default NavBar;
