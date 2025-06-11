/** @param {NS} ns */
export async function main(ns) {
    const scripts = ["/modules/autoHack.js", "/modules/core-starter.js"];
    const servers = getEligibleServers(ns);

    for (const server of servers) {
        for (const script of scripts) {
            if (ns.scriptRunning(script, server)) continue;
            const ramAvailable = ns.getServerMaxRam(server) - ns.getServerUsedRam(server);
            const ramNeeded = ns.getScriptRam(script);
            if (ramAvailable >= ramNeeded) {
                ns.scp(script, server);
                ns.exec(script, server, 1);
                ns.tprint(`🚚 Deployed ${script} to ${server}`);
                break;
            }
        }
    }
}

function getEligibleServers(ns) {
    return ns.scan("home")
        .flatMap(host => [host, ...ns.scan(host)])
        .filter(host => ns.hasRootAccess(host) && ns.getServerMaxRam(host) > 8 && host !== "home");
}

