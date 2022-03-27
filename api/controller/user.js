const userSchema = require("../models/user")

module.exports = {
    async get(req, res){
        try {
            const users =  await userSchema.find()
            res.send(users)
        } catch (error) {
            console.log("ERROUu")
        }
    }, 

    async post(req, res){
        const user = new userSchema({
            user: req.body.user,
            email: req.body.email,
            password: req.body.password
        })
        
        try {
            await user.save()
            console.log("CADASTRADO COM SUCESSO")
        } catch (error) {
            console.log("DEU NÃO")   
        }   
    },

    async getOne(req, res){
        const {email} = req.params

        try {
            const result = await userSchema.find(
                { email: email}
            )
            res.send(result)
        } catch (error) {
            console.log("Erro ao buscar um unico usuario")
        }
    }
}


