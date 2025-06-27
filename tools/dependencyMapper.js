/**
 * Script Dependency Tree Mapper – scans and maps dependencies between scripts.
 * Flags broken or missing includes for modular integrity.
 */

/** @param {NS} ns **/
export async function main(ns) {
    const scripts = ns.ls("home", ".js");
    const tree = {};

    for (const file of scripts) {
        const content = ns.read(file);
        const deps = [...content.matchAll(/from ['"](.*)['"]/g)].map(match => match[1]);
        tree[file] = deps;
    }

    const report = Object.entries(tree).map(([file, deps]) => {
        if (deps.length === 0) return \`\${file} → No imports\`;
        const broken = deps.filter(d => !scripts.includes(d));
        const status = broken.length
            ? \`⚠️ Missing: \${broken.join(", ")}\`
            : \`✅ OK\`;
        return \`\${file} → [\${deps.join(", ")}] \${status}\`;
    }).join("\n");

    await ns.write("logs/dependency-report.txt", report, "w");
    ns.tprint("[DependencyMapper] Report saved to logs/dependency-report.txt");
}

