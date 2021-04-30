const express = require("express")
const app = express()
const morgan = require("morgan")

const port = 9001

app.use(express.json())
app.use(morgan("dev"))

app.use("/url", require("./routes/urlRouter"))

app.listen(port, () => {
    console.log(`The server is running on port ${port}`)
})