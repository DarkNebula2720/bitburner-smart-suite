/**
 * Unified Integrity Verifier – Checks presence of all critical files for Bitburner Smart Suite.
 * Add/Update as new important files are introduced.
 */

/** @param {NS} ns **/
export async function main(ns) {
    const criticalFiles = [
        "main.js",
        "launcher.js",
        "installer.js",
        "config.json",
        "src/core/state.js",
        "src/core/scheduler.js",
        "src/core/logger.js",
        "src/core/cliRouter.js",
        "src/gui/hotbar.js",
        "src/gui/dashboard.js",
        "tools/cleaner.js",
        "tools/scanner.js",
        "tools/aBTestFramework.js",
        "tests/integrityVerifier.js",
        "modes/full/init.js",
        "modes/lite/init.js",
        "src/automation/smartHack.js"
        // Add more as needed
    ];

    let missing = [];
    for (const file of criticalFiles) {
        if (!ns.fileExists(file, "home")) {
            missing.push(file);
        }
    }

    if (missing.length > 0) {
        ns.tprint(`[Verifier] ❌ Missing critical files:`);
        for (const m of missing) {
            ns.tprint(` - ${m}`);
        }
        ns.tprint(`[Verifier] ${missing.length} file(s) missing. Please re-run installer or check manual copy.`);
    } else {
        ns.tprint("[Verifier] ✅ All critical files verified. System integrity check passed.");
    }
}
