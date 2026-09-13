const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "version 2 - Deployed with github actions !!!"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});