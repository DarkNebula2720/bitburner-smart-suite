import { assertEqual } from "/lib/assert.js";
/** @param {NS} ns */
export async function main(ns) {
    const results = [];
    try { results.push(assertEqual(2 + 2, 4, "Basic math")); }
    catch (e) { results.push(e.message); }
    await ns.write("/logs/test-results.txt", results.join("\n"), "w");
}

