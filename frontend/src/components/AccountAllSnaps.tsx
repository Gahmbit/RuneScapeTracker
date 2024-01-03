import "../styles/AccountAllSnaps.css";
import icons from "../assets";
import { Account } from "../types/Account.tsx";
import { useNavigate } from "react-router-dom";

type Props = {
    allSaves: Array<Account> | undefined;
};

const AccountStats = ({ allSaves }: Props) => {
    const navigate = useNavigate();

    const goTo = (id: string, name: string) => {
        navigate(`../${name.toLowerCase()}/${id}`);
    };

    return (
        <div className="account-stats">
            <div className="account-stats__title">Saved Stats</div>
            <label>Ordered by Date</label>

            <div className="account-stats__list">
                {allSaves?.map((save) => {
                    return (
                        <div className="save-snap" key={save?._id}>
                            <button
                                className="save-snap_button"
                                onClick={() =>
                                    goTo(save?._id, save?.name.toLowerCase())
                                }
                            >
                                <div className="save-snap_details">
                                    <img
                                        src={icons["skillIcon"]}
                                        alt="Total Skill"
                                    />
                                    <h2>{save.totalSkill}</h2>
                                    <img
                                        src={icons["killIcon"]}
                                        alt="Combat Level"
                                    />
                                    <h2>{save.combatLevel}</h2>
                                    <img
                                        src={icons["highScoreIcon"]}
                                        alt="Rank"
                                    />
                                    <h2>{save.rank.toLocaleString()}</h2>
                                    <img
                                        src={icons["achievementIcon"]}
                                        alt="Total XP"
                                    />
                                    <h2>{save.totalExp.toLocaleString()}</h2>
                                </div>
                                <h1>
                                    {new Date(save?.timestamp).toUTCString()}
                                </h1>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AccountStats;
