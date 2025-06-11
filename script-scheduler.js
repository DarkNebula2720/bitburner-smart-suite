/** @param {NS} ns **/
export async function main(ns) {
    const schedule = [
        {script: "weaken-optimizer.js", delay: 0},
        {script: "grow-optimizer.js", delay: 15000},
        {script: "hack-optimizer.js", delay: 30000},
    ];
    for (const task of schedule) {
        ns.run(task.script);
        await ns.sleep(task.delay);
    }
}
