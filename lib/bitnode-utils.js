/** BitNode Utilities */
export function getBitnodeMultipliers(ns, bitnode) {
    const mults = ns.getBitNodeMultipliers?.();
    return mults || {};
}

