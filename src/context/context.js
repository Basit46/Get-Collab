import React, { createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, updateDoc } from "firebase/firestore";

export const ourContext = createContext();

const colRef = collection(db, "partners");

export const OurProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [partners, setPartners] = useState([]);
  const [viewPartners, setViewPartners] = useState([]);
  const [profileView, setProfileView] = useState(null);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const returnedUserDetails = localStorage.getItem("userDetails")
    ? JSON.parse(localStorage.getItem("userDetails"))
    : "";
  const [userDetails, setUserDetails] = useState(returnedUserDetails);
  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
  }, [userDetails]);

  const [user, setUser] = useState([]);
  useEffect(() => {
    setUser(partners.filter((partner) => partner.userId === userDetails.uid));
  }, [partners, userDetails]);

  useEffect(() => {
    setLoading(true);
    getDocs(colRef).then((snapshot) => {
      setPartners(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setViewPartners(partners);
  }, [partners]);

  const filterByFe = () => {
    setViewPartners(
      partners.filter((partner) => partner.career === "Frontend Developer")
    );
  };
  const filterByBe = () => {
    setViewPartners(
      partners.filter((partner) => partner.career === "Backend Developer")
    );
  };
  const filterByUi = () => {
    setViewPartners(
      partners.filter((partner) => partner.career === "UI Designer")
    );
  };
  const filterByName = (inputedName) => {
    setViewPartners(
      partners.filter((partner) =>
        partner.name.toLowerCase().includes(inputedName.toLowerCase())
      )
    );
  };

  const updateStatus = (id, personalId) => {
    const currentStatus = partners.filter(
      (partner) => partner.userId === personalId
    );
    const docRef = doc(db, "partners", id);
    updateDoc(docRef, {
      status: !currentStatus[0].status,
    }).then(() => {
      console.log(id);
      console.log(currentStatus);
      alert("Done, Refresh page to view new status");
    });
  };

  return (
    <ourContext.Provider
      value={{
        showNav,
        setShowNav,
        partners,
        viewPartners,
        show,
        setShow,
        user,
        setUser,
        loading,
        setLoading,
        profileView,
        setProfileView,
        filterByFe,
        filterByBe,
        filterByUi,
        filterByName,
        userDetails,
        setUserDetails,
        updateStatus,
      }}
    >
      {children}
    </ourContext.Provider>
  );
};
