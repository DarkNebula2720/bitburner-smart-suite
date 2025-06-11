/** @param {NS} ns */
export function getRamLoad(ns, host) {
    const used = ns.getServerUsedRam(host);
    const max = ns.getServerMaxRam(host);
    return max > 0 ? (used / max).toFixed(2) : 0;
}

/** @param {NS} ns */
export function findUnderutilized(ns, threshold = 0.5) {
    return ns.getPurchasedServers().filter(s => {
        const load = getRamLoad(ns, s);
        return load < threshold;
    });
}

