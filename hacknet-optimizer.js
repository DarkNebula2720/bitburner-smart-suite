/** @param {NS} ns **/
export async function main(ns) {
    while (true) {
        const nodes = ns.hacknet.numNodes();
        let bestUpgrade = null;
        let bestROI = Infinity;
        for (let i = 0; i < nodes; i++) {
            let levelCost = ns.hacknet.getLevelUpgradeCost(i, 1);
            let ramCost = ns.hacknet.getRamUpgradeCost(i, 1);
            let coreCost = ns.hacknet.getCoreUpgradeCost(i, 1);
            let prod = ns.hacknet.getNodeStats(i).production;
            if (levelCost / prod < bestROI) {
                bestROI = levelCost / prod;
                bestUpgrade = () => ns.hacknet.upgradeLevel(i, 1);
            }
            if (ramCost / prod < bestROI) {
                bestROI = ramCost / prod;
                bestUpgrade = () => ns.hacknet.upgradeRam(i, 1);
            }
            if (coreCost / prod < bestROI) {
                bestROI = coreCost / prod;
                bestUpgrade = () => ns.hacknet.upgradeCore(i, 1);
            }
        }
        if (bestUpgrade) bestUpgrade();
        await ns.sleep(10000);
    }
}
