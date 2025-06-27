/**
 * BitNode Profiler – detects current BitNode and loads optimized config
 */

/** @param {NS} ns **/
export async function main(ns) {
    const bn = ns.getPlayer().bitNodeN;
    ns.tprint(\`[BitNode] Current BitNode: \${bn}\`);

    switch (bn) {
        case 1:
            ns.run("profiles/bitnode-1.js");
            break;
        case 3:
            ns.run("profiles/bitnode-3.js");
            break;
        case 5:
            ns.run("profiles/bitnode-5.js");
            break;
        default:
            ns.run("profiles/bitnode-default.js");
            break;
    }

    ns.tprint("[BitNode] Optimization loaded.");
}

