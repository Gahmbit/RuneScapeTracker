import { useEffect, useState } from "react";
import "../styles/AccountDefault.css";
import { Account } from "../models/Account.tsx";
import AccountProfile from "./AccountProfile.tsx";
import AccountStats from "./AccountStats.tsx";

const AccountDefault = ({ rsn }: { rsn: string | undefined }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [accountData, setAccountData] = useState<Account>();

    useEffect(() => {
        const loadaccountData = async () => {
            setLoading(true);
            const response = await fetch(
                `https://runescape-tracker-api.onrender.com/account/${rsn}`
            );
            const data = await response.json();
            setAccountData(data);
            setLoading(false);
        };
        loadaccountData();
    }, [rsn]);

    return (
        <div className="account-default">
            {accountData && !loading ? (
                <>
                    {/* <p>
                        {accountData.activities.map((activity) => (
                            <ul>
                            <li>{activity.date}</li>
                            <li>{activity.details}</li>
                            <li>{activity.text}</li>
                            </ul>
                            ))}
                     </p> */}
                    <AccountProfile accountData={accountData} />
                    <AccountStats accountData={accountData} />
                </>
            ) : (
                <p>LOADING</p>
            )}
        </div>
    );
};

export default AccountDefault;
