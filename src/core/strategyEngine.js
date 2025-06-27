/**
 * Adaptive Strategy Engine – Adjusts strategy based on current game progression
 */

/** @param {NS} ns **/
export async function main(ns) {
    const player = ns.getPlayer();
    const factions = player.factions.length;
    const hackLevel = player.hacking;
    const karma = ns.heart.break();

    let phase = "early";

    if (factions > 5 || hackLevel > 500) phase = "mid";
    if (hackLevel > 1500 || karma < -54000) phase = "late";

    ns.tprint(\`[StrategyEngine] Detected Phase: \${phase}\`);

    switch (phase) {
        case "early":
            ns.run("src/automation/smartHack.js");
            ns.run("src/automation/hacknetManager.js");
            break;
        case "mid":
            ns.run("src/automation/factionFarmer.js");
            ns.run("src/automation/augmentPlanner.js");
            break;
        case "late":
            ns.run("src/automation/smartHack.js");
            ns.run("src/automation/augmentPlanner.js");
            ns.run("tools/performanceProfiler.js");
            break;
    }
}

