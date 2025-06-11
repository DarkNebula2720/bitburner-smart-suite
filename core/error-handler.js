/** @param {NS} ns **/
export async function main(ns) {
    const monitored = ["daemon.js", "smart-hacknet-manager.js", "smart-orchestrator.js"];
    while (true) {
        for (let script of monitored) {
            if (!ns.isRunning(script, "home")) {
                ns.tprint(`[ERROR] ${script} is not running. Restarting...`);
                ns.run(script);
            }
        }
        await ns.sleep(5000);
    }
}
