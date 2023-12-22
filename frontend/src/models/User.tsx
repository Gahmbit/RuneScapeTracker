export type User = {
    _id: string;
    activities: { date: string; details: string; text: string }[];
    combatLevel: number;
    name: string;
    rank: number;
    skills: { [key: number]: { level: number; xp: number; rank: number } };
    timestamp: string;
    totalExp: number;
    totalSkill: number;
};