/** @param {NS} ns **/
export async function main(ns) {
    if (!ns.gang.inGang()) {
        ns.tprint("Not currently in a gang.");
        return;
    }
    const members = ns.gang.getMemberNames();
    for (let name of members) {
        const stats = ns.gang.getMemberInformation(name);
        if (stats.wantedLevelGainRate > 0.01) {
            ns.gang.setMemberTask(name, "Vigilante Justice");
        } else {
            ns.gang.setMemberTask(name, "Human Trafficking");
        }
    }
    ns.tprint("Gang optimized.");
}
