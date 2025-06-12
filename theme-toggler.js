/** @param {NS} ns */
export async function main(ns) {
    const configPath = "/data/smart-config.json";
    let cfg = JSON.parse(ns.read(configPath));
    const themes = ["classic", "matrix", "darklite"];
    const index = (themes.indexOf(cfg.theme) + 1) % themes.length;
    cfg.theme = themes[index];
    await ns.write(configPath, JSON.stringify(cfg, null, 2), "w");
    ns.tprint(`🎨 Theme switched to: ${cfg.theme}`);
}

