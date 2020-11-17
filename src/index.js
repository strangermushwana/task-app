const express = require('express')
require('./db/mongoose')
const userRouter = require('./routes/user')
const taskRouter = require('./routes/task')


const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')

const apples = async () => {
    const token = jwt.sign({ _id: '12345' }, 'this is my new skill', { expiresIn: '7 days' })
    console.log(token)

    const data = jwt.verify(token, 'this is my new skill')
    console.log(data);
}

apples()