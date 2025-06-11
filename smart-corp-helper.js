/** @param {NS} ns **/
export async function main(ns) {
    if (!ns.corporation.hasCorporation()) {
        ns.tprint("No Corporation found.");
        return;
    }
    const divisions = ns.corporation.getCorporation().divisions;
    for (let d of divisions) {
        const info = ns.corporation.getDivision(d);
        ns.tprint(`Division: ${d} - Employees: ${info.employees.length}`);
    }
}

