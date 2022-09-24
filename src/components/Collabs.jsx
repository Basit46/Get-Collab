import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import Partners from "./Partners";
import { ourContext } from "../context/context";

const Collabs = () => {
  const {
    user,
    show,
    setShow,
    profileView,
    filterByFe,
    filterByBe,
    filterByUi,
    filterByName,
  } = useContext(ourContext);

  const navigate = useNavigate();

  const handleShow = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="h-full bg-blue-100 overflow-x-hidden overflow-y-scroll">
      <div className="pt-20 px-2 pb-2 sm:pt-7">
        <div className="w-full flex items-center sm:mb-5">
          <input
            onChange={(e) => filterByName(e.target.value)}
            className="w-full sm:w-[60%] border-b-[2px] bg-transparent border-blue-300 outline-none block p-1 "
            type="text"
            placeholder="Search For Users with Name"
          />
          <div className="w-[40%] hidden sm:flex justify-around items-center">
            filter By:
            <button
              onClick={filterByFe}
              className="border-blue-500 border-2 p-1 font-semibold active:p-0.5"
            >
              Frontend
            </button>
            <button
              onClick={filterByBe}
              className="border-blue-500 border-2 p-1 font-semibold active:p-0.5"
            >
              Backend
            </button>
            <button
              onClick={filterByUi}
              className="border-blue-500 border-2 p-1 font-semibold active:p-0.5"
            >
              Designers
            </button>
          </div>
        </div>

        <div className="hidden sm:flex justify-between items-center">
          <div>
            <h1 className="font-bold text-[2rem]">
              Howdy, {user.length === 0 ? "null" : user[0].name}{" "}
              <span role="img" aria-label="hand">
                🙌
              </span>
            </h1>
            <p>Search for Collab Partners here.</p>
          </div>
          <div className="bg-purple-600 text-white p-1">
            <button onClick={() => navigate("/profile")}>GO TO PROFILE</button>
          </div>
        </div>
      </div>

      <div className="relative border-black sm:border-t-2 h-full">
        <div className="w-[100%]">
          <Partners />
        </div>
        <FaPlus
          onClick={handleShow}
          className={`absolute top-5 r right-5 z-10 bg-white p-1 rounded-full text-[3rem] duration-500 ease-linear ${
            show ? "-rotate-45" : "rotate-0"
          }`}
        />
        <div
          className={`absolute top-0 ${
            show ? "right-[0]" : "right-[-100%]"
          } w-[80%]  sm:w-[30%] bg-blue-100 duration-500 ease-linear h-full border-gray-600 border-l-2`}
        >
          <div className="relative bg-backg w-full h-[20%]">
            <div className="absolute left-[50%] bottom-[-30%] translate-x-[-50%] h-[150px] w-[150px] rounded-full grid place-items-center font-extrabold text-[5rem]  bg-white ">
              {profileView && profileView[0].name.slice(0, 1)}
            </div>
          </div>
          <h1 className="mt-[50px] text-center">
            {profileView && profileView[0].name}
          </h1>
          <p className="text-center">{profileView && profileView[0].career}</p>

          <div className="flex justify-around items-center mt-2 mb-2">
            {profileView ? (
              profileView[0].status ? (
                <a
                  className="text-center bg-green-700 p-1 text-white font-bold"
                  href={`mailto:${profileView && profileView[0].email}`}
                >
                  CONNECT
                </a>
              ) : (
                ""
              )
            ) : (
              ""
            )}

            <div className="w-fit">
              <a
                className="semibold p-2 bg-purple-600 text-white font-bold border-black border-[0.5] uppercase"
                href={profileView && profileView[0]}
                rel="noreferrer"
                target="_blank"
              >
                GITHUB
              </a>
            </div>
          </div>

          <div className="bg-gray-300 w-full h-full p-[2px] mt-1">
            <p className="text-center break-words">
              {profileView && profileView[0].bio}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collabs;
