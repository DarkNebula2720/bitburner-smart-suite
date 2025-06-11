/** @param {NS} ns */
import { scoreGoals } from "/lib/goal-scorer.js";

export async function main(ns) {
    const goals = JSON.parse(ns.read("/data/goal-definitions.json"));
    const sorted = scoreGoals(goals).sort((a, b) => b.score - a.score);
    const best = sorted[0];
    ns.tprint(`🎯 Priority Goal: ${best.name} (Score: ${best.score})`);
}

