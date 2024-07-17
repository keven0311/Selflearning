const { parentPort } = require("worker_threads");

console.log("woker-thread.js working...");
let count = 0;
for(let i=0;i<10_000_000_000;i++){
    count++;
}

parentPort.postMessage(count);