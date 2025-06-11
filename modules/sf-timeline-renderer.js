/** @param {NS} ns */
import { getSFPlan } from "/lib/sf-path-data.js";

export async function main(ns) {
    const plan = getSFPlan(ns);
    for (const [sf, data] of Object.entries(plan)) {
        const owned = data.owned ? `✓ SF${sf} (Lv ${data.level})` :
                      data.target ? `★ SF${sf} → Target Lv ${data.target}` :
                      `✗ SF${sf}`;
        ns.tprint(owned);
    }
}

