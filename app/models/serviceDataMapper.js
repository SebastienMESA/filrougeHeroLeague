const client = require('../DB/database');

const serviceDataMapper = {
    async getAll() {
        const result = await client.query('SELECT * FROM service;')
        return result.rows;
    }
}

module.exports.serviceDataMapper = serviceDataMapper;