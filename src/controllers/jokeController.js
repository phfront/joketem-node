const jokes = require('./jokes');

module.exports = {
    async index(req, res) {
        const joke = jokes[Math.floor(Math.random()*jokes.length)];
        return res.json(joke);
    }
}