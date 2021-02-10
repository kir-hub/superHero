const Router = require('express')

const router = new Router()
const controller = require('../controller/heroController')

router.post('/create', controller.create)
router.put('/edit', controller.edit)
router.delete('/remove', controller.remove)
router.get('/getAll', controller.getAll)
router.get('/getOne', controller.getOne)

module.exports = router