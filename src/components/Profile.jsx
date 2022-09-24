import React, { useContext } from "react";
import { ourContext } from "../context/context";
import { useNavigate } from "react-router";

const Profile = () => {
  const { user, updateStatus } = useContext(ourContext);

  const navigate = useNavigate();

  return (
    <div className="h-full px-6 pt-16 sm:pt-0 bg-purple-100 overflow-y-scroll">
      <h1 className="text-[1.5rem] font-semibold mb-3">User Profile</h1>
      <div className="relative h-full w-full rounded-lg bg-white">
        <div className="relative bg-backg w-full h-[30%]">
          <div className="absolute bottom-5 right-5 flex space-x-2">
            <button
              onClick={() => {
                updateStatus(user[0].id, user[0].userId);
              }}
              className="bg-black text-white p-1"
            >
              SET STATUS
            </button>
            <p
              className="
                 bg-green-600 p-1 text-white"
            >
              {user.length === 0
                ? "null"
                : user[0].status
                ? user[0].status
                  ? "AVAILABLE"
                  : "OCUPPIED"
                : "OCUPPIED"}
            </p>
          </div>
          <div className="hidden lg:grid absolute bottom-[-50%] left-10 rounded-full bg-gray-300 h-[200px] w-[200px] place-items-center font-extrabold text-purple-800 text-[8rem]">
            {user.length === 0 ? "null" : user[0].name.slice(0, 1)}
          </div>
        </div>
        <div className="block sm:flex justify-around items-center sm:pl-[120px]">
          <div>
            <h1 className="font-extrabold text-center sm:text-left text-[2rem]">
              {user.length === 0 ? "null" : user[0].name}
            </h1>
            <p className="font-semibold ml-2 text-center sm:text-left text-[1rem]">
              {user.length === 0 ? "null" : user[0].career}
            </p>
          </div>
          <div
            onClick={() => navigate("/signup/form")}
            className="p-2 ml-3 sm:ml-0 w-fit sm:rounded-xl bg-blue-200 border-black border-[0.5]"
          >
            CREATE NEW PROFILE
          </div>
        </div>

        <div className="bg-gray-100 m-4 p-4 mt-10 rounded-lg">
          <h1 className="text-[1.3rem] mb-3">Profile Bio</h1>
          <p className="pb-[18px] border-gray-400 border-b-2">
            {user.length === 0 ? "null" : user[0].bio}
          </p>
          <div className="pt-[18px]">
            <p>
              Name: <span>{user.length === 0 ? "null" : user[0].name}</span>
            </p>
            <p>
              Career: <span>{user.length === 0 ? "null" : user[0].career}</span>
            </p>
            <p>
              Email: <span>{user.length === 0 ? "null" : user[0].email}</span>
            </p>
            <p>
              Location:{" "}
              <span>{user.length === 0 ? "null" : user[0].location}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
