/** @param {NS} ns **/
export async function main(ns) {
    const roadmap = {
        "CyberSec": ["NeuroFlux Governor"],
        "NiteSec": ["CRTX42-AA", "Neuralstimulator"],
        "Daedalus": ["The Red Pill", "OmniTek InfoLoad"]
    };

    for (const [faction, augments] of Object.entries(roadmap)) {
        ns.tprint(`Faction: ${faction}`);
        for (const aug of augments) {
            const owned = ns.singularity.getOwnedAugmentations().includes(aug);
            ns.tprint(`  [${owned ? "✔" : "✖"}] ${aug}`);
        }
    }
}
