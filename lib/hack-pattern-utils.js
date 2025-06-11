/** @param {NS} ns */
export async function logBatchPerformance(ns, time, profit) {
    const file = "/data/hack-history.json";
    let history = [];
    if (ns.fileExists(file)) {
        history = JSON.parse(ns.read(file));
    }
    history.push({ time, profit });
    if (history.length > 100) history.shift(); // keep last 100
    await ns.write(file, JSON.stringify(history, null, 2), "w");
}

