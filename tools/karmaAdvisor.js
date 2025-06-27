/**
 * Karma/Faction Alignment Advisor – gives feedback on karma levels and faction unlock paths.
 */

/** @param {NS} ns **/
export async function main(ns) {
    const karma = ns.heart.break();
    const crimes = [
        { name: "Shoplift", karma: -0.1 },
        { name: "Mug", karma: -0.25 },
        { name: "Homicide", karma: -3.0 }
    ];

    let advice = "[KarmaAdvisor]\n";
    advice += \`Current Karma: \${karma.toFixed(2)}\n\n\`;

    if (karma > -54000) {
        const needed = -54000 - karma;
        const approxCrimes = Math.ceil(needed / 3);
        advice += \`You need ~\${approxCrimes} Homicides to unlock gang-related factions.\n\n\`;
    } else {
        advice += "✅ You are eligible for gang factions.\n\n";
    }

    advice += "Crime Karma Summary:\n";
    for (const c of crimes) {
        advice += \`- \${c.name}: \${c.karma} karma\n\`;
    }

    await ns.write("logs/karma-advice.txt", advice, "w");
    ns.tprint("[KarmaAdvisor] Advice written to logs/karma-advice.txt");
}

