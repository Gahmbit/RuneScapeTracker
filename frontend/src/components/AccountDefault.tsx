import { useEffect, useState } from "react";
import "../styles/AccountDefault.css";
import { Account } from "../types/Account.tsx";
import AccountProfileSnaps from "./AccountProfileSnaps.tsx";
import AccountStats from "./AccountStats.tsx";
import AccountAdventurersLog from "./AccountAdventurersLog.tsx";

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
                    <AccountProfileSnaps accountData={accountData} />
                    <AccountStats accountData={accountData} />
                    <AccountAdventurersLog accountData={accountData} />
                </>
            ) : (
                <p>LOADING</p>
            )}
        </div>
    );
};

export default AccountDefault;
