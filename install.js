/** @param {NS} ns **/
export async function main(ns) {
    const base = "https://raw.githubusercontent.com/DarkNebula2720/bitburner-smart-suite/main/";
    const files = [
        "daemon.js",
        "core/daemon-core.js",
        "core/strategy-engine.js",
        "core/augmentation-controller.js",
        "core/hacknet-optimizer.js",
        "core/faction-optimizer.js",
        "core/bitnode-planner.js",
        "core/auto-installer.js",
        "lib/utils.js",
        "lib/constants.js",
        "lib/ui-handler.js",
        "lib/logger.js",
        "tools/diagnostics.js",
        "tools/cache-engine.js",
        "ui/command-overlay.js",
        "assistant/assistant.js",
        "core/task-engine.js",
        "install.js"
    ];

    ns.tprint("=== Smart Suite Installer ===");
    for (const f of files) {
        try {
            const url = base + f;
            ns.tprint(`Downloading: ${f} ...`);
            await ns.wget(url, f, "home");
            ns.tprint(`✓ ${f} installed.`);
        } catch (err) {
            ns.tprint(`✗ Failed to download ${f}: ${err}`);
        }
        await ns.sleep(100); // slight delay for status clarity
    }

    ns.tprint("✔ All components fetched. Launching daemon...");
    ns.run("daemon.js", 1);
}
