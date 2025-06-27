/**
 * Version Snapshot Export – captures timestamped system state for debugging/testing
 */

/** @param {NS} ns **/
export async function main(ns) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const snapshot = {
        time: new Date().toISOString(),
        bitnode: ns.getPlayer().bitNodeN,
        money: ns.getServerMoneyAvailable("home"),
        augments: ns.getOwnedAugmentations(true),
        factions: ns.getPlayer().factions,
        scripts: ns.ps("home")
    };

    const filename = \`snapshots/version-\${timestamp}.json\`;
    await ns.write(filename, JSON.stringify(snapshot, null, 2), "w");
    ns.tprint(\`[Snapshot] Exported current version to \${filename}\`);
}

