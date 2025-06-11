/** @param {NS} ns */
export function getSFPlan() {
    return {
        "1": { level: 3, owned: true },
        "3": { level: 2, owned: true },
        "5": { level: 0, owned: false, target: 1 },
        "10": { level: 0, owned: false, target: 1 }
    };
}

