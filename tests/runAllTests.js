/**
 * Smart Suite Test Runner – Runs all core test scripts.
 */

/** @param {NS} ns **/
export async function main(ns) {
    ns.tprint("[TestRunner] Running integrity verifier...");
    await ns.run("tests/integrityVerifier.js");
    // Add more test scripts here as needed
}
