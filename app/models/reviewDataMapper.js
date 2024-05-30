const client = require('../DB/database');

const reviewDataMapper = {
    async getAll() {
        const result = await client.query('SELECT * FROM review;')
        return result.rows;
    }
}

module.exports.reviewDataMapper = reviewDataMapper;