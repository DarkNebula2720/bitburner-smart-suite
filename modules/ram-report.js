/** @param {NS} ns */
import { getRamLoad } from "/lib/ram-strategy.js";

export async function main(ns) {
    const servers = ns.getPurchasedServers();
    for (const server of servers) {
        const load = getRamLoad(ns, server);
        ns.tprint(`📊 ${server}: ${load * 100}% RAM used`);
    }
}

