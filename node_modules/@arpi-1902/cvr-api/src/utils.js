const axios = require('axios');

const baseUrl = 'https://cvrapi.dk/api?search=2345&country=dk'

async function getMockSearch () {
    try {
        const response = await axios.get(`${baseUrl}`)
        return response.data
    } catch (error) {return error}
};

module.exports = {
    getMockSearch,
    baseUrl
}