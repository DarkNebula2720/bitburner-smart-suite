/** @param {NS} ns */
import { getNextSourceFile } from "/core/sf-loop-strategy.js";

export async function main(ns) {
    const next = getNextSourceFile(ns);
    if (!next) return ns.tprint("🎉 All SF goals met!");

    ns.tprint(`🔁 Target: ${next.sf} (${next.currentLevel} → ${next.targetLevel})`);
    ns.tprint("🔄 Ready to install and switch if conditions met...");
    // Auto-reset flow would be triggered here
}

