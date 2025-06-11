/** @param {NS} ns */
export async function main(ns) {
    const file = "/data/bn-memory.json";
    if (!ns.fileExists(file)) return ns.tprint("No BN memory file found.");
    const memory = JSON.parse(ns.read(file));
    for (const [bn, data] of Object.entries(memory)) {
        ns.tprint(`🧠 ${bn} | Runtime: ${data.runtimeHours}h | Augs: ${data.augmentCount} | Success: ${data.success}`);
    }
}

