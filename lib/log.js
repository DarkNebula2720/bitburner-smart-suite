// lib/log.js
export function log(ns, msg) {
    ns.print(`[LOG] ${msg}`);
    ns.tprint(`[LOG] ${msg}`);
}
