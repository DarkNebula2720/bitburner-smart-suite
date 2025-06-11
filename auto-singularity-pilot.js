/** @param {NS} ns **/
export async function main(ns) {
    if (!ns.singularity) {
        ns.tprint("Singularity functions unavailable.");
        return;
    }
    const progs = ["BruteSSH.exe", "FTPCrack.exe", "relaySMTP.exe", "HTTPWorm.exe", "SQLInject.exe"];
    for (let p of progs) {
        if (!ns.fileExists(p, "home")) ns.singularity.purchaseProgram(p);
    }
    const factions = ns.getPlayer().factions;
    for (let f of factions) {
        if (!ns.isBusy()) ns.singularity.workForFaction(f, "hacking", false);
    }
    if (ns.getOwnedAugmentations(true).length > 10 && ns.getAugmentationsFromFaction("Daedalus").length > 0) {
        ns.singularity.installAugmentations("daemon.js");
    }
}

