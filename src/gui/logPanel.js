/**
 * Floating log panel for real-time messages
 */

export async function main(ns) {
    const doc = eval("document");
    const id = "smart-log";
    let logBox = doc.getElementById(id);

    if (!logBox) {
        logBox = doc.createElement("div");
        logBox.id = id;
        logBox.style.cssText = \`
            position: fixed;
            bottom: 10px;
            right: 10px;
            width: 300px;
            max-height: 200px;
            overflow-y: auto;
            background: rgba(0,0,0,0.8);
            color: #ccc;
            font-family: monospace;
            padding: 8px;
            border: 1px solid #999;
            z-index: 9999;
        \`;
        doc.body.appendChild(logBox);
    }

    let count = 0;
    while (true) {
        logBox.innerText = \`[SmartSuite Log] Ticks: \${++count}\`;
        await ns.sleep(1000);
    }
}

