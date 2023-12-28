import { Account, AccountSkill} from "../types/Account";
import "../styles/AccountStats.css";
import icons from "../assets";
import { useState } from "react";
import { Skills } from "../types/Skills";

type Props = {
    accountData: Account;
};

enum SortType {
    Default = "default",
    Level = "level",
    Rank = "rank",
    XP = "xp",
}

enum SortDirection {
    ASC = "asc",
    DESC = "desc",
}

const AccountStats = ({ accountData }: Props) => {
    const [selectSort, setSelectedSort] = useState<SortType>(SortType.Default);
    const [selectSortDirection, setSortDirection] = useState<SortDirection>(
        SortDirection.ASC
    );

    const sortFunctions = {
        [SortType.Default]: (a: AccountSkill, b: AccountSkill) =>
            selectSortDirection === SortDirection.DESC
                ? b.id - a.id
                : a.id - b.id,
        [SortType.Level]: (a: AccountSkill, b: AccountSkill) =>
            selectSortDirection === SortDirection.DESC
                ? b.level - a.level
                : a.level - b.level,
        [SortType.Rank]: (a: AccountSkill, b: AccountSkill) =>
            selectSortDirection === SortDirection.DESC
                ? b.rank - a.rank
                : a.rank - b.rank,
        [SortType.XP]: (a: AccountSkill, b: AccountSkill) =>
            selectSortDirection === SortDirection.DESC
                ? b.xp - a.xp
                : a.xp - b.xp,
    };

    const skills = Object.keys(accountData.skills)
        .map((key) => {
            return {
                skillName: key,
                maxSkillLevel: [
                    "Dungeoneering",
                    "Invention",
                    "Slayer",
                    "Farming",
                    "Herblore",
                    "Archaeology",
                    "Necromancy",
                ].includes(key)
                    ? 120
                    : 99,
                ...accountData.skills[key as Skills],
            };
        })
        .sort(sortFunctions[selectSort]);

    return (
        <div className="account-stats">
            <div className="account-stats__title">Stats</div>
            <label>Sort by</label>
            <select
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    setSelectedSort(e.target.value as SortType);
                }}
            >
                <option value="default">Default</option>
                <option value="level">Level</option>
                <option value="rank">Rank</option>
                <option value="xp">XP</option>
            </select>
            <button
                onClick={() => {
                    setSortDirection(
                        selectSortDirection === SortDirection.ASC
                            ? SortDirection.DESC
                            : SortDirection.ASC
                    );
                }}
            >
                {selectSortDirection}
            </button>
            <div className="account-stats__list">
                {skills.map((skill) => {
                    return (
                        <div className="account-stats__stat">
                            <img
                                src={
                                    icons[
                                        skill.skillName.toLowerCase() + "Icon"
                                    ]
                                }
                                className="account-stats__stat__icon"
                            />
                            <div className="account-stats__stat__info">
                                <div className="account-stats__stat__info__name">
                                    {skill.skillName}
                                </div>
                                <div className="account-stats__stat__info__rank-xp">
                                    <div>
                                        <span className="account-stats__stat__info__rank-xp__label">
                                            Rank&nbsp;&nbsp;
                                        </span>
                                        {skill.rank.toLocaleString()}
                                    </div>
                                    <div>
                                        <span className="account-stats__stat__info__rank-xp__label">
                                            XP&nbsp;&nbsp;
                                        </span>
                                        {skill.xp.toLocaleString()}
                                    </div>
                                </div>
                            </div>
                            <div className="account-stats__stat__level">
                                <div className="account-stats__stat__level__label">
                                    Level&nbsp;&nbsp;
                                </div>
                                <div className="account-stats__stat__level__value">
                                    {skill.level} /{" "}
                                    <span>{skill.maxSkillLevel}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AccountStats;
