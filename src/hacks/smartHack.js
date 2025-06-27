/** 
 * Smart Hack Controller – Adaptive thread splitter for weaken/grow/hack
 */

/** @param {NS} ns **/
export async function main(ns) {
    const targets = ["n00dles", "foodnstuff", "joesguns"]; // Placeholder
    const threads = Math.floor(ns.getServerMaxRam("home") / ns.getScriptRam("smartHack.js"));
    const target = pickBestTarget(ns, targets);

    if (ns.getServerSecurityLevel(target) > ns.getServerMinSecurityLevel(target) + 5) {
        await ns.weaken(target);
    } else if (ns.getServerMoneyAvailable(target) < ns.getServerMaxMoney(target) * 0.75) {
        await ns.grow(target);
    } else {
        await ns.hack(target);
    }
}

function pickBestTarget(ns, targets) {
    return targets.sort((a, b) => {
        const scoreA = ns.getServerMaxMoney(a) / ns.getServerMinSecurityLevel(a);
        const scoreB = ns.getServerMaxMoney(b) / ns.getServerMinSecurityLevel(b);
        return scoreB - scoreA;
    })[0];
}

