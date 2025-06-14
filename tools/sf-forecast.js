/** @param {NS} ns */
export async function main(ns) {
    const owned = ns.getOwnedSourceFiles().map(f => f.n);
    const priority = [9, 4, 3, 2, 10, 8, 7, 6, 5, 11, 12, 1, 13];

    ns.tprint("🔮 Recommended SF Route:");
    for (const sf of priority) {
        const status = owned.includes(sf) ? "✔️" : "🟥";
        ns.tprint(`${status} SF${sf}`);
    }
}

