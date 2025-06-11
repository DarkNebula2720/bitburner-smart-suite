/** @param {NS} ns */
import { installAugmentations } from "/lib/augment-utils.js";

export async function main(ns) {
    const player = ns.getPlayer();
    if (player.augmentations.length >= 10 && ns.getTotalScriptIncome()[0] < 50000) {
        ns.tprint("💡 Reset conditions met. Installing augmentations...");
        await ns.sleep(3000);
        ns.installAugmentations("daemon.js");
    } else {
        ns.tprint("Reset not triggered — conditions not met.");
    }
}

