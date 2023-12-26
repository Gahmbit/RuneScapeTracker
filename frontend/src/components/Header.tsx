import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        <span id="yellow">Runescape</span> Tracker
      </h1>
      <input name="rsn" placeholder="Enter your RuneScape Username" />
      <button type="submit">Search</button>
    </div>
  );
};

export default Header;
