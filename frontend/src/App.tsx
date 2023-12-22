import { FormEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { User } from "./models/User";

function App() {
    const [count, setCount] = useState(0);

    const [loading, setLoading] = useState<boolean>(false);
    const [userData, setuUserData] = useState<User>();

    const handleOnSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const target = e.target as typeof e.target & {
            rsn: { value: string };
        };
        const rsn = target.rsn.value;

        const response = await fetch(
            `http://localhost:5000/account/${rsn}/all`
        );
        const data = await response.json();
        setuUserData(data[0]);
        window.history.pushState('', '', `/?rsn=${rsn}`);
        setLoading(false);
    };

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            <form onSubmit={handleOnSubmit}>
                <input name="rsn" />
                <button type="submit">click me</button>
            </form>
            {loading && <p>LOADING</p>}
            {userData && (
                <div>
                    <p>{userData.name}</p>
                </div>
            )}
        </>
    );
}

export default App;
