/** @param {NS} ns */
export async function main(ns) {
    const tasks = JSON.parse(ns.read("/data/task-queue.json"));
    tasks.sort((a, b) => b.priority - a.priority);
    for (const task of tasks) {
        ns.tprint(`➡️ ${task.name} | Priority: ${task.priority}`);
        if (task.enabled && task.script) {
            ns.run(task.script, 1, ...(task.args || []));
        }
        await ns.sleep(1000);
    }
}

