/** @param {NS} ns */
export async function main(ns) {
    const manifest = JSON.parse(ns.read("/data/manifest.json"));
    for (const file of manifest.files) {
        if (ns.fileExists(file)) {
            ns.rm(file);
            ns.tprint(`❌ Removed ${file}`);
        }
    }
    ns.tprint("✅ Smart Suite uninstalled.");
}

