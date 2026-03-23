const express = require('express')
const app = express()
const port = 3000

require('dotenv').config();



app.listen(port, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

