/** @param {NS} ns */
export function getSourceFileStatus(ns) {
    const files = ns.getOwnedSourceFiles();
    const status = {};
    for (let i = 1; i <= 13; i++) {
        const owned = files.find(f => f.n === i);
        status[`SF${i}`] = owned ? { level: owned.lvl, owned: true } : { level: 0, owned: false };
    }
    return status;
}

