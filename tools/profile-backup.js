/** @param {NS} ns */
export async function main(ns) {
    const profile = ns.args[0] || "default";
    const cfg = ns.read("/data/smart-config.json");
    const path = `/data/profiles/${profile}/smart-config-backup.json`;
    await ns.write(path, cfg, "w");
    ns.tprint(`💾 Backup saved to ${path}`);
}

