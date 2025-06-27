/**
 * Smart Cleaner – Removes all non-essential files and folders
 * Backs up important configs before cleaning
 */

/** @param {NS} ns **/
export async function main(ns) {
    const essentialFiles = [
        "launcher.js",
        "installer.js",
        "config.json",
        "tools/cleaner.js"
    ];

    const foldersToKeep = ["src", "modes", "logs", "data"];
    const all = ns.ls("home", "");

    for (const file of all) {
        if (!essentialFiles.includes(file) && !foldersToKeep.some(f => file.startsWith(f))) {
            ns.rm(file);
            ns.tprint(`[Cleaner] Removed: ${file}`);
        }
    }

    // Backup config
    if (ns.fileExists("config.json")) {
        await ns.write("config.backup.json", await ns.read("config.json"), "w");
        ns.tprint("[Cleaner] config.json backed up to config.backup.json");
    }

    ns.tprint("[Cleaner] Cleanup complete.");
}

