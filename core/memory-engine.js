let memoryKey = "/data/bitburner-memory.txt";

/** @param {NS} ns **/
export async function main(ns) {
    if (!ns.fileExists(memoryKey)) {
        await ns.write(memoryKey, JSON.stringify({}), "w");
    }

    const memory = JSON.parse(ns.read(memoryKey));

    const current = {
        bitnode: ns.getResetInfo().currentNode,
        sf: ns.getOwnedSourceFiles().map(sf => ({ n: sf.n, lvl: sf.lvl })),
        time: Date.now(),
        strategy: "auto",
    };

    memory[`BN${current.bitnode}`] = current;
    await ns.write(memoryKey, JSON.stringify(memory, null, 2), "w");

    ns.tprint("Memory updated for Bitnode " + current.bitnode);
}
