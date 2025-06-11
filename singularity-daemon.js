/** @param {NS} ns **/
export async function main(ns) {
    if (!ns.singularity) {
        ns.tprint("Singularity functions not available.");
        return;
    }

    const factions = ns.getPlayer().factions;
    const augmentations = ns.singularity.getAugmentationsFromFaction(factions[0] || "");

    for (const aug of augmentations) {
        const repReq = ns.singularity.getAugmentationRepReq(aug);
        if (ns.singularity.getFactionRep(factions[0]) > repReq) {
            ns.singularity.purchaseAugmentation(factions[0], aug);
            ns.tprint("Purchased augmentation: " + aug);
        }
    }

    ns.singularity.installAugmentations("daemon.js");
}
