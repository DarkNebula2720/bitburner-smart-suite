/** @param {NS} ns **/
export async function main(ns) {
    ns.disableLog("ALL");
    const modules = [
        { name: "smart-augment.js", ram: ns.getScriptRam("smart-augment.js"), condition: () => true },
        { name: "smart-hacknet-manager.js", ram: ns.getScriptRam("smart-hacknet-manager.js"), condition: () => true },
        { name: "smart-node-strategy.js", ram: ns.getScriptRam("smart-node-strategy.js"), condition: () => true },
        { name: "smart-faction-manager.js", ram: ns.getScriptRam("smart-faction-manager.js"), condition: () => ns.getPlayer().factions.length > 0 },
        { name: "smart-bladeburner-support.js", ram: ns.getScriptRam("smart-bladeburner-support.js"), condition: () => ns.bladeburner !== undefined },
        { name: "smart-corp-helper.js", ram: ns.getScriptRam("smart-corp-helper.js"), condition: () => ns.corporation !== undefined },
    ];
    while (true) {
        for (let mod of modules) {
            if (!ns.isRunning(mod.name) && mod.condition()) {
                const freeRam = ns.getServerMaxRam("home") - ns.getServerUsedRam("home");
                if (freeRam >= mod.ram) ns.run(mod.name);
            }
        }
        await ns.sleep(30000);
    }
}

