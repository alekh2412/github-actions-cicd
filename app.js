const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "version 3 - pull request ci test!"
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});