import { useEffect, useState } from "react";
import "../styles/AccountDefault.css";

const AccountDefault = ({ rsn }: { rsn: string | undefined }) => {

  const [userData, setUserData] = useState("Loading...");

  async function getUserData(){
    const response = await fetch(`https://runescape-tracker-api.onrender.com/account/${rsn}`);
    const rsData = await response?.json();
    setUserData(rsData);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="accountDefault">
      <h1>{rsn}'s Stats</h1>
      <p>{JSON.stringify(userData)}</p>
    </div>
  );
};

export default AccountDefault;
