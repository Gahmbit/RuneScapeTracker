import { Account } from "../types/Account";
import "../styles/AccountSnaps.css";

type Props = {
    accountData: Account;
};

const AccountSnaps = ({ accountData }: Props) => {
    return (
        <div className="account-profile">
            <div className="account-profile__picture-image">
                <img
                    src={`http://secure.runescape.com/m=avatar-rs/${accountData.name}/chat.png`}
                />
            </div>
            <div className="account-profile__rsn">{accountData.name}</div>
            <div className="account-profile__total-skill">
                <div className="account-profile__total-skill__label">
                    Total Skill
                </div>
                <div className="account-profile__total-skill__value">
                    {accountData.totalSkill.toLocaleString()}
                </div>
            </div>
            <div className="account-profile__stats-grid">
                <div className="account-profile__stats-name">Combat Level</div>
                <div className="account-profile__stats-value">
                    {accountData.combatLevel.toLocaleString()}
                </div>
                <div className="account-profile__stats-name">Rank</div>
                <div className="account-profile__stats-value">
                    {accountData.rank.toLocaleString()}
                </div>
                <div className="account-profile__stats-name">XP</div>
                <div className="account-profile__stats-value">
                    {accountData.totalExp.toLocaleString()}
                </div>
            </div>
        </div>
    );
};

export default AccountSnaps;
