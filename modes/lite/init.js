/** @param {NS} ns **/
export async function main(ns) {
    ns.tprint("[SmartSuite] LITE mode initializing...");
    ns.run("src/cli/commandRouter.js", 1);
}

