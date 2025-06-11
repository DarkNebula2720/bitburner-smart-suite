/** @param {NS} ns **/
export async function main(ns) {
    const logFile = "/logs/performance-log.txt";
    let lastMoney = ns.getServerMoneyAvailable("home");
    while (true) {
        await ns.sleep(60000);
        let newMoney = ns.getServerMoneyAvailable("home");
        let gain = newMoney - lastMoney;
        lastMoney = newMoney;
        ns.write(logFile, `Income: \$${ns.nFormat(gain, "0.00a")} at ${new Date().toISOString()}\n`, "a");
    }
}

