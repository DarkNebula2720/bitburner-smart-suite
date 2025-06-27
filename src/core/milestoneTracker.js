/**
 * Progress & Milestone Tracker – logs when important game milestones are reached.
 */

/** @param {NS} ns **/
export async function main(ns) {
    const milestones = [
        { label: "Hack Level 250", condition: () => ns.getHackingLevel() >= 250 },
        { label: "Joined 5 Factions", condition: () => ns.getPlayer().factions.length >= 5 },
        { label: "Earned $100m", condition: () => ns.getServerMoneyAvailable("home") >= 1e8 },
        { label: "Installed 5 Augments", condition: () => ns.getOwnedAugmentations(false).length >= 5 },
        { label: "BitNode Completed", condition: () => ns.getResetInfo().currentNode === 1 && ns.getHackingLevel() > 2000 }
    ];

    const file = "logs/milestones.txt";
    const previous = ns.read(file).split("\n").filter(Boolean);
    const alreadyLogged = new Set(previous);

    for (const m of milestones) {
        if (m.condition() && !alreadyLogged.has(m.label)) {
            await ns.write(file, m.label + "\n", "a");
            ns.tprint(\`[Milestone] 🎉 Achieved: \${m.label}\`);
        }
    }
}

