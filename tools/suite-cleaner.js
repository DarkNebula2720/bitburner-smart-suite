/** @param {NS} ns */
export async function main(ns) {
    const files = ns.ls("home").filter(f => f.startsWith("/core/") || f.startsWith("/modules/") || f.startsWith("/lib/"));
    for (const file of files) {
        if (file.includes("daemon")) continue; // avoid killing core
        ns.rm(file);
        ns.tprint(`🧹 Removed: ${file}`);
    }
    ns.tprint("✅ Suite cleaned (partial wipe).");
}

