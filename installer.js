/** 
 * Smart Suite Installer – Pulls full suite from GitHub
 * Repo: https://github.com/DarkNebula2720/bitburner-smart-suite.git
 * Requires: W0r1d_D43m0n backdoor for wget across servers
 * 
 * Usage: run installer.js
 */

/** @param {NS} ns **/
export async function main(ns) {
    const base = "https://raw.githubusercontent.com/DarkNebula2720/bitburner-smart-suite/main/";
    const files = [
        "launcher.js",
        "installer.js",
        "config.json",
        "README.md",
        "LICENSE",
        "CHANGELOG.md",
        "src/core/scheduler.js",
        "src/core/logger.js",
        "src/core/errorHandler.js",
        "src/core/state.js",
        "src/hacks/smartHack.js",
        "src/hacks/targetAnalyzer.js",
        "src/automation/hacknetManager.js",
        "src/automation/factionFarmer.js",
        "src/automation/augmentPlanner.js",
        "src/gui/dashboard.js",
        "src/gui/hotbar.js",
        "src/gui/logPanel.js",
        "src/gui/style.css",
        "src/cli/commandRouter.js",
        "src/tools/scanner.js",
        "src/tools/statsCollector.js",
        "modes/full/init.js",
        "modes/lite/init.js",
        "tests/integrityVerifier.js",
        "docs/debugChecklist.md",
        "help/overlay.html",
        "help/cliHelp.md"
    ];

    for (const file of files) {
        const url = base + file;
        const success = await ns.wget(url, file);
        if (success) {
            ns.tprint(`✅ Downloaded: ${file}`);
        } else {
            ns.tprint(`❌ Failed to download: ${file}`);
        }
        await ns.sleep(200); // Prevent rate-limit
    }

    ns.tprint("🚀 Smart Suite installation complete. Run launcher.js to begin.");
}

