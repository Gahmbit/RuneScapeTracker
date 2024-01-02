import { useEffect, useState } from "react";
import "../styles/AccountDefault.css";
import { Account } from "../types/Account.tsx";
import AccountProfile from "./AccountProfile.tsx";
import AccountAllSnaps from "./AccountAllSnaps.tsx";
import axios from "axios";

const AccountAllDefault = ({ rsn }: { rsn: string | undefined }) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [accountData, setAccountData] = useState<Account>();
    const [allSaves, setAllSaves] = useState<Array<Account> | undefined>(
        undefined
    );

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
        const loadAllSaves = async () => {
            axios
                .get(
                    `https://runescape-tracker-api.onrender.com/account/${rsn}/all`
                )
                .then((res) => {
                    setAllSaves(res.data);
                })
                .catch((err) => {
                    setAllSaves(err.response.data);
                });
        };
        loadaccountData();
        loadAllSaves();
    }, [rsn]);

    return (
        <div className="account-default">
            {accountData && !loading ? (
                <>
                    <AccountProfile accountData={accountData} />
                    <AccountAllSnaps allSaves={allSaves} />
                </>
            ) : (
                <p>LOADING</p>
            )}
        </div>
    );
};

export default AccountAllDefault;
