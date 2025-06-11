/** @param {NS} ns */
export async function main(ns) {
    const files = ["/data/smart-config.json", "/data/global-performance.json", "/data/bn-memory.json"];
    for (const file of files) {
        if (ns.fileExists(file)) {
            const backupPath = file.replace("/data/", "/backup/");
            const contents = ns.read(file);
            await ns.write(backupPath, contents, "w");
            ns.tprint(`🔁 Backed up ${file} to ${backupPath}`);
        }
    }
}

