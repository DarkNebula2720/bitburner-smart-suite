/**
 * Game Event Hooks – Executes triggers on key in-game events
 * Simulates reactive logic tied to progress/milestones
 */

/** @param {NS} ns **/
export async function main(ns) {
    let lastHackLevel = ns.getHackingLevel();
    let lastMoney = ns.getServerMoneyAvailable("home");

    while (true) {
        const currentHack = ns.getHackingLevel();
        const currentMoney = ns.getServerMoneyAvailable("home");

        if (currentHack > lastHackLevel + 50) {
            ns.tprint(\`[Event] 🎯 Hacking +50 → Trigger smartHack.js\`);
            ns.run("src/automation/smartHack.js");
            lastHackLevel = currentHack;
        }

        if (currentMoney > lastMoney + 1e7) {
            ns.tprint(\`[Event] 💰 Money +10M → Trigger augmentPlanner.js\`);
            ns.run("src/automation/augmentPlanner.js");
            lastMoney = currentMoney;
        }

        await ns.sleep(30000); // Check every 30s
    }
}

