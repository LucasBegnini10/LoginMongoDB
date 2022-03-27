const app = require("./route")
const controllerUser = require("../../controller/user")


app.post("/users", controllerUser.post)

app.get("/users/:email", controllerUser.getOne)

app.get("/users", controllerUser.get)


module.exports = app