/**
 * Integrity Verifier – Ensures critical files are present and correct
 */

/** @param {NS} ns **/
export async function main(ns) {
    const required = [
        "launcher.js",
        "installer.js",
        "config.json",
        "src/core/scheduler.js",
        "src/core/logger.js",
        "src/core/state.js",
        "src/gui/dashboard.js",
        "modes/full/init.js",
        "modes/lite/init.js"
    ];

    let missing = [];
    for (const file of required) {
        if (!ns.fileExists(file)) {
            missing.push(file);
        }
    }

    if (missing.length > 0) {
        ns.tprint(`[Verifier] Missing files:`);
        for (const m of missing) {
            ns.tprint(`❌ ${m}`);
        }
    } else {
        ns.tprint("[Verifier] ✅ All critical files verified.");
    }
}

