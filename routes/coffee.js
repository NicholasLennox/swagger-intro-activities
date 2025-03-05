const express = require('express')
const router = express.Router()

const coffees = [
    { id: 1, name: "Morning Kick", details: "A bold espresso blend to jumpstart your day.", price: 3.99 },
    { id: 2, name: "Vanilla Sunset", details: "Smooth vanilla-infused latte for a mellow evening.", price: 4.49 },
    { id: 3, name: "Mocha Madness", details: "Rich chocolate meets espresso for a sweet caffeine boost.", price: 4.99 },
    { id: 4, name: "Caramel Cloud", details: "A light and fluffy caramel macchiato with a hint of sea salt.", price: 4.79 }
];

// Activity 1: Document this endpoint
router.get('/', (req,res) => {
    res.status(200).json(coffees)
})

module.exports = router