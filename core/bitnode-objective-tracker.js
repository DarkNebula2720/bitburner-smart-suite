/** @param {NS} ns */
export async function main(ns) {
    const bn = ns.getPlayer().bitNodeN;
    ns.tprint(`🎯 BitNode ${bn} Objective Tracker Running...`);
    const objectives = {
        1: "Backdoor all key servers + install augs",
        2: "Max hacking + faction unlocks",
        3: "Complete Corporation + install",
        4: "Destroy the world daemon",
        5: "Control Bladeburner",
        6: "Complete Bladeburner contracts",
        10: "Install with ~300k karma + gang domination",
        13: "Complete Stanek Fragment Grid",
    };
    const currentGoal = objectives[bn] || "Install as many augmentations as possible";
    ns.tprint(`Objective: ${currentGoal}`);
}

