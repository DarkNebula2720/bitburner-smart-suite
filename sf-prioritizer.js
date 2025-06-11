/** @param {NS} ns **/
export async function main(ns) {
    const desiredOrder = [9, 4, 3, 2, 1]; // Customizable SF priority
    const owned = ns.getOwnedSourceFiles().map(sf => sf.n);
    const toGet = desiredOrder.filter(sf => !owned.includes(sf));

    ns.tprint("Recommended Source Files to Target:");
    for (const sf of toGet) {
        ns.tprint("  - Source File " + sf);
    }
}
