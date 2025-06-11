/** @param {NS} ns */
export async function main(ns) {
    const version = "v1.0.0";
    const buildTime = new Date().toLocaleString();
    const changelog = [
        "Initial full suite build",
        "Includes 30+ modular phases",
        "Supports UI, SF, Bitnode AI, plugins"
    ];
    ns.tprint(`📦 Bitburner Smart Suite — ${version}`);
    ns.tprint(`🕒 Build Time: ${buildTime}`);
    ns.tprint("📝 Changelog:");
    changelog.forEach(line => ns.tprint(" - " + line));
}

