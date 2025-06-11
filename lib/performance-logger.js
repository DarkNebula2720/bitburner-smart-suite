/** @param {NS} ns */
export async function logPerformanceSnapshot(ns) {
    const dataPath = "/data/global-performance.json";
    let history = [];
    if (ns.fileExists(dataPath)) {
        history = JSON.parse(ns.read(dataPath));
    }
    const player = ns.getPlayer();
    const snapshot = {
        time: new Date().toLocaleString(),
        moneyPerSec: ns.getTotalScriptIncome()[0],
        xpPerSec: ns.getTotalScriptExpGain(),
        augs: player.augmentations.length,
        factions: player.factions,
        hackLevel: player.skills.hacking,
        bn: player.bitNodeN
    };
    history.push(snapshot);
    await ns.write(dataPath, JSON.stringify(history, null, 2), "w");
}

