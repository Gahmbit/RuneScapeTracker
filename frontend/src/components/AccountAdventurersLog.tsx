import { Account } from "../types/Account";
import "../styles/AccountStats.css";
import icons from "../assets";
import "../styles/AccountAdventurersLog.css";

type Props = {
    accountData: Account;
};

const AccountAdventurersLog = ({ accountData }: Props) => {
    const activities = accountData.activities;

    return (
        <div className="account-activities">
            <div className="account-activities__title">Adventurer's Log</div>
            <div className="account-activities__list">
                {activities.map((activity) => {
                    return (
                        <div
                            key={activity.details + activity.date}
                            className="account-activities__stat"
                        >
                            <img
                                src={icons[activity.type + "Icon"]}
                                className="account-activities__stat__icon"
                            />
                            <div className="account-activities__stat__date">
                                {activity.date.split(" ")[0]}
                            </div>
                            <div className="account-activities__stat__info">
                                <div className="account-activities__stat__info__name">
                                    {activity.text}
                                </div>
                                <div className="account-activities__stat__info__details">
                                    <div>{activity.details}</div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AccountAdventurersLog;
