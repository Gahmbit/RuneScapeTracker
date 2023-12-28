import { User } from "../models/User";
import "../styles/AccountProfile.css";

type Props = {
    userData: User;
};

const AccountProfile = ({ userData }: Props) => {
    return (
        <div className="account-profile">
            <div className="account-profile__picuture-image">
                <img
                    src={`http://secure.runescape.com/m=avatar-rs/${userData.name}/chat.png`}
                />
            </div>
            <div className="account-profile__rsn">{userData.name}</div>
            <div className="account-profile__total-skill">
                <div className="account-profile__total-skill__label">
                    Total Skill
                </div>
                <div className="account-profile__total-skill__value">
                    {userData.totalSkill.toLocaleString()}
                </div>
            </div>
            <div className="account-profile__stats-grid">
                <div className="account-profile__stats-name">Combat Level</div>
                <div className="account-profile__stats-value">
                    {userData.combatLevel.toLocaleString()}
                </div>
                <div className="account-profile__stats-name">Rank</div>
                <div className="account-profile__stats-value">
                    {userData.rank.toLocaleString()}
                </div>
                <div className="account-profile__stats-name">XP</div>
                <div className="account-profile__stats-value">
                    {userData.totalExp.toLocaleString()}
                </div>
            </div>
        </div>
    );
};

export default AccountProfile;
