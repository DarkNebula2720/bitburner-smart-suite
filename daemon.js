// daemon.js
/** Master controller script for Smart Suite */ 
export async function main(ns) { 
  ns.run("ui.js", 1); 
  ns.tprint(" Smart Suite daemon running..."); 
}
