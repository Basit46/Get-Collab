import React from "react";
import { Outlet } from "react-router-dom";

const CreateAccount = () => {
  return (
    <div className="w-full h-full flex justify-around overflow-y-scroll ">
      <Outlet />
      <div className="hidden sm:block sm:w-[40%] bg-purple-800 text-white p-[40px]">
        <h1 className="text-[2rem] font-bold mt-[100px]">
          Start your <br />
          journey with us
        </h1>
        <p className="text-[1rem]">Discover the world's best community</p>
      </div>
    </div>
  );
};

export default CreateAccount;
