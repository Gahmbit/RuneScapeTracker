// import React from "react";
import Footer from "./components/Footer";
import "./styles/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <div className="header">
          <h1>
            <span id="yellow">RuneScape</span> Tracker
          </h1>
        </div>
        <div className="searching">
          <form>
            <div className="inputs">
              <input name="rsn" placeholder="Enter your RuneScape Username" />
              <button type="submit">Search</button>
            </div>
          </form>
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
