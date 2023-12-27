import { FormEvent, useState } from "react";
import "../styles/reset.css";
import LandingPage from "./LandingPage";
import Account from "./Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// type FormData = {
//   rsn: { value: string };
// };

function App() {
  // const [count, setCount] = useState(0);

  //   const [loading, setLoading] = useState<boolean>(false);
  //   const [userData, setuUserData] = useState<User>();

  //   const handleOnSubmit = async (e: FormEvent) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     const target = e.target as typeof e.target & FormData;
  //     const rsn = target.rsn.value;

  //     const response = await fetch(
  //       `https://runescape-tracker-api.onrender.com/account/${rsn}/`
  //     );
  //     const data = await response.json();
  //     setuUserData(data);
  //     window.history.pushState("", "", `/?rsn=${rsn}`);
  //     setLoading(false);
  //   };

  return (
    // <>
    //   <p className="read-the-docs">Enter your Runescape username</p>
    //   <form onSubmit={handleOnSubmit}>
    //     <input name="rsn" />
    //     <button type="submit">click me</button>
    //   </form>
    //   {loading && <p>LOADING</p>}
    //   {userData && (
    //     <div>
    //       <p>{userData.name}</p>
    //       <p>
    //         {userData.activities.map((activity) => (
    //           <ul>
    //             <li>{activity.date}</li>
    //             <li>{activity.details}</li>
    //             <li>{activity.text}</li>
    //           </ul>
    //         ))}
    //       </p>
    //       <p></p>
    //       {/* _id: string;
    //                 activities: { date: string; details: string; text: string }[];
    //                 combatLevel: number;
    //                 name: string;
    //                 rank: number;
    //                 skills: { [key: number]: { level: number; xp: number; rank: number } };
    //                 timestamp: string;
    //                 totalExp: number;
    //                 totalSkill: number; */}
    //     </div>
    //   )}
    // </>
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/:rsn" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
