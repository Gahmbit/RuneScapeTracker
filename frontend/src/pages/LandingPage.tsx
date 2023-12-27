// import React from "react";
import { useRef } from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";


const LandingPage = () => {

  const navigate = useNavigate();
  const searchBar = useRef(null);

  const loadAccountPage = () => {
    const rsn = searchBar.current?.value;
    const path = rsn.replace(" ", "%20");
    navigate(path);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="landing">
        <div className="version">
          <h3>Version 1.0.0</h3>
        </div>
        <div className="heading">
          <h1>
            <span id="yellow">RuneScape</span> Tracker
          </h1>
        </div>
        <div className="searching">
          <div className="inputs">
            <input ref={searchBar}
              id="rsn"
              name="rsn"
              placeholder="Enter your RuneScape Username"
            />
            <button type="button" onClick={loadAccountPage}>
              Search
            </button>
          </div>
          <div className="note">
            <h2>*Only works for RuneScape 3 - sorry nostalgists!</h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
