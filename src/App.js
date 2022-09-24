import React, { useContext } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import Profile from "./components/Profile";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import Projects from "./components/Projects";
import Signupform from "./components/Signupform";
import Form from "./components/Form";
import Collabs from "./components/Collabs";
import RequireAuth from "./auth/RequireAuth";
import { FaTimes, FaBars } from "react-icons/fa";
import { ourContext } from "./context/context";

function App() {
  const { showNav, setShowNav } = useContext(ourContext);
  return (
    <div className="App relative font-Poppins flex h-screen overflow-hidden">
      <div className="fixed top-3 left-3 z-30 w-fit h-fit md:hidden">
        {!showNav && (
          <FaBars
            onClick={() => setShowNav(true)}
            className="absolute w-[2.5rem] h-[2.5rem] text-purple-800"
          />
        )}
        {showNav && (
          <FaTimes
            onClick={() => setShowNav(false)}
            className="absolute w-[2.5rem] h-[2.5rem] text-red-700"
          />
        )}
      </div>
      <Navbar />
      <div className="w-[100%] md:w-[80%]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="collabs"
            element={
              <RequireAuth>
                <Collabs />
              </RequireAuth>
            }
          />
          <Route
            path="projects"
            element={
              <RequireAuth>
                <Projects />
              </RequireAuth>
            }
          />
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="signup" element={<CreateAccount />}>
            <Route path="" element={<Signupform />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
