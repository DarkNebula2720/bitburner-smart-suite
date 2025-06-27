/**
 * In-Game Help Overlay – shows built-in tips and system info
 */

/** @param {NS} ns **/
export async function main(ns) {
    const html = \`
    <div id="help-overlay" style="
        position: fixed;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        background: #1e1e1e;
        color: #eee;
        padding: 20px;
        width: 400px;
        font-family: monospace;
        border-radius: 12px;
        border: 1px solid #444;
        z-index: 9999;
    ">
        <h2>🧠 Smart Suite Help</h2>
        <p><b>Launcher:</b> main.js</p>
        <p><b>Modes:</b> Auto / Manual | Full / Lite</p>
        <p><b>Commands:</b></p>
        <ul>
            <li><code>cliRouter.js scan</code> → Network scan</li>
            <li><code>cliRouter.js clean</code> → Clean temp/logs</li>
            <li><code>cliRouter.js test</code> → Check integrity</li>
        </ul>
        <p><i>Press ESC or close tab to dismiss.</i></p>
    </div>
    \`;

    const doc = eval("document");
    const div = doc.createElement("div");
    div.innerHTML = html;
    doc.body.appendChild(div);

    ns.tprint("[Help] Help overlay displayed.");
}

