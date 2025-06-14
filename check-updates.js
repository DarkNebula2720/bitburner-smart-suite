/** @param {NS} ns */
export async function main(ns) {
    const local = JSON.parse(ns.read("/data/suite-version.json"));
    const remote = JSON.parse(ns.read("/data/remote-version.json"));
    ns.tprint(`🔎 Local Version: ${local.version}`);
    ns.tprint(`🌐 Remote Version: ${remote.version}`);

    if (local.version === remote.version) {
        ns.tprint("✅ Suite is up to date.");
    } else {
        ns.tprint("⚠️ Update available!");
        ns.tprint(`📄 Notes: ${remote.notes.join("\n- ")}`);
    }
}

