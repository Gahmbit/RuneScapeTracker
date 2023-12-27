// import React from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import "../styles/LandingPage.css";

const LandingPage = () => {
  const loadAccountPage = () => {
    const rsn = (document.querySelector("#rsn") as HTMLInputElement | null)
      ?.value;
    window.history.pushState("", "", `/${rsn}`);
    window.history.go();
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
            <input
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
