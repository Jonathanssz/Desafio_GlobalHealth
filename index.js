// Configuração Inicial
const express = require('express')
const app = express()

// Forma de Ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rota Inicial / endpoint
app.get("/", (req, res) => {

    // Mostrar req

    res.json({message: 'Oi Express!'})

})

// Entregar uma Porta
app.listen(3000)