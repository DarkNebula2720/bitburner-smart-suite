/** @param {NS} ns */
import { getAvailableAugmentations } from "/lib/augment-utils.js";

export async function main(ns) {
    ns.tprint("🌲 Augment Tree Planner Started");
    const available = getAvailableAugmentations(ns);

    const tree = {};
    for (const aug of available) {
        const prereqs = ns.getAugmentationPrereq(aug.name) || [];
        tree[aug.name] = { prereqs, cost: aug.cost };
    }

    const plan = [];
    const visited = new Set();
    function visit(aug) {
        if (visited.has(aug)) return;
        visited.add(aug);
        const prereqs = tree[aug]?.prereqs || [];
        for (const pre of prereqs) visit(pre);
        plan.push(aug);
    }

    for (const aug of Object.keys(tree)) visit(aug);

    ns.tprint("Recommended Purchase Order:");
    plan.forEach(a => ns.tprint(` → ${a}`));
}


