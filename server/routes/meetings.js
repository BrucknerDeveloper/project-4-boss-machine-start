const express = require('express')
const meetingsRouter = express.Router()
const db = require('../db')

meetingsRouter.get('/', (req, res, next) => {
    res.status(200).send(db.getAllFromDatabase('meetings'))
})

meetingsRouter.post('/', (req, res, next) => {
    const newMeeting = db.createMeeting()
    if(newMeeting !== null) {
        db.addToDatabase('meetings', newMeeting)
        res.status(201).send(newMeeting)
    }
    res.status(404).send()
})

meetingsRouter.delete('/', (req, res, next) => {
    res.status(204).send(db.deleteAllFromDatabase('meetings'))
})

module.exports = meetingsRouter;