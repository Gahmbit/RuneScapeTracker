import { FormEvent, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { User } from "./models/User";

type FormData = {
  rsn: { value: string };
};

function App() {
  // const [count, setCount] = useState(0);

  const [loading, setLoading] = useState<boolean>(false);
  const [userData, setuUserData] = useState<User>();

  const handleOnSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const target = e.target as typeof e.target & FormData;
    const rsn = target.rsn.value;

    const response = await fetch(
      `https://runescape-tracker-api.onrender.com/account/${rsn}/`
    );
    const data = await response.json();
    setuUserData(data);
    window.history.pushState("", "", `/?rsn=${rsn}`);
    setLoading(false);
  };

  return (
    <>
      {/* <div>
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
            <h1>Vite + React</h1> */}
      {/* <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div> */}
      <p className="read-the-docs">Enter your Runescape username</p>
      <form onSubmit={handleOnSubmit}>
        <input name="rsn" />
        <button type="submit">click me</button>
      </form>
      {loading && <p>LOADING</p>}
      {userData && (
        <div>
          <p>{userData.name}</p>
          <p>
            {userData.activities.map((activity) => (
              <ul>
                <li>{activity.date}</li>
                <li>{activity.details}</li>
                <li>{activity.text}</li>
              </ul>
            ))}
          </p>
          <p></p>
          {/* _id: string;
                    activities: { date: string; details: string; text: string }[];
                    combatLevel: number;
                    name: string;
                    rank: number;
                    skills: { [key: number]: { level: number; xp: number; rank: number } };
                    timestamp: string;
                    totalExp: number;
                    totalSkill: number; */}
        </div>
      )}
    </>
  );
}

export default App;
