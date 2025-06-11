/** @param {NS} ns */
export async function main(ns) {
    const daemonAlive = ns.scriptRunning("daemon.js", "home");
    if (!daemonAlive) {
        ns.tprint("🚨 Daemon crashed! Rebooting Smart Suite...");
        ns.run("install.js"); // Replace with daemon.js if install.js unnecessary
    } else {
        ns.tprint("✅ All systems nominal.");
    }
}

