/** @param {NS} ns **/
export async function main(ns) {
    const bn = ns.getPlayer().bitNodeN;
    switch (bn) {
        case 2:
            ns.run("bn2-priority-focus.js"); break;
        case 3:
            ns.run("bn3-corporate-bootstrap.js"); break;
        case 8:
            ns.run("smart-stock-trader.js"); break;
        case 10:
            ns.run("bn10-specialized-network.js"); break;
        default:
            ns.tprint("No specific strategy. Running default daemon.");
            ns.run("daemon.js");
    }
}
