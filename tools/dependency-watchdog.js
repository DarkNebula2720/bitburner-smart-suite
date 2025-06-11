/** @param {NS} ns **/
export async function main(ns) {
    const deps = [
        "/core/error-handler.js",
        "/lib/smart-logger.js",
        "/smart-orchestrator.js",
        "/daemon.js"
    ];
    for (const dep of deps) {
        if (!ns.fileExists(dep)) {
            ns.tprint(`[MISSING] ${dep} not found! Please re-download the suite.`);
        }
    }
}
