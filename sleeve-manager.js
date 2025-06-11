/** @param {NS} ns **/
export async function main(ns) {
    const sleeves = ns.sleeve.getNumSleeves();
    for (let i = 0; i < sleeves; i++) {
        const sleeve = ns.sleeve.getSleeve(i);
        if (sleeve.shock > 50) {
            ns.sleeve.setToShockRecovery(i);
        } else if (sleeve.sync < 100) {
            ns.sleeve.setToSynchronize(i);
        } else {
            ns.sleeve.setToCommitCrime(i, "Mug");
        }
    }
}
