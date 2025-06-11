// ui.js 
/** Displays live system dashboard without blocking terminal input */
export async function main(ns) {
    ns.disableLog("ALL");
    ns.clearLog();
    ns.ui.openTail("ui.js"); // ✅ modern UI-safe method

    while (true) {
        ns.clearLog();
        ns.print("🧠 Bitburner Smart Suite Dashboard");
        ns.print(`RAM Usage: ${ns.getServerUsedRam("home").toFixed(2)} GB`);
        await ns.sleep(2000);
    }
}
