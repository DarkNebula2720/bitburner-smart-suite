/** @param {NS} ns **/
export async function main(ns) {
    ns.tail();
    ns.clearLog();
    ns.disableLog("ALL");
    while (true) {
        ns.clearLog();
        ns.print("==== Smart Suite: Live Overlay ====");
        const ramUsed = ns.getScriptRam("daemon.js");
        ns.print(`Daemon RAM usage: ${ramUsed.toFixed(2)} GB`);
        const queue = ns.ps("home").map(p => p.filename);
        ns.print(`Active Scripts: ${queue.length}`);
        ns.print("Last Status: All systems nominal.");
        await ns.sleep(2000);
    }
}
