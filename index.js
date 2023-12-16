const express = require("express");
const router = require("express").Router();
const PORT = 8000;

const app = express();

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get("/about", (req, res) => {
    res.send("Let's build a CRUD API!");
});