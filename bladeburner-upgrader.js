/** @param {NS} ns **/
export async function main(ns) {
    const skills = ["Overclock", "Cloak", "Short-Circuit", "Digital Observer"];
    for (let skill of skills) {
        while (ns.bladeburner.getSkillUpgradeCost(skill) <= ns.bladeburner.getSkillPoints()) {
            ns.bladeburner.upgradeSkill(skill, 1);
            ns.tprint("Upgraded skill: " + skill);
        }
    }
}
