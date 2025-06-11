/** @param {NS} ns **/
export async function writeState(ns, key, value) {
    const data = ns.read("/data/state.txt");
    let state = data ? JSON.parse(data) : {};
    state[key] = value;
    await ns.write("/data/state.txt", JSON.stringify(state, null, 2), "w");
}

export function readState(ns, key) {
    const data = ns.read("/data/state.txt");
    let state = data ? JSON.parse(data) : {};
    return state[key];
}
