/** 
 * Smart Suite Launcher – Prompts or auto-detects mode (Full/Lite, Auto/Manual)
 * Usage: run launcher.js --auto OR --manual
 * If no args, prompts the user on first launch
 */

/** @param {NS} ns */
export async function main(ns) {
    const configFile = "config.json";
    let mode = ns.args.includes("--manual") ? "manual" :
               ns.args.includes("--auto") ? "auto" : null;

    if (!ns.fileExists(configFile)) {
        if (!mode) {
            mode = await ns.prompt("Select mode: auto or manual?");
        }
        const version = await ns.prompt("Full or Lite version?");
        ns.write(configFile, JSON.stringify({ behavior: mode, mode: version }), "w");
        ns.tprint(`[SmartSuite] Saved settings: ${version} (${mode})`);
    } else {
        const config = JSON.parse(ns.read(configFile));
        mode = mode || config.behavior;
        const version = config.mode;
        ns.tprint(`[SmartSuite] Launching in ${version.toUpperCase()} Mode (${mode})`);
        const path = `modes/${version}/init.js`;
        if (ns.fileExists(path)) {
            ns.run(path, 1);
        } else {
            ns.tprint(`[SmartSuite] ERROR: Entry point not found for ${version} mode`);
        }
    }
}

