/** @param {NS} ns */
export async function main(ns) {
    const idleThreshold = 10 * 60 * 1000; // 10 minutes
    let lastAction = Date.now();
    while (true) {
        if (ns.getPlayer().workType || ns.getPlayer().isWorking) {
            lastAction = Date.now();
        }
        const now = Date.now();
        const afk = (now - lastAction > idleThreshold);
        if (afk) {
            ns.tprint("🌙 User AFK — switching to AFK mode: rep farming.");
            ns.run("/modules/faction-rep-passive.js", 1);
        } else {
            ns.tprint("🔄 User active — resuming normal task queue.");
            ns.run("/core/task-queue.js", 1);
        }
        await ns.sleep(60000);
    }
}

