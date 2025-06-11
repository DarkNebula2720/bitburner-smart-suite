/** @param {NS} ns **/
export async function main(ns) {
    ns.ui.clearTerminal();
    ns.tail();
    ns.ui.setTheme({ 'primary': '#00FF00' });
    ns.tprint("==== Smart Suite Control Panel ====");
    ns.tprint("[1] Pause All");
    ns.tprint("[2] Resume All");
    ns.tprint("[3] Show Status");
    ns.tprint("[4] Trigger Reset");
}
