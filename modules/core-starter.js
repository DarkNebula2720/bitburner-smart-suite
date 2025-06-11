// modules/core-starter.js
import { loop } from "/core/loop-control.js";
import { log } from "/lib/log.js";

export async function main(ns) {
    await loop(ns, async () => {
        log(ns, "Core module loop tick.");
    }, 3000);
}
