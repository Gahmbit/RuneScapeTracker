import { Skills } from "./Skills";

export type AccountSkill = {
    level: number;
    xp: number;
    rank: number;
    id: number;
};

export type Account = {
    _id: string;
    activities: { date: string; details: string; text: string; type: string }[];
    combatLevel: number;
    name: string;
    rank: number;
    skills: { [key in Skills]: AccountSkill };
    timestamp: string;
    totalExp: number;
    totalSkill: number;
};
