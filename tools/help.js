/** @param {NS} ns **/
export async function main(ns) {
    ns.tprint("Smart Suite Help Menu:");
    ns.tprint("  run daemon.js               => Launches main suite");
    ns.tprint("  run config-generator.js     => Builds suite config");
    ns.tprint("  run control-panel.js        => Opens control UI");
    ns.tprint("  run cleanup.js              => Archives logs");
    ns.tprint("  run dependency-watchdog.js  => Validates all core modules");
}
