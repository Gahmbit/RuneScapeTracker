import { Account } from "../types/Account";
import "../styles/AccountStats.css";
import icons from "../assets";
import "../styles/AccountAdventurersLog.css";

type Props = {
    accountData: Account;
};

// enum LogType {
//     Skill = "skill",
//     Quest = "quest",
//     Kill = "kill",
//     Drop = "drop",
//     Default = "default",
// }

const AccountAdventurersLog = ({ accountData }: Props) => {
    // const skills = Object.keys(accountData.skills).map((key) => {
    //     return {
    //         skillName: key,
    //         maxSkillLevel: [
    //             "Dungeoneering",
    //             "Invention",
    //             "Slayer",
    //             "Farming",
    //             "Herblore",
    //             "Archaeology",
    //             "Necromancy",
    //         ].includes(key)
    //             ? 120
    //             : 99,
    //         ...accountData.skills[key as Skills],
    //     };
    // });
    // .sort(sortFunctions[selectSort]);

    const activities = accountData.activities;
    console.log(activities);

    return (
        <div className="account-activities">
            <div className="account-activities__title">Activity Log</div>
            <div className="account-activities__list">
                {activities.map((skill) => {
                    return (
                        <div className="account-activities__stat">
                            <img
                                src={icons[skill.type + "Icon"]}
                                className="account-activities__stat__icon"
                            />
                            <div className="account-activities__stat__info">
                                <div className="account-activities__stat__info__name">
                                    {skill.text}
                                </div>
                                <div className="account-activities__stat__info__rank-xp">
                                    <div>{skill.details}</div>
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
