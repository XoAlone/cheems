// Libraries
const axios = require('axios');

// Main Thread
function cheem() {
    return new Promise(async (resolve, reject) => {
        const URL = 'https://meme-api.herokuapp.com/gimme/cheemslove';
        try {
            const {
                data
            } = await axios.get(URL);
            resolve(data);
        } catch (err) {
            reject(err);
        };
    });
};

// Exporting the function
module.exports.cheem = cheem;