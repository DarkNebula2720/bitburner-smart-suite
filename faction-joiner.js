/** @param {NS} ns **/
export async function main(ns) {
    const invites = ns.checkFactionInvitations();
    for (const name of invites) {
        ns.joinFaction(name);
        ns.tprint("Joined faction: " + name);
    }
}
