const db = require("./Connection");

const insertScan = (domain, variant, is_active, similarity_score) => {
    const query = `
        INSERT INTO scans (domain, variant, is_active, similarity_score)
        VALUES (?, ?, ?, ?)
    `;

    return db.promise().query(query, [
        domain,
        variant,
        is_active,
        similarity_score
    ]);
};

module.exports = { insertScan };