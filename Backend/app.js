const express = require("express");
const app = express();

// import DB connection
const db = require("../Database/Connection");

// import insert function
const { insertScan } = require("../Database/ScanRepo");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend running 🚀");
});

// 👉 TEST INSERT (Task 4)
insertScan("amazon.com", "amaz0n.com", true, 0.85)
    .then(() => console.log("Data inserted ✅"))
    .catch(err => console.error(err));

app.listen(3000, () => {
    console.log("Server running on port 3000");
});