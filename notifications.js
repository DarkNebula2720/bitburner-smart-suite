/** @param {NS} ns */
export async function main(ns) {
    const rep = ns.getFactionRep("Daedalus");
    const augs = ns.getOwnedAugmentations().length;
    if (rep > 100000) ns.toast("⚡ High Faction Rep: Daedalus", "info");
    if (augs >= 25) ns.toast("💉 Augment Install Threshold Met", "success");
}

