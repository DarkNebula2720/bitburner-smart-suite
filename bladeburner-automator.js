/** @param {NS} ns **/
export async function main(ns) {
    if (!ns.bladeburner.inBladeburner()) {
        ns.tprint("Not in Bladeburner division.");
        return;
    }

    const actions = ["Field Analysis", "Recruitment", "Undercover Operation", "Stealth Retirement"];
    const stamina = ns.bladeburner.getStamina();
    const [current, max] = stamina;

    if (current < max * 0.4) {
        ns.bladeburner.startAction("General", "Hyperbolic Regeneration Chamber");
    } else {
        for (let action of actions) {
            const successChance = ns.bladeburner.getActionEstimatedSuccessChance("Operation", action)[0];
            if (successChance > 0.9) {
                ns.bladeburner.startAction("Operation", action);
                break;
            }
        }
    }
}
