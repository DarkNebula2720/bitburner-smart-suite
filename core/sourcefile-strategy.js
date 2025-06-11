/** @param {NS} ns **/
export async function main(ns) {
    const sf = ns.getOwnedSourceFiles();
    const sfMap = Object.fromEntries(sf.map(s => [s.n, s.lvl]));

    let strategy = "hacking";

    if (sfMap[3]) strategy = "corporation";
    if (sfMap[4]) strategy = "hacknet";
    if (sfMap[5]) strategy = "infiltration";
    if (sfMap[10]) strategy = "sleeves";
    if (sfMap[12]) strategy = "singularity";

    ns.tprint("Source File levels detected:");
    for (const [num, lvl] of Object.entries(sfMap)) {
        ns.tprint(`  SF-${num}: Level ${lvl}`);
    }

    ns.tprint(`Recommended strategy: ${strategy}`);
    ns.run("core/strategy-engine.js", 1, "--mode", strategy);
}
