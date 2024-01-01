import { Account } from "../types/Account";
import "../styles/AccountSnaps.css";
import axios from "axios";
import { useState } from "react";

type Props = {
    accountData: Account;
};

const AccountSnaps = ({ accountData }: Props) => {
    const [saveReturn, setSaveReturn] = useState("");

    const saveData = async () => {
        setSaveReturn("Trying to save...");
        axios
            .post(
                `https://runescape-tracker-api.onrender.com/account/${accountData.name}`
            )
            .then((res) => {
                setSaveReturn(res.data);
            })
            .catch((err) => {
                setSaveReturn(err.response.data);
            });
    };

    return (
        <div className="account-snaps">
            <div className="account-snaps_title">Save / Load Data</div>
            <button onClick={saveData}>Save Current Data</button>
            <p className="save-return">{saveReturn}</p>
            <button>View All Data</button>
        </div>
    );
};

export default AccountSnaps;
