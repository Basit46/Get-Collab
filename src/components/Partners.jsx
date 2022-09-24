import React, { useContext } from "react";
import { ourContext } from "../context/context.js";
import Partner from "./Partner.jsx";

const Partners = () => {
  const { viewPartners, loading } = useContext(ourContext);

  return (
    <div className="partners w-full p-2">
      {loading && <h1 className="text-[1.5rem]">Loading...</h1>}
      {viewPartners.map((partner) => (
        <Partner key={partner.id} partner={partner} />
      ))}
    </div>
  );
};

export default Partners;
