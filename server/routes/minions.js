const express = require('express')
const minionsRouter = express.Router()
const db = require('../db')

minionsRouter.get('/', (req, res, next) =>{
    res.status(200).send(db.getAllFromDatabase('minions'))
})

minionsRouter.get('/:minionId', (req, res, next) =>{
    const minions = db.getFromDatabaseById('minions', req.params.minionId)
    if(minions) {
        res.status(200).send(minions)
    }
    res.status(404).send()
})

minionsRouter.post('/', (req, res, next) =>{
    const newMinion = db.addToDatabase('minions', req.body)
    res.status(201).send(newMinion)
})

minionsRouter.put('/:minionId', (req, res, next) =>{
    const updatedMinion = db.updateInstanceInDatabase('minions', { ...req.body, id: req.params.minionId} )
    if(updatedMinion !== null)  {
        res.status(201).send(updatedMinion)
    }
    res.status(404).send()
})

minionsRouter.delete('/:minionId', (req, res, next) =>{
    const deletedMinion = db.deleteFromDatabasebyId('minions', req.params.minionId)
    if(deletedMinion)  {
        res.status(204).send(deletedMinion)
    }
    res.status(404).send()
})

module.exports = minionsRouter;