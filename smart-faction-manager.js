/** @param {NS} ns **/
export async function main(ns) {
    const factions = ns.getPlayer().factions;
    for (let f of factions) {
        const augs = ns.getAugmentationsFromFaction(f).filter(a => !ns.getOwnedAugmentations(true).includes(a));
        const totalRep = augs.reduce((sum, aug) => sum + ns.getAugmentationRepReq(aug), 0);
        ns.tprint(`Faction: ${f} - Unowned Augs: ${augs.length}, Est. Total Rep Needed: ${totalRep}`);
    }
}

