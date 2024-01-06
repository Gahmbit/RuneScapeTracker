import { useEffect, useState } from "react";
import "../styles/AccountDefault.css";
import { Account } from "../types/Account.tsx";
import AccountProfileSnaps from "./AccountProfileSnaps.tsx";
import AccountStats from "./AccountStats.tsx";
import AccountAdventurersLog from "./AccountAdventurersLog.tsx";

const AccountSaveDefault = ({
    rsn,
    save,
}: {
    rsn: string | undefined;
    save: string | undefined;
}) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [accountData, setAccountData] = useState<Account>();

    // need to make backend route for individual saves
    useEffect(() => {
        const loadaccountData = async () => {
            setLoading(true);
            const response = await fetch(
                `https://runescape-tracker-api.onrender.com/account/${rsn}/${save}`
            );
            const data = await response.json();
            setAccountData(data);
            setLoading(false);
        };
        loadaccountData();
    }, [rsn, save]);

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

export default AccountSaveDefault;
