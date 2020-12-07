require('./db/mongoose')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

const NoticeRouter = require('./routes/notice')

app.use(NoticeRouter)

const port = 3000

app.get('/', (req, res) => {
    try {
        res.send('Notice App Server')
    }
    catch (e) {

    }
})

app.listen(port, () => {
    console.log('port is running on port ', port)
})