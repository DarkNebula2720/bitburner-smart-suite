/** @param {NS} ns **/
export async function main(ns) {
    try {
        await ns.run("daemon.js");
    } catch (e) {
        ns.write("/logs/crash-log.txt", `${new Date().toISOString()}: Crash - ${e}\n`, "a");
        ns.killall();
        await ns.sleep(5000);
        ns.run("daemon.js");
    }
}
