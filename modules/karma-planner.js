/** @param {NS} ns */
export async function main(ns) {
    const karma = ns.heart.break();
    const goal = -54000;
    const remaining = goal - karma;
    const crimeList = ["Homicide", "Mug", "Larceny"];
    let crime = "Shoplift";
    if (ns.getPlayer().strength > 50) crime = "Mug";
    if (ns.getPlayer().strength > 75 && ns.getPlayer().defense > 75) crime = "Homicide";

    ns.tprint(`😈 Current karma: ${karma.toFixed(2)} / Target: ${goal}`);
    ns.tprint(`📉 Remaining: ${remaining.toFixed(2)} | Optimal crime: ${crime}`);

    while (ns.heart.break() > goal) {
        await ns.commitCrime(crime);
        await ns.sleep(3000);
    }
    ns.tprint("✅ Karma goal reached!");
}

