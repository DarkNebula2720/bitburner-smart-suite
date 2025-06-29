/**
 * SmartHack – dynamically weakens/grows/hacks based on server state
 */

/** @param {NS} ns **/
export async function main(ns) {
    const target = ns.args[0] || "n00dles";
    const moneyThresh = ns.getServerMaxMoney(target) * 0.75;
    const securityThresh = ns.getServerMinSecurityLevel(target) + 5;

    while (true) {
        if (ns.getServerSecurityLevel(target) > securityThresh) {
            await ns.weaken(target);
        } else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
            await ns.grow(target);
        } else {
            await ns.hack(target);
        }
        await ns.sleep(100);
    }
}

