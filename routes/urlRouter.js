const express = require("express")
const urlRouter = express.Router()

urlRouter.get("/", (request, response) => {
    response.send("Yes, it's working")
})

module.exports = urlRouter