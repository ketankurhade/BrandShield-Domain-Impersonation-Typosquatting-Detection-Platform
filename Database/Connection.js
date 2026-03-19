const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ketan123",
    database: "typosquat_detector",
    port: 3307
});

db.connect((err) => {
    if (err) {
        console.error("DB Connection Failed:", err);
    } else {
        console.log("Connected to MySQL ✅");
    }
});

module.exports = db;