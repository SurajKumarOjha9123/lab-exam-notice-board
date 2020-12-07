const mongoose = require('mongoose')

const noticeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    }
})

const noticeModel = mongoose.model('notices', noticeSchema)

module.exports = noticeModel