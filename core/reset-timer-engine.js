/** @param {NS} ns */
export async function main(ns) {
    const seconds = ns.getRunningScript().onlineRunningTime;
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    const timer = `${hours}h ${mins}m ${secs}s`;
    ns.tprint(`⏳ Runtime: ${timer}`);

    const timeGoal = 24; // Target reset time in hours
    const ownedAugs = ns.getOwnedAugmentations(true).length;

    if (hours >= timeGoal && ownedAugs >= 20) {
        ns.tprint("🔁 Ready for reset. Recommend installing augs.");
    } else {
        ns.tprint("📊 Not yet ready for reset.");
    }
}

