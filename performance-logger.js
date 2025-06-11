/** @param {NS} ns **/
export async function main(ns) {
    const file = "/logs/performance.json.txt";
    let data = {};
    try {
        data = JSON.parse(ns.read(file)) || {};
    } catch {}

    const stats = {
        timestamp: Date.now(),
        money: ns.getServerMoneyAvailable("home"),
        hacknet: ns.hacknet.hashCapacity() || 0,
        incomeRate: ns.getScriptIncome()[0]
    };

    data[stats.timestamp] = stats;
    ns.write(file, JSON.stringify(data, null, 2), "w");
    ns.tprint("Performance logged.");
}
