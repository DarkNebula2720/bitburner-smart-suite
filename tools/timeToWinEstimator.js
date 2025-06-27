/**
 * Time-to-Win Estimator – projects time remaining to game goals based on current state.
 */

/** @param {NS} ns **/
export async function main(ns) {
    const hack = ns.getHackingLevel();
    const money = ns.getServerMoneyAvailable("home");
    const augments = ns.getOwnedAugmentations(false).length;
    const requiredHack = 2500;
    const requiredMoney = 1e9;
    const requiredAugments = 10;

    const progress = {
        hacking: Math.min((hack / requiredHack) * 100, 100),
        money: Math.min((money / requiredMoney) * 100, 100),
        augments: Math.min((augments / requiredAugments) * 100, 100),
    };

    const avg = (progress.hacking + progress.money + progress.augments) / 3;

    const etaHours = ((100 - avg) / 5).toFixed(1); // basic estimate

    const report = \`
=== TIME TO WIN ESTIMATE ===
Progress:
- Hacking: \${progress.hacking.toFixed(1)}%
- Money:   \${progress.money.toFixed(1)}%
- Augments:\${progress.augments.toFixed(1)}%

📊 Projected Time to Win: ~\${etaHours} hours
\`;

    await ns.write("logs/ttw-estimate.txt", report, "w");
    ns.tprint("[TTW] Estimate written to logs/ttw-estimate.txt");
}

