const express = require("express");
const path = require("path");

let app = express();

let PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/standings", (req, res) => {
    res.sendFile(path.join(__dirname, "standings.html"));
})

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
})