// lib/scan.js
export function scanAll(ns, host = "home", seen = new Set()) {
    seen.add(host);
    for (const neighbor of ns.scan(host)) {
        if (!seen.has(neighbor)) scanAll(ns, neighbor, seen);
    }
    return [...seen];
}
