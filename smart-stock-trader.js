/** @param {NS} ns **/
export async function main(ns) {
    if (!ns.stock.hasWSEAccount() || !ns.stock.hasTIXAPIAccess()) {
        ns.tprint("Stock market APIs not available.");
        return;
    }
    const symbols = ns.stock.getSymbols();
    while (true) {
        for (let sym of symbols) {
            const forecast = ns.stock.getForecast(sym);
            const vol = ns.stock.getVolatility(sym);
            const pos = ns.stock.getPosition(sym);
            if (forecast > 0.6 && pos[0] === 0) {
                const max = ns.stock.getMaxShares(sym);
                const price = ns.stock.getAskPrice(sym);
                const shares = Math.floor((ns.getServerMoneyAvailable("home") * 0.25) / price);
                if (shares > 0) ns.stock.buyStock(sym, shares);
            } else if (forecast < 0.5 && pos[0] > 0) {
                ns.stock.sellStock(sym, pos[0]);
            }
        }
        await ns.sleep(60000);
    }
}
