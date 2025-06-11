/** @param {NS} ns */
import { getMissionGoals } from "/lib/mission-tracker.js";

/** Displays goals in terminal if no HTML UI used */
export async function main(ns) {
    const goals = getMissionGoals(ns);
    for (const goal of goals) {
        const symbol = goal.status === "done" ? "✓" : goal.status === "pending" ? "…" : "✗";
        ns.tprint(`${symbol} ${goal.name}`);
    }
}

