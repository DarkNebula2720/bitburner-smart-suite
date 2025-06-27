/** 
 * Core Task Scheduler – Executes tasks on interval
 * This is the main loop responsible for controlling Smart Suite modules
 */

/** @param {NS} ns */
export async function main(ns) {
    ns.disableLog("ALL");
    const interval = 200; // ms

    while (true) {
        try {
            ns.run("src/hacks/smartHack.js", 1);
            ns.run("src/automation/hacknetManager.js", 1);
            ns.run("src/automation/factionFarmer.js", 1);
            ns.run("src/automation/augmentPlanner.js", 1);
            ns.run("src/gui/dashboard.js", 1);

            // Schedule other core services as needed

        } catch (e) {
            ns.tprint(`[Scheduler ERROR] ${e}`);
            await ns.write("logs/error.log", `[${new Date().toISOString()}] ${e}
`, "a");
        }

        await ns.sleep(interval);
    }
}

