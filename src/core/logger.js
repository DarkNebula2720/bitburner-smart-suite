/**
 * Smart Suite Logger – Centralized logging to both terminal and log file.
 */

/** @param {NS} ns **/
export async function log(ns, message, type = "INFO") {
    const timestamp = (new Date()).toISOString();
    const formatted = `[${type}] ${timestamp} ${message}`;
    ns.tprint(formatted);
    await ns.write("logs/smart-suite.log", formatted + "\n", "a");
}

// Usage: import { log } from 'src/core/logger.js' and call log(ns, message, type)
