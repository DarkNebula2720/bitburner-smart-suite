/** @param {NS} ns **/
export async function main(ns) {
    const input = ns.args.join(" ").toLowerCase();
    if (!input) {
        ns.tprint("Ask me something. For example: 'What augments can I buy?'");
        return;
    }

    if (input.includes("augments") || input.includes("augmentations")) {
        const factions = ns.getPlayer().factions;
        let augments = [];
        for (let faction of factions) {
            augments = augments.concat(ns.getAugmentationsFromFaction(faction));
        }
        const unique = [...new Set(augments)];
        ns.tprint("You can access these augmentations:
" + unique.join("
"));
        return;
    }

    if (input.includes("best target")) {
        const servers = ns.scan().filter(s => ns.hasRootAccess(s) && ns.getServerMaxMoney(s) > 0);
        let best = servers.sort((a, b) => ns.getServerMaxMoney(b) - ns.getServerMaxMoney(a))[0];
        ns.tprint(`Best target currently: ${best}`);
        return;
    }

    if (input.includes("money") && input.includes("needed")) {
        const owned = ns.getOwnedAugmentations(true);
        const unowned = ns.getOwnedAugmentations(false).filter(x => !owned.includes(x));
        let total = 0;
        for (let a of unowned) {
            try {
                total += ns.getAugmentationPrice(a);
            } catch {}
        }
        ns.tprint(`You need about $${ns.formatNumber(total)} to buy all unowned augmentations.`);
        return;
    }

    ns.tprint("Sorry, I don't understand. Try: 'What augments can I buy?' or 'Best target?'");
}
