import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <span id="yellow">Runescape</span> Tracker
      </a>
      <input name="rsn" placeholder="Enter your RuneScape Username" />
      <button type="submit">Search</button>
    </div>
  );
};

export default Header;
