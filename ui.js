// ui.js 
/** Displays live system dashboard without blocking terminal input */
export async function main(ns) { 
  while (true) { 
    ns.clearLog(); 
    ns.print(" Bitburner Smart Suite Dashboard"); 
    ns.print("RAM Usage: " + ns.getServerUsedRam("home") + " GB");
    await ns.sleep(2000); 
  } 
}
