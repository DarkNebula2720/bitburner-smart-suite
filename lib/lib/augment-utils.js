/** @param {NS} ns */
export function getOwnedAugmentations(ns) {
    return ns.getOwnedAugmentations(true);
}

/** @param {NS} ns */
export function getAvailableAugmentations(ns) {
    const factions = ns.getPlayer().factions;
    const augs = [];
    for (const faction of factions) {
        for (const aug of ns.getAugmentationsFromFaction(faction)) {
            const cost = ns.getAugmentationPrice(aug);
            const rep = ns.getAugmentationRepReq(aug);
            if (ns.getFactionRep(faction) >= rep) {
                augs.push({ name: aug, cost, faction });
            }
        }
    }
    return augs;
}

/** @param {NS} ns */
export function installAugmentations(ns, list) {
    if (list.length === 0) return;
    const installScript = ns.getScriptName();
    ns.tprint("💉 Installing: " + list.join(", "));
    ns.installAugmentations(installScript);
}

