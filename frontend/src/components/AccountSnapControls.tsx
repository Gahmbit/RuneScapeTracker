import { Account } from "../types/Account";
import "../styles/AccountSnaps.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
    accountData: Account;
};

const AccountSnaps = ({ accountData }: Props) => {
    const navigate = useNavigate();
    const [saveReturn, setSaveReturn] = useState<string>("");
    const [saving, setSaving] = useState<boolean>(false);

    const loadAllPage = () => {
        const rsn = accountData.name;
        const path = rsn?.replace(" ", "%20").toLowerCase();
        navigate(`/${path}/all`);
    };

    const saveData = async () => {
        setSaving(true);
        setSaveReturn("Trying to save...");
        axios
            .post(
                `https://runescape-tracker-api.onrender.com/account/${accountData.name}`
            )
            .then((res) => {
                console.log(res.data);
                setSaveReturn(`${res.data}`);
            })
            .catch((err) => {
                console.log(err);
                setSaveReturn(`${err?.response.data}`);
            });
    };

    return (
        <div className="account-snaps">
            {!accountData._id && (
                <div className="account-snaps_title">Save / Load Data</div>
            )}
            {!accountData._id && (
                <button className="snap-button" onClick={() => saveData()}>
                    Save Current Data
                </button>
            )}
            {saving && <p className="save-return">{saveReturn}</p>}
            <button className="snap-button" onClick={() => loadAllPage()}>
                View All Data
            </button>
        </div>
    );
};

export default AccountSnaps;
