/** @param {NS} ns */
export async function main(ns) {
    const runTime = ns.getRunningScript().onlineRunningTime;
    const hours = (runTime / 3600).toFixed(1);
    const targetAugs = 30;
    const ownedAugs = ns.getOwnedAugmentations(true).length;
    const timePerAug = hours / (ownedAugs || 1);
    const projectedAugs = Math.floor(48 / timePerAug);
    ns.tprint(`⏱ Runtime: ${hours} hrs`);
    ns.tprint(`💉 Augs Owned: ${ownedAugs}`);
    ns.tprint(`📈 Projected in 48h: ${projectedAugs}`);
}

