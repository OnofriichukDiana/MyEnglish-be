const express = require('express')
const router = express.Router()
const { grammar: ctrl } = require('../../controllers')
const ctrlWrapper = require('../../middlewares/ctrlWrapper')
const auth = require('../../middlewares/auth')

router.get('/', auth, ctrlWrapper(ctrl.getAll))

router.get('/:ruleId', auth, ctrlWrapper(ctrl.getById))

router.post('/', auth, ctrlWrapper(ctrl.add))

router.delete('/:ruleId', auth, ctrlWrapper(ctrl.deleteById))

router.put('/:ruleId', auth, ctrlWrapper(ctrl.updateRule))


module.exports = router
