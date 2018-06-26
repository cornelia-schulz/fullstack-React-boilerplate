const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAll()
    .then(cats => {
      res.json(cats)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to read from database.')
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getOne(id)
    .then(cat => {
      res.json(cat)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to read from database.')
    })
})

router.post('/', (req, res) => {
  const newCat = {
    name: req.body.name,
    age: req.body.age
  }
  db.createNew(newCat)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

router.put('/', (req, res) => {
  const updatedCat = {
    id: req.body.id,
    name: req.body.name,
    age: req.body.age
  }
  db.updateOne(updatedCat)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteOne(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Unable to write to the database.')
    })
})

module.exports = router