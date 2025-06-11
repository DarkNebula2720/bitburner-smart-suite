/** @param {NS} ns **/
export async function main(ns) {
    const perfFile = "/logs/performance.json.txt";
    while (true) {
        if (ns.fileExists(perfFile)) {
            const data = JSON.parse(ns.read(perfFile));
            const timestamps = Object.keys(data).map(Number).sort();
            if (timestamps.length >= 2) {
                const last = data[timestamps[timestamps.length - 1]];
                const secondLast = data[timestamps[timestamps.length - 2]];
                const delta = last.incomeRate - secondLast.incomeRate;
                if (delta < 0) {
                    ns.tprint("Warning: Decreased income detected, rebalancing needed.");
                    ns.run("script-scheduler.js"); // trigger rebalancing
                }
            }
        }
        await ns.sleep(60000);
    }
}
