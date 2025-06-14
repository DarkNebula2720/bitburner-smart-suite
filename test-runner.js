/** @param {NS} ns */
export async function main(ns) {
    const tests = ns.ls("home", "/test/").filter(f => f.endsWith(".js"));
    for (const test of tests) {
        ns.tprint(`🧪 Running ${test}`);
        await ns.run(test, 1);
    }
}

