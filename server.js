const express = require("express")
const app = express()
const morgan = require("morgan")

const port = 9001

app.use(express.json())
app.use(morgan("dev"))

app.post("/url", (request, response) => {
    response.send("YEs, it's working")
})

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})