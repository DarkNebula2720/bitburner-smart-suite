/** @param {NS} ns */
export async function main(ns) {
    if (!ns.stanek.acceptGift()) {
        ns.tprint("🔒 Stanek's Gift not available.");
        return;
    }
    const fragments = ns.stanek.fragmentDefinitions();
    for (const frag of fragments) {
        ns.stanek.placeFragment(frag.x, frag.y, frag.rotation, frag.id);
        ns.tprint(`🧩 Placed fragment ${frag.id} at (${frag.x}, ${frag.y})`);
    }
    ns.tprint("✅ Stanek grid populated.");
}

