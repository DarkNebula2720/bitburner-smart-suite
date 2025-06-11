/** @param {NS} ns */
export async function main(ns) {
    const beacon = {
        time: new Date().toLocaleString(),
        ramUsed: ns.getServerUsedRam("home"),
        scriptsRunning: ns.ps().length,
        money: ns.getServerMoneyAvailable("home"),
        augs: ns.getOwnedAugmentations(true).length
    };
    await ns.write("/data/status.json", JSON.stringify(beacon, null, 2), "w");
    ns.tprint("📡 Status beacon updated.");
}

