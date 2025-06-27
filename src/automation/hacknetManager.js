/** 
 * Automates Hacknet node purchasing and upgrades 
 */

/** @param {NS} ns */
export async function main(ns) {
    while (true) {
        const money = ns.getServerMoneyAvailable("home");
        const nodes = ns.hacknet.numNodes();

        if (money > 1e6) {
            if (ns.hacknet.purchaseNode() !== -1) {
                ns.tprint("[Hacknet] Node purchased.");
            }
        }

        for (let i = 0; i < nodes; i++) {
            if (ns.hacknet.getLevelUpgradeCost(i, 1) < money * 0.05)
                ns.hacknet.upgradeLevel(i, 1);
            if (ns.hacknet.getRamUpgradeCost(i, 1) < money * 0.05)
                ns.hacknet.upgradeRam(i, 1);
            if (ns.hacknet.getCoreUpgradeCost(i, 1) < money * 0.05)
                ns.hacknet.upgradeCore(i, 1);
        }

        await ns.sleep(10000);
    }
}

