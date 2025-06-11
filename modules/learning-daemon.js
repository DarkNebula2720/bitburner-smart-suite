/** @param {NS} ns */
import { logPerformanceSnapshot } from "/lib/performance-logger.js";

export async function main(ns) {
    ns.disableLog("sleep");
    while (true) {
        await logPerformanceSnapshot(ns);
        await ns.sleep(60000); // Log every 60 seconds
    }
}

