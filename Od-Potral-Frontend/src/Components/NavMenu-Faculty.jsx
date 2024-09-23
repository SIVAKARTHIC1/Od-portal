import { NavLink } from "react-router-dom";
import { HiOutlineHome, HiOutlineClipboardList } from "react-icons/hi";

const NavMenuFaculty = () => (
  <ul className="w-full flex gap-5 flex-col">
    <li className="w-full">
      <NavLink
        to="/faculty/dashboard"
        className={({ isActive }) =>
          `px-12 py-3 cursor-pointer flex items-center gap-2 hover:bg-hover ${
            isActive ? "bg-hover" : ""
          }`
        }
      >
        <HiOutlineHome />
        Dashboard
      </NavLink>
    </li>
    <li>
      <NavLink
        to={"/faculty/od-approvals"}
        className={({ isActive }) =>
          `px-12 py-3 cursor-pointer flex items-center gap-2 hover:bg-hover ${
            isActive ? "bg-hover" : ""
          }`
        }
      >
        <HiOutlineClipboardList />
        Onduty
      </NavLink>
    </li>
  </ul>
);

export default NavMenuFaculty;
