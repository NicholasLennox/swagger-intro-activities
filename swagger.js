// https://swagger-autogen.github.io/docs/getting-started/quick-start
// https://www.npmjs.com/package/swagger-autogen/v/2.9.0
const swaggerAutogen = require('swagger-autogen')() // Swagger 2.0

const doc = {
    // https://swagger-autogen.github.io/docs/getting-started/advanced-usage
    info: {
        version: '1.0.0',
        title: 'Coffee API',
        description: 'Allows users get and create coffee orders'
    },
    host: 'localhost:3000',
    basePath: '/',
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            name: 'dev',
            description: 'This version of the document is for development purposes'
        }
    ],
    // Include definitions for all the models you need to use
    // https://swagger-autogen.github.io/docs/swagger-2/schemas-and-definitions 
    definitions: {
        Coffee: {
            id: 1,
            name: 'Example coffee',
            details: 'Example details',
            price: 5.99
        },
        CoffeeArray: [{
            $ref: '#/definitions/Coffee'
        }],
        AddCoffee: {
            // $ means required (it adds a red * in the docs)
            $name: 'Example coffee',
            $details: 'Example details',
            $price: 5.99
        },
        FailMessage: {
            message: 'Failure message'
        }
    }
}

const outputFile = 'swagger-output.json'
const endpointFiles = ['./app.js']

// Generates swagger JSDoc for swagger UI to read
swaggerAutogen(outputFile, endpointFiles, doc)