import { Account } from "../types/Account";
import "../styles/AccountSnaps.css";

type Props = {
    accountData: Account;
};

const AccountSnaps = ({ accountData }: Props) => {
    return (
        <div className="account-snaps">
            <div className="account-snaps_title">Save / Load Data</div>
            <button>Save Current Data</button>
            <button>View All Data</button>
        </div>
    );
};

export default AccountSnaps;
