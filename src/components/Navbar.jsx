import React, { useContext } from "react";
import {
  FaUserAlt,
  FaPlus,
  FaArrowRight,
  FaArrowLeft,
  FaFolder,
  FaHome,
  FaUserFriends,
} from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { ourContext } from "../context/context";

const Navbar = () => {
  const navigate = useNavigate();

  const { setUserDetails, showNav, setShowNav } = useContext(ourContext);

  return (
    <nav
      className={`fixed ${
        showNav ? "left-0" : "-left-full"
      } z-[20] duration-500 md:static bg-purple-800 text-white h-screen w-[100%] vsm:w-[50%] md:w-[20%]`}
    >
      <h1 className="font-Poppins font-extrabold mb-12 m-3 text-[2rem] text-right md:text-start">
        getCollab
      </h1>
      <div onClick={() => setShowNav(!showNav)}>
        <NavLink className="flex items-center" to="/" end>
          <FaHome />
          <span> Homepage</span>
        </NavLink>
        <NavLink className="flex items-center" to="/collabs">
          <FaUserFriends />
          Collabs
        </NavLink>
        <NavLink className="flex items-center" to="/projects">
          <FaFolder />
          Projects
        </NavLink>
        <NavLink className="flex items-center" to="/profile">
          <FaUserAlt />
          Profile
        </NavLink>
        <NavLink className="flex items-center" to="/signup">
          <FaPlus />
          Create Account
        </NavLink>
        <NavLink className="flex items-center" to="/login">
          <FaArrowRight />
          Login
        </NavLink>
        <li
          className="flex items-center list-none cursor-pointer"
          onClick={() => {
            signOut(auth).then(() => {
              setUserDetails("");
              navigate("/");
            });
          }}
        >
          <FaArrowLeft />
          LogOut
        </li>
      </div>
    </nav>
  );
};

export default Navbar;
