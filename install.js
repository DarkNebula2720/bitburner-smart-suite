// install.js
/** Installs the full Bitburner Smart Suite from GitHub */
export async function main(ns) {
  const repo = "DarkNebula2720/bitburner-smart-suite";
  const base = `https://raw.githubusercontent.com/${repo}/main/`;
  const files = [
    "daemon.js", "ui.js", "core/loop-control.js", "lib/log.js",
    "lib/scan.js", "lib/config.js", "modules/core-starter.js",
    "README.md"
    ];
  for (const file of files) {
    await ns.wget(`${base}${file}`, file);
    }
  ns.tprint(" Installation complete. Run daemon.js to start the system.");
  }
