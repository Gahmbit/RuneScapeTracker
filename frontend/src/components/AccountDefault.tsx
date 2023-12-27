import { useEffect, useState } from "react";
import "../styles/AccountDefault.css";

const AccountDefault = ({ rsn }: { rsn: string | undefined }) => {

  const [userData, setUserData] = useState(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  async function getUserData(){
    const response = await fetch(`https://runescape-tracker-api.onrender.com/account/${rsn}`);
    const rsData = await response?.json();
    setLoading(false);
    setUserData(rsData);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div className="accountDefault">
      {isLoading && <h1>Loading {rsn}'s Stats...</h1>}
      {userData && <p>{JSON.stringify(userData)}</p>}
    </div>
  );
};

export default AccountDefault;
