let cache = {};

/** @param {NS} ns **/
export async function main(ns) {
    const args = ns.flags([
        ["get", ""],
        ["set", ""],
        ["value", ""],
    ]);

    if (args.set) {
        cache[args.set] = args.value;
        ns.tprint(`Cached [${args.set}] = ${args.value}`);
    } else if (args.get) {
        ns.tprint(`Cached [${args.get}] = ${cache[args.get] || "undefined"}`);
    } else {
        ns.tprint("Use --get <key> or --set <key> --value <val>");
    }
}
