import { log } from './logger.js';

/** @param {NS} ns **/
export async function main(ns) {
    const command = ns.args[0];
    if (!command) {
        await log(ns, "Usage: run cliRouter.js [scan|clean|test|help]", "WARN");
        return;
    }

    switch (command.toLowerCase()) {
        case "scan":
            ns.run("tools/scanner.js");
            break;
        case "clean":
            ns.run("tools/cleaner.js");
            break;
        case "test":
            ns.run("tests/integrityVerifier.js");
            break;
        case "help":
        default:
            await log(ns, "Available CLI commands:\n  scan   - Run network scanner\n  clean  - Run cleaner utility\n  test   - Run integrity verifier\n  help   - Show this help message", "INFO");
    }
}
