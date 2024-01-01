import AccountProfile from "./AccountProfile";
import AccountSnaps from "./AccountSnaps";
import { Account } from "../types/Account";
import "../styles/AccountProfileSnaps.css";

type Props = {
    accountData: Account;
};

const AccountProfileSnaps = ({ accountData }: Props) => {
    return (
        <div className="account-profile-snaps">
            <AccountProfile accountData={accountData} />
            <AccountSnaps accountData={accountData} />
        </div>
    );
};

export default AccountProfileSnaps;
