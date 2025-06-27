/**
 * CLI Command Router – Lite Mode Terminal Dispatcher
 */

/** @param {NS} ns **/
export async function main(ns) {
    const commands = {
        scan: "src/tools/scanner.js",
        stats: "src/tools/statsCollector.js",
        help: "help/cliHelp.md"
    };

    const cmd = ns.args[0];
    if (!cmd || cmd === "help") {
        ns.tprint("[CLI] Available commands:");
        for (const c in commands) {
            ns.tprint(`- ${c}`);
        }
        return;
    }

    if (commands[cmd]) {
        if (commands[cmd].endsWith(".js")) {
            ns.run(commands[cmd], 1, ...ns.args.slice(1));
        } else {
            ns.tprint(await ns.read(commands[cmd]));
        }
    } else {
        ns.tprint(`[CLI] Unknown command: ${cmd}`);
    }
}

