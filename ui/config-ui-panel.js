/** @param {NS} ns */
import { getConfig, saveConfig } from "/lib/config-manager.js";

/** Renders a basic configuration panel using tail window */
export async function main(ns) {
    ns.disableLog("ALL");
    ns.clearLog();
    ns.ui.openTail("config-ui-panel.js");

    let config = getConfig(ns);
    while (true) {
        ns.clearLog();
        ns.print("⚙️  Smart Suite Configuration Panel");
        ns.print("Auto-Augs: " + (config.autoAugments ? "✅ ON" : "❌ OFF"));
        ns.print("Learning AI: " + (config.enableLearning ? "✅ ON" : "❌ OFF"));
        ns.print("Reset Auto-Install: " + (config.autoReset ? "✅ ON" : "❌ OFF"));
        ns.print("\nUse hotkeys in config-manager.js to toggle live.");
        await ns.sleep(3000);
    }
}

