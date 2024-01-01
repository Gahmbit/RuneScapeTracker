import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { useRef } from "react";
import Button from "./Button";

const Header = () => {
    const navigate = useNavigate();
    const searchBar = useRef<HTMLInputElement>(null);

    const loadAccountPage = () => {
        const rsn = searchBar?.current?.value;
        const path = rsn?.replace(" ", "%20");
        navigate(`../${path}`);
    };

    return (
        <form onSubmit={loadAccountPage}>
            <div className="header">
                <a href="/">
                    <span id="yellow">Runescape</span> Tracker
                </a>
                <input
                    ref={searchBar}
                    id="rsn"
                    name="rsn"
                    placeholder="Enter your RuneScape Username"
                />
                <Button onClick={loadAccountPage}>Search</Button>
            </div>
        </form>
    );
};

export default Header;
