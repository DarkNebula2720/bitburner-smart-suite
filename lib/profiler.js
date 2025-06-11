/** @param {NS} ns **/
export async function profileScript(ns, script) {
    const ram = ns.getScriptRam(script);
    const running = ns.isRunning(script);
    ns.tprint(`Script: ${script}`);
    ns.tprint(`RAM: ${ram} GB | Running: ${running}`);
}
