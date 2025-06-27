/**
 * Smart Suite Error Handler – Catches and logs async errors.
 */

import { log } from './logger.js';

/** @param {NS} ns */
export async function runSafe(ns, fn) {
    try {
        await fn();
    } catch (err) {
        await log(ns, `Unhandled error: ${err}`, "ERROR");
    }
}
