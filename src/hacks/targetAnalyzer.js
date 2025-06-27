/**
 * Analyzes all rooted servers and scores them for hacking value
 */

/** @param {NS} ns */
export async function main(ns) {
    const servers = scanAll(ns);
    const report = servers.map(host => ({
        host,
        score: calculateScore(ns, host),
    })).sort((a, b) => b.score - a.score);

    for (const r of report) {
        ns.tprint(`${r.host}: ${r.score.toFixed(2)}`);
    }
}

function scanAll(ns) {
    const visited = new Set();
    const queue = ["home"];
    while (queue.length) {
        const node = queue.pop();
        if (visited.has(node)) continue;
        visited.add(node);
        queue.push(...ns.scan(node));
    }
    return Array.from(visited).filter(h => ns.hasRootAccess(h) && ns.getServerMaxMoney(h) > 0);
}

function calculateScore(ns, host) {
    const maxMoney = ns.getServerMaxMoney(host);
    const minSec = ns.getServerMinSecurityLevel(host);
    const hackTime = ns.getHackTime(host);
    return (maxMoney / minSec) / hackTime;
}

