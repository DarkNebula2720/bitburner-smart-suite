/** @param {NS} ns **/
export async function main(ns) {
    const goals = [
        { goal: "Join Daedalus", completed: ns.getPlayer().factions.includes("Daedalus") },
        { goal: "Install NeuroFlux Governor", completed: ns.singularity.getOwnedAugmentations().includes("NeuroFlux Governor") },
        { goal: "Get 1B hacking money", completed: ns.getServerMoneyAvailable("home") >= 1e9 },
        { goal: "Max Hacking Level", completed: ns.getHackingLevel() >= 2500 }
    ];

    ns.tprint("Strategic Progress Report:");
    for (const g of goals) {
        ns.tprint(`[${g.completed ? "✔" : "✖"}] ${g.goal}`);
    }
}
