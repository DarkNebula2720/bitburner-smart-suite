/** @param {NS} ns */
export function logError(ns, msg) {
    const line = `[${new Date().toLocaleTimeString()}] ERROR: ${msg}\n`;
    ns.write("/logs/errors.txt", line, "a");
    ns.tprint("❌ " + msg);
}

