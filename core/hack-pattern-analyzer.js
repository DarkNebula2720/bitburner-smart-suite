/** @param {NS} ns */
export async function main(ns) {
    const logPath = "/data/hack-history.json";
    let history = [];
    if (ns.fileExists(logPath)) {
        history = JSON.parse(ns.read(logPath));
    }
    const total = history.length;
    const avgTime = (history.reduce((a, b) => a + b.time, 0) / total).toFixed(2);
    const avgProfit = (history.reduce((a, b) => a + b.profit, 0) / total).toFixed(0);
    ns.tprint(`📊 Total Batches: ${total} | Avg Time: ${avgTime}s | Avg Profit: $${avgProfit}`);
}

