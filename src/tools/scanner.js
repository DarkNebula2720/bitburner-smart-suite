/**
 * Network Scanner – Recursively maps all servers and writes to list
 */

/** @param {NS} ns **/
export async function main(ns) {
    const seen = new Set();
    const list = [];

    function dfs(server) {
        if (seen.has(server)) return;
        seen.add(server);
        list.push(server);
        for (const neighbor of ns.scan(server)) {
            dfs(neighbor);
        }
    }

    dfs("home");
    await ns.write("logs/serverlist.txt", list.join("\n"), "w");
    ns.tprint(`[Scanner] ${list.length} servers found.`);
}

