/** @param {NS} ns **/
export async function main(ns) {
    const node = ns.getPlayer().bitNodeN;
    const sourceFiles = ns.getOwnedSourceFiles();
    ns.tprint("Current Bitnode: " + node);
    for (const sf of sourceFiles) {
        ns.tprint("Source File " + sf.n + " Level: " + sf.lvl);
    }
}
