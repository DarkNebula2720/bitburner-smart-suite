/** @param {NS} ns */
export async function main(ns) {
    const roadmap = JSON.parse(ns.read("/data/roadmap.json"));
    const bn = ns.getPlayer().bitNodeN.toString();
    if (roadmap[bn]) {
        ns.tprint(`🗺 BitNode ${bn} Roadmap:`);
        roadmap[bn].forEach((step, i) => ns.tprint(` ${i + 1}. ${step}`));
    } else {
        ns.tprint("No roadmap found for this BitNode.");
    }
}

