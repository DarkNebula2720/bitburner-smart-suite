/**
 * Augmentation History Tracker – logs augments purchased across resets
 */

/** @param {NS} ns **/
export async function main(ns) {
    const owned = ns.getOwnedAugmentations(true);
    const installed = ns.getOwnedAugmentations(false);
    const log = [];

    log.push("=== AUGMENTATION HISTORY ===");
    log.push("Installed:");
    for (const aug of installed) {
        log.push("✔️ " + aug);
    }

    log.push("\nOwned (uninstalled):");
    for (const aug of owned) {
        if (!installed.includes(aug)) {
            log.push("📦 " + aug);
        }
    }

    await ns.write("logs/augmentation-history.txt", log.join("\n"), "w");
    ns.tprint("[AugHistory] Saved augmentation history to logs/augmentation-history.txt");
}

