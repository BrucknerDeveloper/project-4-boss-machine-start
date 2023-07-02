const express = require('express')
const ideasRouter = express.Router()
const db = require('../db')
const checkMillionDollarIdea = require('../checkMillionDollarIdea')

ideasRouter.get('/', (req, res, next) => {
    res.status(200).send(db.getAllFromDatabase('ideas'))
})

ideasRouter.get('/:ideaId', (req, res, next) => {
    const idea = db.getFromDatabaseById('ideas', req.params.ideaId)
    if(idea) {
        res.status(200).send(idea)
    }
    res.status(404).send()
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const newIdea = db.addToDatabase('ideas', req.body)
    if(newIdea) {
        res.status(201).send(newIdea)
    }
    res.status(404).send()
})

ideasRouter.put('/:ideaId', (req, res, next) => {
    const updatedIdea = db.updateInstanceInDatabase('ideas', { ...req.body, id: req.params.ideaId})
    if(updatedIdea !== null) {
        res.status(201).send(updatedIdea)
    }
    res.status(404).send()
})

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deletedIdea = db.deleteFromDatabasebyId('ideas', req.params.ideaId)
    if(deletedIdea) {
        res.status(204).send(deletedIdea)
    }
    res.status(404).send()
})

module.exports = ideasRouter;