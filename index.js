const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join("public")));

app.listen(4000, () => {
    console.log("Server running on port 4000");
})