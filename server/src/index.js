const express = require("express");
const connect = require("./configs/db");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.listen(PORT, async () => {
    await connect();
    console.log("Connected");
})