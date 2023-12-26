// import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing">
      <div className="header">
        <h1>
          <span id="yellow">RuneScape</span> Tracker
        </h1>
      </div>
      <div className="searching">
        <form>
          <input name="rsn" placeholder="Enter your RuneScape Username" />
          <button type="submit">Search</button>
        </form>
      </div>
      <h2>*Only works for RuneScape 3 - sorry nostalgists!</h2>
    </div>
  );
};

export default LandingPage;
