const express = require("express");
const app = express();

const port = process.env.port || 3000;

app.get("/", (req, res) => res.send("Hello Three!"));

app.listen(port, () => `Listening on ${port}`);
