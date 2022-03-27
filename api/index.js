const app = require("./server/routes/user");
const connectMongo = require("./infra/mongo")



async function startApp(){
    await connectMongo()

    app.listen(3001, () => {
        console.log("API ligada em: http://localhost:3001/")
    })
}

startApp();
