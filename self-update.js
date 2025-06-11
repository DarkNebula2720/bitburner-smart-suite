/** @param {NS} ns **/
export async function main(ns) {
    const repo = "https://raw.githubusercontent.com/DarkNebula2720/bitburner-smart-suite/main/";
    const scripts = ["daemon.js", "smart-augment.js", "smart-hacknet-manager.js", "smart-node-strategy.js",
        "smart-faction-manager.js", "smart-bladeburner-support.js", "smart-corp-helper.js", "smart-orchestrator.js"];
    for (let s of scripts) {
        await ns.wget(`${repo}${s}`, s);
        ns.tprint(`Updated: ${s}`);
    }
    ns.spawn("daemon.js", 1);
}
 

