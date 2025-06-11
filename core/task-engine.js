/** @param {NS} ns **/
export async function main(ns) {
    const mode = ns.args[0];
    if (mode === "reset") {
        ns.tprint("Preparing for Bitnode reset...");
        const scripts = ns.ps("home").map(p => p.filename);
        for (let s of scripts) ns.scriptKill(s, "home");
        await ns.sleep(1000);
        ns.run("smart-hacknet-manager.js");
        ns.run("smart-faction-manager.js");
        ns.run("smart-augment-planner.js", 1, "--install");
        return;
    }

    ns.tprint("Unknown task mode. Use: reset");
}
