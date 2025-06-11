/** @param {NS} ns **/
export async function main(ns) {
    const archive = "/archive/logs_" + Date.now();
    await ns.write(archive, "", "w");
    const logs = ns.ls("home", ".txt").filter(f => f.includes("log"));
    for (let log of logs) {
        const content = ns.read(log);
        await ns.write(archive, content, "a");
        ns.rm(log);
