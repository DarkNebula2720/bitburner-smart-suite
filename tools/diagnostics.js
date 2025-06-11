/** @param {NS} ns **/
export async function main(ns) {
    const servers = ns.scan().filter(s => ns.hasRootAccess(s));
    const orphaned = servers.filter(s => ns.ps(s).length === 0);
    const ramWasted = servers.reduce((acc, s) => acc + ns.getServerMaxRam(s) - ns.getServerUsedRam(s), 0);
    const active = ns.ps("home").length;
    const start = performance.now();
    for (let i = 0; i < 1e6; i++) {} // Dummy CPU load
    const lag = performance.now() - start;

    ns.tprint("=== Diagnostics Report ===");
    ns.tprint(`Orphaned servers: ${orphaned.length}`);
    ns.tprint(`Wasted RAM: ${ns.formatRam(ramWasted, 2)}`);
    ns.tprint(`Active scripts: ${active}`);
    ns.tprint(`Estimated lag: ${lag.toFixed(2)}ms`);
}
