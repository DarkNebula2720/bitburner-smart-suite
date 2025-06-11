/** @param {NS} ns */
export async function main(ns) {
    const augs = ns.getOwnedAugmentations(true);
    const installCost = ns.getResetInfo().installCost || 0;

    ns.tprint("⏱️ Install Timing Optimizer");
    ns.tprint(`Owned Augmentations: ${augs.length}`);
    ns.tprint(`Install Cost: ${ns.nFormat(installCost, '0.00a')}`);

    if (augs.length >= 10 || installCost < 10e9) {
        ns.tprint("✅ Optimal time to install augmentations is now.");
    } else {
        ns.tprint("❌ Not yet optimal. Consider waiting for more augments or cheaper install cost.");
    }
}


