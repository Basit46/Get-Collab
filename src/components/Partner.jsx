import React, { useContext } from "react";
import { ourContext } from "../context/context";

const Partner = ({ partner }) => {
  const { partners, setShow, setProfileView } = useContext(ourContext);

  const handleView = () => {
    setProfileView(partners.filter((pt) => pt.id === partner.id));
    setShow(true);
  };
  return (
    <div>
      <div
        className={`partner relative ${
          partner.career === "Frontend Developer" && "bg-[tomato]"
        }  ${partner.career === "Backend Developer" && "bg-[seagreen]"}  ${
          partner.career === "UI Designer" && "bg-[lightblue]"
        } h-[170px] rounded-lg p-1`}
      >
        <div className="flex items-center">
          <div className="bg-white w-[90px] h-[90px] rounded-full grid place-items-center mr-3 font-bold text-[3rem]">
            {partner.name.slice(0, 1)}
          </div>
          <div>
            <h1 className="font-bold text-[1.3rem] mb-1">{partner.name}</h1>
            <p className="text-[1rem]">{partner.career}</p>
            <p className="font-semibold">{partner.location}</p>
          </div>
        </div>
        <div
          className={`absolute left-1 bottom-1 bg-white ${
            partner.status ? "text-green-800" : "text-red-700"
          } font-bold p-1`}
        >
          {partner.status ? "AVAILABLE" : "OCCUPIED"}
        </div>
        <div className="absolute right-1 bottom-1">
          <button
            onClick={handleView}
            className="bg-black text-white font-bold mr-1 p-1"
          >
            VIEW PROFILE
          </button>
          <a
            className="bg-red-700 text-white font-bold p-1"
            href={`mailto:${partner.email}`}
          >
            CONNECT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Partner;
