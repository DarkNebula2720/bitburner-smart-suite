/** @param {NS} ns */
export async function main(ns) {
    const scripts = ns.ps();
    ns.tprint("📊 Running Scripts:");
    for (const s of scripts) {
        ns.tprint(`- ${s.filename} | Threads: ${s.threads} | RAM: ${ns.getScriptRam(s.filename).toFixed(2)}`);
    }
}

