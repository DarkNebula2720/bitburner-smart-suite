/** @param {NS} ns */
export async function main(ns) {
    const input = ns.args.join(" ").toLowerCase();
    const commands = {
        "status": () => ns.run("core/status-beacon.js"),
        "reset": () => ns.run("core/reset-controller.js"),
        "focus augs": () => ns.run("modules/augmentation-manager.js"),
        "sf plan": () => ns.run("modules/sf-timeline-renderer.js"),
        "help": () => ns.tprint("Available: status, reset, focus augs, sf plan, help")
    };

    if (commands[input]) {
        ns.tprint(`🟢 Executing command: ${input}`);
        commands[input]();
    } else {
        ns.tprint("❌ Unknown command. Try 'help'.");
    }
}

