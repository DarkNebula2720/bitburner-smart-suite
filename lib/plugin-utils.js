/** Validates basic plugin metadata structure */
export function validatePluginMeta(plugin) {
    if (!plugin.name || !plugin.version || typeof plugin.init !== "function") {
        throw new Error("Invalid plugin structure");
    }
    return true;
}

