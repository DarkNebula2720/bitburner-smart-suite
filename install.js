// install.js – Smart Suite GitHub Installer
export async function main(ns) {
    const repo = "DarkNebula2720/bitburner-smart-suite";
    const branch = "main"; // or change if you use another
    const baseUrl = `https://raw.githubusercontent.com/${repo}/${branch}/`;

    const files = [
        // Root level
        "install.js", "daemon.js", "kill-all.js", "cleaner.js", "git-pull.js",
        "smart-orchestrator.js", "auto-singularity-pilot.js",
        "config-ui.js", "global-state-tracker.js", "smart-hacknet-manager.js",
        "bitnode-strategy-engine.js", "adaptive-hack-strategy.js",
        // Core folders
        "core/init.js", "core/utils.js", "core/constants.js",
        "tools/hacknet-optimizer.js", "tools/faction-roadmap.js",
        "ui/smart-visual-dashboard.js", "ui/theme-toggler.js",
        "modules/sf-auto-buyer.js", "modules/smart-stock-trader.js"
        // Add more if needed
    ];

    for (const file of files) {
        const url = `${baseUrl}${file}`;
        const result = await ns.wget(url, file);
        if (result) {
            ns.tprint(`✅ Downloaded: ${file}`);
        } else {
            ns.tprint(`❌ Failed: ${file}`);
        }
    }

    ns.tprint("🎉 Smart Suite install complete. Run smart-orchestrator.js to begin.");
}
