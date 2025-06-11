/** @param {NS} ns **/
export async function main(ns) {
    const targets = ns.scan("home")
        .map(h => ({ name: h, score: ns.getServerMaxMoney(h) / ns.getServerMinSecurityLevel(h) }))
        .filter(t => ns.hasRootAccess(t.name) && ns.getServerMaxMoney(t.name) > 0)
        .sort((a, b) => b.score - a.score);
    
    for (let target of targets.slice(0, 5)) {
        ns.tprint(`Recommended Hack Target: ${target.name} (Score: ${target.score.toFixed(2)})`);
    }
}

