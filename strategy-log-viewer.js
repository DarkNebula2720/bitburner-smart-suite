/** @param {NS} ns **/
export async function main(ns) {
    const file = "/logs/performance.json.txt";
    if (!ns.fileExists(file)) {
        ns.tprint("No performance logs available.");
        return;
    }
    const data = JSON.parse(ns.read(file));
    for (const [timestamp, entry] of Object.entries(data)) {
        const date = new Date(Number(timestamp)).toLocaleTimeString();
        ns.tprint(\`[\${date}] Income: \$\${entry.incomeRate.toFixed(2)}, Money: \$\${entry.money.toLocaleString()}\`);
