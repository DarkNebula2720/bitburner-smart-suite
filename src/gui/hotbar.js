/**
 * GUI Hotbar – Buttons for key tools and toggles
 */

export async function main(ns) {
    const doc = eval("document");
    if (doc.getElementById("smart-hotbar")) return;

    const bar = doc.createElement("div");
    bar.id = "smart-hotbar";
    bar.style.cssText = \`
        position: fixed;
        bottom: 10px;
        left: 10px;
        background: #111;
        border: 1px solid #ccc;
        padding: 5px;
        z-index: 9999;
        display: flex;
        gap: 5px;
    \`;

    const buttons = [
        { label: "Dashboard", script: "src/gui/dashboard.js" },
        { label: "Scan", script: "src/tools/scanner.js" },
        { label: "Stats", script: "src/tools/statsCollector.js" },
    ];

    for (const b of buttons) {
        const btn = doc.createElement("button");
        btn.innerText = b.label;
        btn.onclick = () => ns.run(b.script, 1);
        bar.appendChild(btn);
    }

    doc.body.appendChild(bar);
}

