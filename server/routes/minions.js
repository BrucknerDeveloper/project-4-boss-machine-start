const express = require('express')
const minionsRouter = express.Router()
const db = require('../db')

minionsRouter.get('/', (req, res, next) =>{
    res.status(200).send(db.getAllFromDatabase('minions'))
})

minionsRouter.get('/:id', (req, res, next) =>{
    const minions = db.getFromDatabaseById('minions', req.params.id)
    if(minions) {
        res.status(200).send(minions)
    }
    res.status(404).send()
})

minionsRouter.post('/', (req, res, next) =>{
    const newMinion = db.addToDatabase('minions', req.body)
    res.status(201).send(newMinion)
})

minionsRouter.put('/:id', (req, res, next) =>{
    const updatedMinion = db.updateInstanceInDatabase('minions', { ...req.body, id: req.params.id} )
    if(updatedMinion)  {
        res.status(201).send(updatedMinion)
    }
    res.status(404).send()
})

minionsRouter.delete('/', (req, res, next) =>{
    const newMinion = db.addToDatabase('minions', req.body)
    res.status(201).send(newMinion)
})

module.exports = minionsRouter;