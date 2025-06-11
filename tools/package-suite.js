/** @param {NS} ns */
export async function main(ns) {
    const manifest = JSON.parse(ns.read("/data/manifest.json"));
    const exportList = manifest.files.filter(f => !f.includes("log") && !f.includes("tmp"));
    ns.write("/data/package-list.txt", exportList.join("\n"), "w");
    ns.tprint(`📦 Generated export list with ${exportList.length} files.`);
}

