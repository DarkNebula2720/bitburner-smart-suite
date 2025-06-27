/**
 * Auto Recovery – ensures essential scripts are running after reset or crash
 */

/** @param {NS} ns **/
export async function main(ns) {
    const essential = [
        "src/core/scheduler.js",
        "tools/cleaner.js",
        "tools/scanner.js"
    ];

    for (const script of essential) {
        const isRunning = ns.isRunning(script, "home");
        if (!isRunning) {
            ns.run(script, 1);
            ns.tprint(\`[Recovery] Relaunched \${script}\`);
            await ns.sleep(500);
        }
    }

    ns.tprint("[Recovery] Auto-recovery check complete.");
}

