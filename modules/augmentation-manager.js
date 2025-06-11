/** @param {NS} ns */
import { getBitnodeMultipliers } from "/lib/bitnode-utils.js";
import { getOwnedAugmentations, getAvailableAugmentations, installAugmentations } from "/lib/augment-utils.js";

export async function main(ns) {
    ns.disableLog("sleep");
    ns.tprint("🧠 Augmentation Manager started...");

    const mode = ns.args[0] || "auto"; // 'auto' or 'manual'
    const bitnode = ns.getPlayer().bitNodeN;
    const multipliers = getBitnodeMultipliers(ns, bitnode);

    if (mode === "manual") {
        const available = getAvailableAugmentations(ns);
        ns.tprint("Manual mode: available augmentations:");
        available.forEach(a => ns.tprint(` - ${a.name} (${ns.nFormat(a.cost, '($0.00a)')})`));
        ns.tprint("Select which to purchase manually.");
        return;
    }

    // Auto-mode
    ns.tprint("Auto mode: evaluating optimal augments...");
    const owned = getOwnedAugmentations(ns);
    const available = getAvailableAugmentations(ns);
    const toBuy = [];

    for (const aug of available) {
        if (!owned.includes(aug.name) && ns.getPlayer().money > aug.cost) {
            toBuy.push(aug);
            ns.purchaseAugmentation(aug.faction, aug.name);
            ns.tprint(`🛒 Bought: ${aug.name}`);
            await ns.sleep(200);
        }
    }

    if (toBuy.length > 0) {
        ns.tprint("Installing augmentations in 5 seconds...");
        await ns.sleep(5000);
        installAugmentations(ns, toBuy.map(a => a.name));
    } else {
        ns.tprint("No augmentations purchased.");
    }
}


