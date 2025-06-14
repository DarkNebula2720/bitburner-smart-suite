/** @param {NS} ns */
export async function main(ns) {
    const servers = ["n00dles", "foodnstuff", "joesguns", "phantasy", "omega-net", "silver-helix", "catalyst", "rho-construction"];
    let bestTarget = null;
    let bestScore = 0;

    for (const host of servers) {
        if (!ns.hasRootAccess(host)) continue;
        const maxMoney = ns.getServerMaxMoney(host);
        const minSec = ns.getServerMinSecurityLevel(host);
        const hackTime = ns.getHackTime(host);
        const score = maxMoney / (minSec * hackTime);
        if (score > bestScore) {
            bestScore = score;
            bestTarget = host;
        }
    }

    if (bestTarget) {
        ns.tprint(`🎯 Best target selected: ${bestTarget}`);
        await ns.write("/data/primary-hack-target.txt", bestTarget, "w");
    } else {
        ns.tprint("⚠️ No viable targets found.");
    }
}

