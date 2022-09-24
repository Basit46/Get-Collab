import React, { useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ourContext } from "../context/context";

const Login = () => {
  const navigate = useNavigate();

  const { setUserDetails } = useContext(ourContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignIn = () => {
    if (emailRef.current.value !== "" || passwordRef.current.value !== "") {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      signInWithEmailAndPassword(auth, email, password)
        .then((cred) => {
          setUserDetails(cred.user);
          navigate("/collabs");
        })
        .catch((err) => {
          alert(err.message.slice(10, -1));
        });
    } else {
      alert("Incorrect Values");
    }
  };
  return (
    <div className="w-full h-full flex">
      <div className="w-[100%] md:w-[60%] py-[60px] px-[30px] vsm:px-[70px]">
        <h1 className="text-[2rem] font-bold text-center mb-[20px]">
          Hello Again
        </h1>
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
          onClick={handleSignIn}
          className="w-full bg-purple-800 p-2 active:p-1 text-white font-semibold text-[1rem] rounded-lg block my-[30px]"
        >
          Login
        </button>

        <p className="text-center">
          Don't have an account{" "}
          <span>
            <NavLink className="text-blue-400 mt-[20px]" to="/signup">
              Sign Up
            </NavLink>
          </span>
        </p>
      </div>
      <div className="md:w-[40%] w-[0%] hidden md:flex items-center bg-purple-800 text-white p-[40px] ">
        <h1 className="backdrop-blur-sm bg-white  bg-opacity-50 p-9 rounded-[20px] w-full text-[1.5rem] font-bold">
          Build Your Team and <br /> Improve yourself with
          <br /> getCollab{" "}
        </h1>
      </div>
    </div>
  );
};

export default Login;
