export enum Skills {
    Crafting = "Crafting",
    Summoning = "Summoning",
    Cooking = "Cooking",
    Magic = "Magic",
    Prayer = "Prayer",
    Mining = "Mining",
    Firemaking = "Firemaking",
    Ranged = "Ranged",
    Smithing = "Smithing",
    Constitution = "Constitution",
    Woodcutting = "Woodcutting",
    Hunter = "Hunter",
    Fishing = "Fishing",
    Slayer = "Slayer",
    Defence = "Defence",
    Agility = "Agility",
    Strength = "Strength",
    Attack = "Attack",
    Fletching = "Fletching",
    Divination = "Divination",
    Runecrafting = "Runecrafting",
    Herblore = "Herblore",
    Dungeoneering = "Dungeoneering",
    Construction = "Construction",
    Thieving = "Thieving",
    Farming = "Farming",
    Archaeology = "Archaeology",
    Necromancy = "Necromancy",
    Invention = "Invention",
}

export type AccountSkill = {
    level: number;
    xp: number;
    rank: number;
    id: number;
};

export type Account = {
    _id: string;
    activities: { date: string; details: string; text: string }[];
    combatLevel: number;
    name: string;
    rank: number;
    skills: {[key in Skills]: AccountSkill};
    timestamp: string;
    totalExp: number;
    totalSkill: number;
};
