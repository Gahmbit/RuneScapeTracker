import "../styles/Header.css";

const Header = () => {
  const loadAccountPage = () => {
    const rsn = document.querySelector("#rsn").value;
    window.history.pushState("", "", `/${rsn}`);
    window.history.go();
  };

  return (
    <div className="header">
      <a href="/">
        <span id="yellow">Runescape</span> Tracker
      </a>
      <input id="rsn" name="rsn" placeholder="Enter your RuneScape Username" />
      <button type="button" onClick={loadAccountPage}>
        Search
      </button>
    </div>
  );
};

export default Header;
