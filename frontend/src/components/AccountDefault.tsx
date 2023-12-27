import { useEffect, useState } from "react";
import "../styles/AccountDefault.css";
import { User } from "../models/User";
import AccountProfile from "./AccountProfile.tsx";

const AccountDefault = ({ rsn }: { rsn: string | undefined }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [userData, setuUserData] = useState<User>();

    useEffect(() => {
        const loadUserData = async () => {
            setLoading(true);

            const response = await fetch(
                `https://runescape-tracker-api.onrender.com/account/${rsn}`
            );
            const data = await response.json();
            setuUserData(data)
            setLoading(false);
        };
        loadUserData();
    }, [rsn]);

    return (
        <div>
            {userData && !loading ? (
                <>
                    {/* <p>
                        {userData.activities.map((activity) => (
                            <ul>
                            <li>{activity.date}</li>
                            <li>{activity.details}</li>
                            <li>{activity.text}</li>
                            </ul>
                            ))}
                     </p> */}
                    <AccountProfile userData={userData} />
                </>
            ) : (
                <p>LOADING</p>
            )}
        </div>
    );
};

export default AccountDefault;
