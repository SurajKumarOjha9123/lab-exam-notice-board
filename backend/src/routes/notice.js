const Notice = require('../models/notice')
const express = require('express')

const router = express.Router()


// creating notices
router.post('/notice/create', async (req, res) => {
    try {
        const notice = await Notice({
            title: req.body.title,
            department: req.body.department,
            description: req.body.description,
            date: req.body.date,
            creator: req.body.creator
        })
        if (!notice) {
            return res.status(400).send()
        }
        console.log("hello")
        await notice.save()
        res.send(notice)
    }
    catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
})

// display notices
router.post('/notice/display', async (req, res) => {
    try {
        const notice = await Notice.find()
        res.send(notice)
    }
    catch (e) {
        res.status(500).send()
    }
})


// delete notice by its title
router.post('/notice/delete', async (req, res) => {
    try {
        const op = await Notice.deleteMany({ title: req.body.title })
        res.send(op)
    }
    catch (e) {
        res.status(500).send()
    }
})

module.exports = router