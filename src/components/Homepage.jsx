import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-full bg-purple-100 flex md:items-center font-Poppins overflow-y-scroll md:overflow-x-hidden">
      <div className="h-fit w-full flex flex-col-reverse md:flex-row items-center md:justify-around">
        <div className="w-[340px] vsm:w-[380px] h-[480px] my-6 md:my-0 rounded-t-full bg-homepic bg-cover"></div>
        <div className="relative">
          <h1 className="border-purple-500 border-y-4 py-5 mb-2 pt-10 md:pt-0 font-extrabold text-[2.5rem] vsm:text-[2.7rem] text-center">
            GetCollab Is A <br /> Growing Website <br /> Made For <br /> People
            in Tech
          </h1>
          <p className="text-center text-gray-700">
            With GetCollab you can meet and partner with people all over the
            world.
          </p>
          <p className="text-center text-red-600">
            وحشیانه‌ای حقوق بشر منتهی به اعمال از آنجا عدم شناسائی و تحقیر
          </p>
          <button
            onClick={() => navigate("/signup")}
            className="joinBtn absolute left-[50%] translate-x-[-50%] mt-5  border-[#9ea894] border-4 p-2 text-[#9ea894] text-[1.2rem] "
          >
            JOIN US TODAY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
