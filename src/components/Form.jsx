import React, { useRef, useState, useContext } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ourContext } from "../context/context";
import { useNavigate } from "react-router";

const Form = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { userDetails } = useContext(ourContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const locationRef = useRef();
  const linkRef = useRef();
  const careerRef = useRef();
  const bioRef = useRef();

  const colRef = collection(db, "partners");

  const handleClick = (e) => {
    e.preventDefault();
    if (linkRef.current.value.indexOf("https://") <= -1) {
      alert("Link must contain https://");
      return;
    }
    if (
      bioRef.current.value === "" ||
      careerRef.current.value === "" ||
      emailRef.current.value === "" ||
      linkRef.current.value.indexOf("https://") === -1 ||
      locationRef.current.value === "" ||
      nameRef.current.value === ""
    ) {
      setError("Error encoutered");
    } else {
      addDoc(colRef, {
        bio: bioRef.current.value,
        career: careerRef.current.value,
        email: emailRef.current.value,
        link: linkRef.current.value,
        location: locationRef.current.value,
        name: nameRef.current.value,
        status: true,
        userId: userDetails.uid,
      }).then(() => {
        setError("");
        navigate("/collabs");
      });
    }
  };

  return (
    <div className="form  md:w-[60%] py-[60px] px-[10px] md:px-[70px]">
      <form onSubmit={handleClick}>
        <label htmlFor="name">Name</label>
        <input ref={nameRef} type="text" id="name" placeholder="John Doe" />
        <label htmlFor="email">Email to be contacted on</label>
        <input
          ref={emailRef}
          type="email"
          id="email"
          placeholder="johndoe@gmail.com"
        />
        <label htmlFor="loc">location</label>
        <input
          ref={locationRef}
          type="text"
          id="loc"
          placeholder="Ogun, Nigeria"
        />
        <label htmlFor="glink">
          Github/Figma/Behance Link{" "}
          <span className="text-red-600">(Must includes https://)</span>
        </label>
        <input ref={linkRef} type="text" id="glink" />
        <label htmlFor="level">What Are You?</label>
        <select
          ref={careerRef}
          className="bg-purple-800 text-white w-full mb-[20px]"
        >
          <option value="Frontend Developer">Frontend Developer</option>
          <option value="Backend Developer">Backend Developer</option>
          <option value="UI Designer">UI Designer</option>
        </select>
        <label htmlFor="note">
          Add a a short description of what you do or your stack
        </label>
        <textarea
          ref={bioRef}
          className="border-[lightblue] border-2 w-full h-[100px]"
          id="note"
        ></textarea>
        <button className="bg-purple-800 p-2 text-white font-semibold text-[1rem] rounded-lg">
          CREATE PROFILE
        </button>
        {error !== "" && (
          <h1 className="text-red-600 text-center">Enter Appropriate Values</h1>
        )}
      </form>
    </div>
  );
};

export default Form;
