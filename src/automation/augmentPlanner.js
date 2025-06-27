/**
 * Tracks and logs augmentation requirements and purchases
 */

/** @param {NS} ns */
export async function main(ns) {
    const owned = ns.getOwnedAugmentations(true);
    const plans = ns.getAugmentationsFromFaction("CyberSec")
        .filter(aug => !owned.includes(aug));

    for (const aug of plans) {
        const rep = ns.getAugmentationRepReq(aug);
        const cost = ns.getAugmentationPrice(aug);
        const repNow = ns.getFactionRep("CyberSec");
        const money = ns.getServerMoneyAvailable("home");

        if (repNow >= rep && money >= cost) {
            const res = ns.purchaseAugmentation("CyberSec", aug);
            if (res) ns.tprint(`[Augment] Purchased ${aug}`);
        }
    }

    await ns.sleep(60000);
}

