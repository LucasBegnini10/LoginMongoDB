const app = require("../config");


app.get("/", (req, res) => {
    res.send('Hi, this is my API.')
})

module.exports = app;