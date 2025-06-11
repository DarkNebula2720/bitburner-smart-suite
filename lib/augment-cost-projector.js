/** @param {NS} ns */
export function projectAugmentCosts(ns) {
    const factions = ns.getPlayer().factions;
    const projections = [];
    for (const faction of factions) {
        for (const aug of ns.getAugmentationsFromFaction(faction)) {
            const baseCost = ns.getAugmentationPrice(aug);
            const levels = ns.getOwnedAugmentations(true).length;
            const inflation = Math.pow(1.9, levels);
            const projectedCost = baseCost * inflation;
            projections.push({ aug, faction, projectedCost });
        }
    }
    return projections.sort((a, b) => a.projectedCost - b.projectedCost);
}

