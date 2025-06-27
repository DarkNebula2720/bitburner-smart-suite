/**
 * Smart Script Recompiler – detects and recompiles updated source scripts
 */

/** @param {NS} ns **/
export async function main(ns) {
    const sourceFiles = ns.ls("home", ".src.js");
    const compiledSuffix = ".js";

    for (const src of sourceFiles) {
        const dist = src.replace(".src.js", compiledSuffix);
        const srcContent = ns.read(src);
        let shouldWrite = true;

        if (ns.fileExists(dist)) {
            const distContent = ns.read(dist);
            if (distContent === srcContent) {
                shouldWrite = false;
                ns.tprint(\`[Recompiler] ✅ \${dist} is up to date.\`);
            }
        }

        if (shouldWrite) {
            await ns.write(dist, srcContent, "w");
            ns.tprint(\`[Recompiler] 🔁 Updated \${dist} from \${src}\`);
        }
    }

    ns.tprint("[Recompiler] Smart recompilation complete.");
}

