const express = require('express')
const app = express()
// Swagger UI dependencies

const port = process.env.PORT || 3000

app.use(express.json())

const entryRouter = require('./routes/coffee')
app.use('/api/v1/coffees', entryRouter)

// Add /api-docs endpoint to show swagger docs

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})