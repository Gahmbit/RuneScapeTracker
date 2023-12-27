// import React from "react";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="landing">
        <div className="heading">
          <h1>
            <span id="yellow">RuneScape</span> Tracker
          </h1>
        </div>
        <div className="searching">
          <div className="inputs">
            <input name="rsn" placeholder="Enter your RuneScape Username" />
            <button type="submit">Search</button>
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
