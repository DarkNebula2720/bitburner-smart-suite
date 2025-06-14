/** @param {NS} ns */
export async function main(ns) {
    const errors = [];
    if (!ns.fileExists("/core/daemon.js")) errors.push("Missing core daemon.");
    if (!ns.fileExists("/data/smart-config.json")) errors.push("Missing config file.");
    const log = errors.length ? errors.join("\n") : "No issues detected.";
    await ns.write("/logs/diagnostics.txt", log, "w");
    ns.tprint("📋 Diagnostics complete.");
}

