const router = require('express').Router()

const Person = require('../models/Person')

router.post('/', async (req, res) => {

    // req.body

    // Structure preview
    const {id, name, healthInsuranceCardId, address, createdAt} = req.body

    const person = {
        id, 
        name, 
        healthInsuranceCardId, 
        address, 
        createdAt
    }

    if(!id) {
        res.status(422).json({error: 'O id é obrigatório!'})
    }

    // Create
    try {

        await Person.create(person)

        res.status(201).json({message: 'Paciente inserido no sistema com sucesso!'})

    } catch (error) {
        res.status(500).json({error: error})
    }

})

module.exports = router
