/** @param {NS} ns **/
export async function main(ns) {
    const targets = ["n00dles", "joesguns", "omega-net", "phantasy"];
    const thresholds = {
        moneyRatio: 0.75,
        secThresh: 5
    };
    for (let host of targets) {
        const maxMoney = ns.getServerMaxMoney(host);
        const currentMoney = ns.getServerMoneyAvailable(host);
        const secLevel = ns.getServerSecurityLevel(host);
        const minSec = ns.getServerMinSecurityLevel(host);

        if (currentMoney / maxMoney < thresholds.moneyRatio) {
            ns.run("grow.js", 1, host);
        } else if (secLevel - minSec > thresholds.secThresh) {
            ns.run("weaken.js", 1, host);
        } else {
            ns.run("hack.js", 1, host);
        }
    }
}
