/** @param {NS} ns */
export async function main(ns) {
    const allAugs = ns.getAugmentationsFromFaction("Daedalus");
    const owned = ns.getOwnedAugmentations(true);
    const priority = [];

    for (const aug of allAugs) {
        if (!owned.includes(aug)) {
            const stats = ns.getAugmentationStats(aug);
            const multScore = Object.values(stats).reduce((acc, val) => acc + val, 0);
            priority.push({ name: aug, score: multScore });
        }
    }

    priority.sort((a, b) => b.score - a.score);
    ns.tprint("📈 Recommended Aug Install Order:");
    for (const aug of priority) {
        ns.tprint(`🔹 ${aug.name} (score: ${aug.score.toFixed(2)})`);
    }
}

