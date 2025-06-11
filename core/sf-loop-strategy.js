/** @param {NS} ns */
export function getNextSourceFile(ns) {
    const targetLevels = { 1: 3, 2: 2, 3: 2, 4: 1, 5: 1, 9: 2, 10: 2, 13: 1 };
    const owned = ns.getOwnedSourceFiles();
    const nextList = [];

    for (const sf in targetLevels) {
        const ownedSF = owned.find(f => f.n === parseInt(sf));
        const currentLevel = ownedSF ? ownedSF.lvl : 0;
        const targetLevel = targetLevels[sf];
        if (currentLevel < targetLevel) {
            nextList.push({ sf: `SF${sf}`, currentLevel, targetLevel });
        }
    }

    nextList.sort((a, b) => a.targetLevel - a.currentLevel - (b.targetLevel - b.currentLevel));
    return nextList[0] || null;
}

