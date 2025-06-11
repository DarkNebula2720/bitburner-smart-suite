/** @param {NS} ns */
export async function main(ns) {
    const files = ns.ls("home").filter(f => f.endsWith(".js") || f.endsWith(".html") || f.endsWith(".json"));
    await ns.write("/data/manifest.json", JSON.stringify({ files }, null, 2), "w");
    ns.tprint(`📦 Created manifest with ${files.length} files.`);
}

