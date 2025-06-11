/** @param {NS} ns **/
export async function main(ns) {
    while (true) {
        const player = ns.getPlayer();
        const money = ns.getServerMoneyAvailable("home");
        const augs = ns.getOwnedAugmentations(true).length;
        const rep = player.factions.map(f => `${f}: ${ns.singularity.getFactionRep(f).toFixed(0)}`).join("\n");
        const html = \`
        <div style="padding:10px;font:12px monospace;background:#111;color:#0f0;">
            <b>Smart Suite Dashboard</b><br>
            Money: \$${ns.nFormat(money, "0.0a")}<br>
            Augs Owned: ${augs}<br>
            Faction Rep:<br>
            <pre>${rep}</pre>
        </div>\`;
        ns.ui.clear();
        ns.ui.appendToScreen(html);
        await ns.sleep(5000);
    }
}

