/**
 * Global Error Wrapper – Safe loop guard
 * Usage: await safeLoop(ns, fn)
 */

/** @param {NS} ns */
export async function safeLoop(ns, loopFn, name = "unnamed") {
    try {
        await loopFn();
    } catch (e) {
        const msg = `[${name} crashed] ${e}`;
        ns.tprint(msg);
        await ns.write("logs/crash.log", `${msg}
`, "a");
    }
}

