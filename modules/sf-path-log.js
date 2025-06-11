/** @param {NS} ns */
import { getNextSourceFile } from "/core/sf-loop-strategy.js";

export async function main(ns) {
    const next = getNextSourceFile(ns);
    if (next) {
        ns.tprint(`🧭 Next SF: ${next.sf} | Goal: Level ${next.targetLevel}`);
    } else {
        ns.tprint("✅ No remaining SF targets. Suite complete.");
    }
}

