const Router = require('express')

const router = new Router()

const superheroRouter = require('./heroRouter')

router.use('/superhero', superheroRouter )

module.exports = router