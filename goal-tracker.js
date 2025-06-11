/** @param {NS} ns **/
export async function main(ns) {
    const sf = ns.getOwnedSourceFiles().map(sf => sf.n);
    const goals = [
        { name: "Earn 1B", condition: () => ns.getServerMoneyAvailable("home") > 1e9 },
        { name: "SF3 Unlocked", condition: () => sf.includes(3) },
        { name: "20 Augs Owned", condition: () => ns.getOwnedAugmentations(true).length >= 20 }
    ];
    ns.tprint("=== Current Goals ===");
    for (let g of goals) {
        ns.tprint(`${g.name}: ${g.condition() ? "✓ Completed" : "✗ In Progress"}`);
    }
}
