/**
 * Smart Logger – Tagged, leveled logging
 * Supports: info, warn, error, debug
 */

export function log(ns, msg, level = "info") {
    const tag = {
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR]",
        debug: "[DEBUG]"
    }[level.toLowerCase()] || "[LOG] ";

    const output = `${tag} ${msg}`;
    ns.print(output);
    ns.tprint(output);
}

