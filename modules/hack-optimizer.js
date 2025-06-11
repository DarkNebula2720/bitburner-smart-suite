/** @param {NS} ns */
export async function main(ns) {
    const history = JSON.parse(ns.read("/data/hack-history.json"));
    const avgProfit = history.reduce((a, b) => a + b.profit, 0) / history.length;
    if (avgProfit < 500000) {
        ns.tprint("⚠️ Hack profit low — consider changing target server.");
    } else {
        ns.tprint("✅ Hack target is performing well.");
    }
}

