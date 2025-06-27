/**
 * A/B Testing Framework – allows side-by-side comparison of alternate scripts
 * for optimization analysis.
 */

/** @param {NS} ns **/
export async function main(ns) {
    const [scriptA, scriptB] = ns.args;
    if (!scriptA || !scriptB) {
        ns.tprint("Usage: run aBTestFramework.js scriptA.js scriptB.js");
        return;
    }

    const aPID = ns.run(scriptA, 1, "--test");
    const bPID = ns.run(scriptB, 1, "--test");

    ns.tprint(\`[A/B Test] Running \${scriptA} (PID: \${aPID}) vs \${scriptB} (PID: \${bPID})\`);

    await ns.sleep(60000); // Let each run for 1 minute

    if (ns.isRunning(aPID)) ns.scriptKill(scriptA, "home");
    if (ns.isRunning(bPID)) ns.scriptKill(scriptB, "home");

    ns.tprint("[A/B Test] Comparison complete. Check logs or profiler results.");
}

