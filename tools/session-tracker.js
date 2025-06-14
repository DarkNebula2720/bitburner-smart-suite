/** @param {NS} ns */
export async function main(ns) {
    const timestamp = new Date().toISOString();
    const node = ns.getResetInfo().currentNode;
    const installed = ns.getOwnedAugmentations(true).length;
    const entry = `${timestamp} | BN${node} | ${installed} total augs\n`;
    await ns.write("/logs/session-history.txt", entry, "a");
    ns.tprint("📝 Session entry recorded.");
}

