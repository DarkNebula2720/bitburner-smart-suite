/** @param {NS} ns */
import { scoreGoals } from "/lib/goal-scorer.js";

export async function main(ns) {
    const goals = JSON.parse(ns.read("/data/goal-definitions.json"));
    const scored = scoreGoals(goals);
    scored.sort((a, b) => b.score - a.score);
    for (const goal of scored) {
        ns.tprint(`🏁 ${goal.name} — Score: ${goal.score}`);
    }
}
