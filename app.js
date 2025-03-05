const express = require('express')
const app = express()
// Swagger UI dependencies
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./swagger-output.json')

const port = process.env.PORT || 3000

app.use(express.json())

const entryRouter = require('./routes/coffee')
app.use('/api/v1/coffees', entryRouter)

// Add /api-docs endpoint to show swagger docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})