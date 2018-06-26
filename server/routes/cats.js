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

module.exports = router