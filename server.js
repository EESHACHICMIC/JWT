const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const port = 5000
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is working.."
    })
})

const createToken = async () => {
    const token = await jwt.sign({userId:"eesha@123"}, '12735bba57c3a38d3f1900f021afb6836747ee858294745cba9a0296590dee35')
    console.log(token)

    const verUser = await jwt.verify(token, '12735bba57c3a38d3f1900f021afb6836747ee858294745cba9a0296590dee35')
    console.log("verify",verUser)
}

createToken();

app.post('/user', async (req, res) => {
    const user = {
        userName: req.body.userName,
        password: req.body.password
    }
    res.send(user)
})

app.listen(port, () => console.log(`Server is running at port ${port}`))
