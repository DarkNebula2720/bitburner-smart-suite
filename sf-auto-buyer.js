/** @param {NS} ns **/
export async function main(ns) {
    const owned = ns.getOwnedSourceFiles().map(sf => sf.n);
    for (let i = 1; i <= 13; i++) {
        if (!owned.includes(i) && ns.singularity.purchaseSourceFile(i)) {
            ns.tprint("Purchased Source File: " + i);
        }
    }
}
