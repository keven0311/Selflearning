const cluster = require("cluster");
const os = require("os");
const { dirname } = require("path");
const { fileURLToPath } = require("url");

const cpuCount = os.cpus().length;

console.log(cpuCount);
console.log(`Primary pid=${process.pid}`);
console.log(__dirname)

cluster.setupPrimary({
    exec:__dirname + "/index.js",
});

for(let i =0; i< cpuCount; i++){
    cluster.fork();
};

cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} had been killed`);
    console.log("starting another worker");
    cluster.fork();
})