// Configuração Inicial
require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const app = express()

// Forma de Ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// Rota Inicial / endpoint
app.get("/", (req, res) => {

    // Mostrar req

    res.json({message: 'Oi Express!'})

})

// Entregar uma Porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.4jcc7ov.mongodb.net/bancoGH?retryWrites=true&w=majority`)
.then(() => {
    console.log('Conectado ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))

