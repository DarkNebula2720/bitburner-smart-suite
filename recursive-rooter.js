/** @param {NS} ns **/
export async function main(ns) {
    const visited = new Set();
    const toVisit = ["home"];

    while (toVisit.length > 0) {
        const host = toVisit.pop();
        if (visited.has(host)) continue;
        visited.add(host);

        try {
            if (!ns.hasRootAccess(host)) {
                if (ns.fileExists("BruteSSH.exe")) ns.brutessh(host);
                if (ns.fileExists("FTPCrack.exe")) ns.ftpcrack(host);
                if (ns.fileExists("relaySMTP.exe")) ns.relaysmtp(host);
                if (ns.fileExists("HTTPWorm.exe")) ns.httpworm(host);
                if (ns.fileExists("SQLInject.exe")) ns.sqlinject(host);
                ns.nuke(host);
            }
        } catch {}

        for (const neighbor of ns.scan(host)) {
            if (!visited.has(neighbor)) {
                toVisit.push(neighbor);
            }
        }
    }
    ns.tprint("Rooting complete. All accessible systems have been cracked.");
}
