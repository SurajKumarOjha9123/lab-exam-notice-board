const mongoose = require('mongoose')
const url2 = 'mongodb://127.0.0.1:27017/NoticeApp'
mongoose.connect(url2, {
    useNewUrlParser: true,
    useCreateIndex: true
}).then((result) => {
    console.log('connected to server')
}).catch((error) => {
    console.log(error);
    console.log('Error while connecting')
})