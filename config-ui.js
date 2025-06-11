/** @param {NS} ns **/
export async function main(ns) {
    ns.ui.clear();
    ns.ui.appendToScreen(\`
    <div style="padding:8px;font:12px monospace;color:#0f0;background:#000;">
        <b>Smart Suite Config Panel</b><br>
        <label><input type="checkbox" checked> Auto Stock Trader</label><br>
        <label><input type="checkbox" checked> Dashboard UI</label><br>
        <label><input type="checkbox"> Manual Aug Mode</label><br>
        <label><input type="checkbox"> RAM Saver Mode</label><br>
        <small>Toggle options above are only visual, config file syncing TBD.</small>
    </div>\`);
}
