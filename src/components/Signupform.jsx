import React, { useRef, useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ourContext } from "../context/context";

const Signupform = () => {
  const { setUserDetails } = useContext(ourContext);

  const [error, setError] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const navigate = useNavigate();

  const createUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        setUserDetails(cred.user);
        navigate("/signup/form");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="w-full sm:w-[60%] py-[60px] px-[30px] sm:px-[70px]">
      <h1 className="font-bold text-[2rem] mb-[4px]">Sign up</h1>
      <p className="mb-[20px]">
        Have an account?{" "}
        <span>
          <NavLink className="text-blue-500" to="/login">
            Sign In
          </NavLink>
        </span>{" "}
      </p>
      <label className="text-xl mb-2 font-extrabold" htmlFor="email">
        Email
      </label>
      <input
        ref={emailRef}
        type="email"
        id="email"
        className="border-[2px] border-blue-100 block rounded w-full p-1 mb-8"
      />
      <label className="text-xl mb-2 font-extrabold" htmlFor="pw">
        Password
      </label>
      <input
        ref={passwordRef}
        type="password"
        id="pw"
        className="border-[2px] border-blue-100 block rounded w-full p-1"
      />
      <button
        onClick={createUser}
        className="bg-purple-800 p-2 active:p-1 text-white font-semibold text-[1rem] rounded-lg block my-[30px]"
      >
        Create Account
      </button>
      {error ===
        "Firebase: Password should be at least 6 characters (auth/weak-password)." && (
        <h1 className="text-red-600 text-center">
          Password should be at least 6 characters
        </h1>
      )}
      {error === "Firebase: Error (auth/invalid-email)." && (
        <h1 className="text-red-600 text-center">Invalid Email.</h1>
      )}
    </div>
  );
};

export default Signupform;
