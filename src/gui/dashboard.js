/**
 * Visual overlay dashboard displaying stats and system health
 */

/** @param {NS} ns **/
export async function main(ns) {
    const doc = eval("document");
    const id = "smart-dashboard";
    let box = doc.getElementById(id);

    if (!box) {
        box = doc.createElement("div");
        box.id = id;
        box.style.cssText = `
            position: fixed;
            top: 8px;
            right: 8px;
            background: rgba(0,0,0,0.7);
            padding: 10px;
            border: 1px solid #0f0;
            color: #0f0;
            font-family: monospace;
            z-index: 10000;
        `;
        doc.body.appendChild(box);
    }

    while (true) {
        const money = ns.getServerMoneyAvailable("home");
        const hacknet = ns.hacknet.numNodes();
        box.innerText = \`$ \${ns.nFormat(money, '0.0a')} | Hacknet: \${hacknet} nodes\`;
        await ns.sleep(1000);
    }
}

