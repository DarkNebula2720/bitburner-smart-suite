/** @param {NS} ns **/
export async function main(ns) {
    const flags = ns.flags([
        ['bitnode', 1],
        ['style', 'balanced'],
        ['augmentPriority', 'NeuroFlux Governor']
    ]);
    const config = {
        bitnode: flags.bitnode,
        style: flags.style,
        augments: [flags.augmentPriority],
    };
    await ns.write('/data/smart-config.json', JSON.stringify(config, null, 2), "w");
    ns.tprint("Smart config generated.");
}
