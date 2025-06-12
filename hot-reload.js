/** @param {NS} ns */
export async function main(ns) {
    const watched = ["/core/daemon.js", "/lib/goal-scorer.js"];
    for (const f of watched) {
        if (ns.isRunning(f, "home")) ns.kill(f);
        await ns.run(f, 1);
        ns.tprint(`♻️ Reloaded ${f}`);
    }
}

