/** @param {NS} ns */
export async function main(ns) {
    ns.tprint("📦 Source File Auto-Purchase Starting...");
    const sfList = [1, 2, 3, 4, 5, 6, 8, 9];

    for (const sf of sfList) {
        const hasSF = ns.getOwnedSourceFiles().some(s => s.n === sf);
        if (!hasSF && ns.getPlayer().bitNodeN === sf) {
            try {
                ns.tprint(`🎯 Attempting to purchase Source File ${sf}...`);
                ns.singularity.purchaseSourceFile(sf);
            } catch (e) {
                ns.tprint(`⚠️ Could not purchase SF${sf}: ${e}`);
            }
        }
    }
}

