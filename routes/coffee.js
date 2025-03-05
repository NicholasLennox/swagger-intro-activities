const express = require('express')
const router = express.Router()

const coffees = [
    { id: 1, name: "Morning Kick", details: "A bold espresso blend to jumpstart your day.", price: 3.99 },
    { id: 2, name: "Vanilla Sunset", details: "Smooth vanilla-infused latte for a mellow evening.", price: 4.49 },
    { id: 3, name: "Mocha Madness", details: "Rich chocolate meets espresso for a sweet caffeine boost.", price: 4.99 },
    { id: 4, name: "Caramel Cloud", details: "A light and fluffy caramel macchiato with a hint of sea salt.", price: 4.79 }
];

// Activity 1 (complete): Document this endpoint
router.get('/', (req, res) => {
    //  #swagger.tags = ['Coffee']
    //  #swagger.description = 'Gets all coffees'
    /*  #swagger.responses[200] = { 
             description: 'Success', 
             schema: {
                $ref: '#/definitions/CoffeeArray'
             }
    }*/
    res.status(200).json(coffees)
})

// Activity 2 (complete): Document get by ID and post endpoints using schema definitions
router.get('/:id', (req, res) => {
    //  #swagger.tags = ['Coffee']
    //  #swagger.description = 'Get coffee by ID'
    // https://swagger-autogen.github.io/docs/swagger-2/responses (example 2)
    /* #swagger.responses[200] = {
            description: 'Coffee resource matching ID',
            schema: { $ref: '#/definitions/Coffee' }
    } */
    /* #swagger.responses[400] = {
             description: 'Invalid ID',
             schema: { $ref: '#/definitions/FailMessage' }
     } */
    /* #swagger.responses[404] = {
             description: 'Coffee couldnt be found with that ID',
             schema: { $ref: '#/definitions/FailMessage' }
     } */
    // https://swagger-autogen.github.io/docs/swagger-2/parameters
    /*  #swagger.parameters['id'] = {
            in: 'path',
            description: 'ID of coffee',
            type: 'integer'
    } */
    const id = Number(req.params.id)

    if (!id) {
        return res.status(400).json({ message: 'Invalid ID format' })
    }

    const coffee = coffees.find(c => c.id === id)
    if (!coffee) {
        return res.status(404).json({ message: 'Coffee not found with that ID' })
    }

    res.status(200).json(coffee)
})

router.post('/', (req, res) => {
    //  #swagger.tags = ['Coffee']
    //  #swagger.description = 'Create a new coffee resource'
    /* #swagger.responses[400] = {
             description: 'Invalid payload',
             schema: { $ref: '#/definitions/FailMessage' }
     } */
    /* #swagger.responses[201] = {
            description: 'Coffee created successfully',
            schema: { $ref: '#/definitions/Coffee' }
    } */
    // https://swagger-autogen.github.io/docs/swagger-2/parameters (example 3)
    /*  #swagger.parameters['body'] = {
             in: 'body',
             description: 'Add a coffee',
             schema: { $ref: '#/definitions/AddCoffee' }
     } */
    const { name, details, price } = req.body

    if (!name || !details || !price) {
        return res.status(400).json()
    }

    const newId = Math.max(...coffees.map(c => c.id)) + 1
    const newCoffee = { id: newId, name, details, price }

    coffees.push(newCoffee)

    res.status(201).json(newCoffee)
})

module.exports = router