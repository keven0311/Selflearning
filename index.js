const express = require("express");
const app = express();
const { Worker } = require("worker_threads");

const PORT = 3000;

app.use("/test", (req, res) => {
  res.status(200).send("Hello world!");
});

app.use("/single-thread", (req, res) => {
  let count = 0;
  for (let i = 0; i < 10_000_000_000; i++) {
    count++;
  }
  res.status(200).send(`this thread counted: ${count}`);
});

app.use("/multiple-threads", (req, res) => {
  const worker = new Worker("./multiple-threads/worker-thread.js");
  worker.on("message", (count) => {
    res.status(200).send(`worker thread counted: ${count}`);
  });
});

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
