/** @param {NS} ns */
export async function main(ns) {
    ns.tprint("🔧 Running maintenance...");
    await ns.run("/tools/session-tracker.js");
    await ns.run("/tools/suite-diagnostics.js");
    ns.tprint("✅ Maintenance complete.");
}

