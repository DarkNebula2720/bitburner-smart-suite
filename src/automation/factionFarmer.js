/**
 * Automatically joins factions, earns favor, and runs work
 */

/** @param {NS} ns */
export async function main(ns) {
    const factions = ns.checkFactionInvitations();
    for (const name of factions) {
        ns.joinFaction(name);
        ns.tprint(`[Faction] Joined ${name}`);
    }

    const working = ns.getPlayer().currentWorkFactionName;
    const targets = ["CyberSec", "NiteSec", "Tetrads"];

    for (const faction of targets) {
        if (ns.getPlayer().factions.includes(faction) && working !== faction) {
            ns.workForFaction(faction, "hacking", false);
            ns.tprint(`[Faction] Working for ${faction}`);
            break;
        }
    }

    await ns.sleep(60000);
}

