/** @param {NS} ns **/
export function log(ns, level, msg) {
    const timestamp = new Date().toISOString().split("T")[1].split(".")[0];
    const tag = `[${level.toUpperCase()} @ ${timestamp}]`;
    ns.print(`${tag} ${msg}`);
    ns.tprint(`${tag} ${msg}`);
}
