/** @param {NS} ns **/
export async function main(ns) {
    const maxRam = ns.getServerMaxRam("home");
    const usedRam = ns.getServerUsedRam("home");
    const buffer = 16; // reserve 16GB for priority tasks
    const usable = maxRam - usedRam - buffer;
    if (usable < 4) {
        ns.kill("smart-visual-dashboard.js");
        ns.tprint("Smart RAM balancer: Low RAM, offloading dashboard.");
    }
}
