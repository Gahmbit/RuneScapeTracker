import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useRef } from "react";

const Header = () => {
  const navigate = useNavigate();
  const searchBar = useRef<HTMLInputElement>(null);

  const loadAccountPage = () => {
    const rsn = searchBar?.current?.value;
    const path = rsn?.replace(" ", "%20");
    navigate(`../${path}`);
  };

  return (
    <div className="header">
      <a href="/">
        <span id="yellow">Runescape</span> Tracker
      </a>
      <input ref={searchBar}id="rsn" name="rsn" placeholder="Enter your RuneScape Username" />
      <button type="button" onClick={loadAccountPage}>
        Search
      </button>
    </div>
  );
};

export default Header;
