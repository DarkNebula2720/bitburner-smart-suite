/**
 * Resource Monitor – checks system resources and adjusts automation based on available RAM.
 */

/** @param {NS} ns **/
export async function main(ns) {
    const max = ns.getServerMaxRam("home");
    const used = ns.getServerUsedRam("home");
    const free = max - used;
    const percentFree = ((free / max) * 100).toFixed(2);

    ns.tprint(\`[ResourceMonitor] RAM: \${free.toFixed(2)} GB free (\${percentFree}%)\`);

    if (free < 16) {
        ns.tprint("[ResourceMonitor] ⚠️ Low RAM. Disabling non-essential scripts...");
        const nonCritical = ["gui/dashboard.js", "gui/hotbar.js", "tools/statsCollector.js"];
        for (const script of nonCritical) {
            if (ns.isRunning(script)) {
                ns.scriptKill(script, "home");
                ns.tprint(\`[ResourceMonitor] 🔻 Killed \${script}\`);
            }
        }
    }
}

