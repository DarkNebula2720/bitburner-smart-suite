/** @param {NS} ns */
export async function main(ns) {
    const profile = ns.args[0] || "default";
    const path = `/data/profiles/${profile}/smart-config.json`;
    if (!ns.fileExists(path)) {
        ns.tprint(`⚠️ Profile not found: ${profile}`);
        return;
    }
    const config = ns.read(path);
    await ns.write("/data/smart-config.json", config, "w");
    ns.tprint(`👤 Loaded profile: ${profile}`);
}

