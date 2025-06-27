/**
 * Gathers player, faction, and server stats
 */

/** @param {NS} ns **/
export async function main(ns) {
    const stats = {
        player: ns.getPlayer(),
        servers: [],
        factions: ns.getPlayer().factions.map(f => ({
            name: f,
            rep: ns.getFactionRep(f)
        }))
    };

    for (const host of ns.scan("home")) {
        stats.servers.push({
            host,
            money: ns.getServerMoneyAvailable(host),
            sec: ns.getServerSecurityLevel(host)
        });
    }

    const file = "logs/stats.json";
    await ns.write(file, JSON.stringify(stats, null, 2), "w");
    ns.tprint(`[Stats] Written to ${file}`);
}

