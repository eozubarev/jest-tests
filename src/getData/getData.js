const axios = require('axios');
const mapArrToString = require('../mapArrToSring/mapArrToString');

const getData = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const userIds = response.data.map(user => id);
        return mapArrToString(userIds);
    } catch (error) {
        console.log(error)
    }
}

module.exports = getData;

