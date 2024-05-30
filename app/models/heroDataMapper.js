const client = require('../DB/database');

const heroDataMapper = {
    async getAll() {
        const result = await client.query('SELECT * FROM hero;')
        return result.rows;
    }
}

module.exports.heroDataMapper = heroDataMapper;