/** @param {NS} ns */
const configPath = "/data/smart-config.json";

export function getConfig(ns) {
    if (ns.fileExists(configPath)) {
        return JSON.parse(ns.read(configPath));
    }
    return {
        autoAugments: true,
        enableLearning: true,
        autoReset: false
    };
}

export function saveConfig(ns, cfg) {
    ns.write(configPath, JSON.stringify(cfg, null, 2), "w");
}

export function toggleSetting(ns, key) {
    let cfg = getConfig(ns);
    cfg[key] = !cfg[key];
    saveConfig(ns, cfg);
    ns.tprint(`🛠️ Toggled ${key}: ${cfg[key] ? "ON" : "OFF"}`);
}

