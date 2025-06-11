/** @param {NS} ns **/
export async function main(ns) {
    ns.disableLog("ALL");
    while (true) {
        const budget = ns.getServerMoneyAvailable("home") * 0.5;
        for (let i = 0; i < ns.hacknet.numNodes(); i++) {
            if (ns.hacknet.getLevelUpgradeCost(i, 1) < budget) ns.hacknet.upgradeLevel(i, 1);
            if (ns.hacknet.getRamUpgradeCost(i, 1) < budget) ns.hacknet.upgradeRam(i, 1);
            if (ns.hacknet.getCoreUpgradeCost(i, 1) < budget) ns.hacknet.upgradeCore(i, 1);
        }
        if (ns.hacknet.numNodes() < ns.hacknet.maxNumNodes() &&
            ns.hacknet.getPurchaseNodeCost() < budget) {
            ns.hacknet.purchaseNode();
        }
        await ns.sleep(10000);
    }
}

