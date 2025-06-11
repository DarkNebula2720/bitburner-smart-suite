/** @param {NS} ns */
export async function main(ns) {
    const files = ns.ls("home", "/plugins/").filter(f => f.endsWith(".js"));
    const log = [];

    for (const file of files) {
        try {
            ns.tprint(`🔌 Loading plugin: ${file}`);
            ns.run(file, 1);
            log.push({ file, status: "loaded" });
        } catch (err) {
            log.push({ file, status: "failed", error: err.toString() });
        }
    }

    await ns.write("/data/plugins.json", JSON.stringify(log, null, 2), "w");
}

