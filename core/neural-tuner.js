/** @param {NS} ns */
export async function main(ns) {
    const logFile = "/data/global-performance.json";
    const data = ns.read(logFile);
    const entries = JSON.parse(data);
    const recent = entries.slice(-5);

    let bestAugPerHour = 0;
    for (const entry of recent) {
        const augs = entry.augs || 1;
        const timeH = 1;
        const rate = augs / timeH;
        if (rate > bestAugPerHour) bestAugPerHour = rate;
    }

    ns.tprint(`📈 Neural-tuned augment rate: ~${bestAugPerHour.toFixed(2)} augs/hr`);
    // TODO: Use this to inform strategy profile switching
}

