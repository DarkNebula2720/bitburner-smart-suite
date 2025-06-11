/** @param {NS} ns **/
export async function main(ns) {
    if (!ns.bladeburner) {
        ns.tprint("Bladeburner not available.");
        return;
    }
    while (true) {
        const action = ns.bladeburner.getCurrentAction();
        ns.tprint(`Current Bladeburner Action: ${action.name}`);
        await ns.sleep(30000);
    }
}

