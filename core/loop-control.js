// core/loop-control.js
export async function loop(ns, fn, delay = 1000) {
    while (true) {
        await fn();
        await ns.sleep(delay);
    }
}

