/** @param {NS} ns **/
export async function main(ns) {
    const saveFile = "/data/global-state.txt";
    let data = {};
    try { data = JSON.parse(ns.read(saveFile)); } catch {}

    data.lastBitnode = ns.getPlayer().bitNodeN;
    data.lastMoney = ns.getServerMoneyAvailable("home");

    ns.write(saveFile, JSON.stringify(data, null, 2), "w");
    ns.tprint("Global state saved.");
}
