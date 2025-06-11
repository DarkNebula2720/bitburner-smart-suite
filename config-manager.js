/** @param {NS} ns **/
export async function main(ns) {
    const profiles = {
        "default": ["smart-augment.js", "smart-node-strategy.js"],
        "corp": ["smart-corp-helper.js", "smart-faction-manager.js"],
        "bladeburner": ["smart-bladeburner-support.js"]
    };
    const active = "default"; // Change this to select a profile
    for (let script of profiles[active]) {
        if (!ns.isRunning(script)) ns.run(script);
    }
}

