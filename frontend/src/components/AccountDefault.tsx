import { useEffect, useState } from "react";
import "../styles/AccountDefault.css";
import { Account } from "../types/Account.tsx";
import AccountProfileSnaps from "./AccountProfileSnaps.tsx";
import AccountStats from "./AccountStats.tsx";
import AccountAdventurersLog from "./AccountAdventurersLog.tsx";
import axios from "axios";

const AccountDefault = ({ rsn }: { rsn: string | undefined }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [accountData, setAccountData] = useState<Account>();

    useEffect(() => {
        const loadaccountData = async () => {
            axios
                .get(
                    `https://runescape-tracker-api.onrender.com/account/${rsn}`
                    // `http://localhost:3000/account/${rsn}`
                )
                .then((res) => {
                    setAccountData(res.data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                });

            // const response = await fetch(
            //     `https://runescape-tracker-api.onrender.com/account/${rsn}`
            //     // `http://localhost:3000/account/${rsn}`
            // );
            // const data = await response.json();
            // setAccountData(data);
            // setLoading(false);
        };
        loadaccountData();
    }, [rsn]);

    return (
        <div className="account-default">
            {accountData && !loading ? (
                <>
                    <AccountProfileSnaps accountData={accountData} />
                    <AccountStats accountData={accountData} />
                    <AccountAdventurersLog accountData={accountData} />
                </>
            ) : (
                <p>LOADING...</p>
            )}
        </div>
    );
};

export default AccountDefault;
