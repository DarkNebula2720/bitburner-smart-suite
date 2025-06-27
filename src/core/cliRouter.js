/**
 * CLI Router – Routes command-line arguments to the correct tools
 * Usage: run cliRouter.js [command]
 */

/** @param {NS} ns **/
export async function main(ns) {
    const command = ns.args[0];
    if (!command) {
        ns.tprint("Usage: run cliRouter.js [scan|clean|test|help]");
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
            ns.tprint("Available CLI commands:");
            ns.tprint("  scan   - Run network scanner");
            ns.tprint("  clean  - Run cleaner utility");
            ns.tprint("  test   - Run integrity verifier");
            ns.tprint("  help   - Show this help message");
    }
}

