const express = require('express');
const app = express();

const PORT = 3000;

app.use("/test",(req,res) => {
    res.status(200).send("Hello world!");
})

app.use("/multi-threads",(req,res)=>{
    let count = 0;
    for(let i=0; i<10_000_000;i++){
        count++;
    }
    res.status(200).send(`this thread counted: ${count}`);
})

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})