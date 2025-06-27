/**
 * Performance Profiler – evaluates runtime and efficiency of functions/scripts
 */

/** @param {NS} ns **/
export async function main(ns) {
    const scripts = [
        "src/automation/smartHack.js",
        "src/automation/factionFarmer.js",
        "src/automation/hacknetManager.js"
    ];

    for (const script of scripts) {
        if (ns.fileExists(script)) {
            ns.tprint(\`[Profiler] Profiling: \${script}\`);
            ns.run("profiler.js", 1, script);
            await ns.sleep(3000); // stagger runs
        } else {
            ns.tprint(\`[Profiler] ⚠️ Missing script: \${script}\`);
        }
    }

    ns.tprint("[Profiler] Launched profiling on major modules.");
}

