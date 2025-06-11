/** @param {NS} ns */
export async function updateBitnodeProfile(ns, success = false) {
    const file = "/data/bn-memory.json";
    let memory = {};
    if (ns.fileExists(file)) {
        memory = JSON.parse(ns.read(file));
    }
    const player = ns.getPlayer();
    const bn = `BN${player.bitNodeN}`;
    const profile = {
        runtimeHours: Math.round(ns.getRunningScript().onlineRunningTime / 3600),
        hackLevel: player.skills.hacking,
        augmentCount: player.augmentations.length,
        factions: player.factions,
        success: success,
        time: new Date().toLocaleString()
    };
    memory[bn] = profile;
    await ns.write(file, JSON.stringify(memory, null, 2), "w");
}

