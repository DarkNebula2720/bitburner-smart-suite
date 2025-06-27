/** @param {NS} ns **/
export async function main(ns) {
    ns.tprint("[SmartSuite] FULL mode initializing...");
    ns.run("src/core/scheduler.js", 1);
}

