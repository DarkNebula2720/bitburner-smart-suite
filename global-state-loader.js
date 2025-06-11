/** @param {NS} ns **/
export async function main(ns) {
    const saveFile = "/data/global-state.txt";
    if (!ns.fileExists(saveFile)) {
        ns.tprint("No global state data found.");
        return;
    }
    const data = JSON.parse(ns.read(saveFile));
    ns.tprint("Restored Bitnode: " + data.lastBitnode);
    ns.tprint("Last Known Money: $" + data.lastMoney.toLocaleString());
}
