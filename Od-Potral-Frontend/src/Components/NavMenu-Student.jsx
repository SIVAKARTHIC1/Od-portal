import { NavLink } from "react-router-dom";
import {
  HiOutlineHome,
  HiOutlineClipboardCheck,
  HiOutlineClipboardList,
} from "react-icons/hi";

const NavMenuStudent = () => (
  <ul className="w-full flex gap-5 flex-col">
    <li className="w-full">
      <NavLink
        to="/student/home"
        className={({ isActive }) =>
          `px-12 py-3 cursor-pointer flex items-center gap-2 hover:bg-hover ${
            isActive ? "bg-hover" : ""
          }`
        }
      >
        <HiOutlineHome />
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to={"/student/od-apply"}
        className={({ isActive }) =>
          `px-12 py-3 cursor-pointer flex items-center gap-2 hover:bg-hover ${
            isActive ? "bg-hover" : ""
          }`
        }
      >
        <HiOutlineClipboardList />
        Apply-OD
      </NavLink>
    </li>
    <li>
      <NavLink
        to={"/student/od-approvals"}
        className={({ isActive }) =>
          `px-12 py-3 cursor-pointer flex items-center gap-2 hover:bg-hover ${
            isActive ? "bg-hover" : ""
          }`
        }
      >
        <HiOutlineClipboardCheck />
        Approvals
      </NavLink>
    </li>
  </ul>
);

export default NavMenuStudent;
