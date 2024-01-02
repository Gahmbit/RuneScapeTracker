import "../styles/AccountStats.css";
import icons from "../assets";
import { Account } from "../types/Account.tsx";

type Props = {
    allSaves: Array<Account> | undefined;
};

const AccountStats = ({ allSaves }: Props) => {
    return (
        <div className="account-stats">
            <div className="account-stats__title">Saved Stats</div>
            <label>Ordered by Date</label>

            <div className="account-stats__list">
                {allSaves?.map((save) => {
                    return (
                        <div className="save-snap" key={save?.timestamp}>
                            <h1>{save?.timestamp}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AccountStats;
