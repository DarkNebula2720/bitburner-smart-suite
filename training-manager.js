/** @param {NS} ns **/
export async function main(ns) {
    if (ns.getPlayer().hacking < 100) {
        await ns.universityCourse("rothman university", "Algorithms", true);
    } else if (ns.getPlayer().strength < 50) {
        await ns.gymWorkout("powerhouse gym", "Strength", true);
    }
}
