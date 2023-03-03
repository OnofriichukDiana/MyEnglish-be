const express = require('express')
const router = express.Router()
const { vocabulary: ctrl } = require('../../controllers')
const ctrlWrapper = require('../../middlewares/ctrlWrapper')
const auth = require('../../middlewares/auth')

router.get('/', auth, ctrlWrapper(ctrl.getAll))

router.get('/:wordId', auth, ctrlWrapper(ctrl.getById))

router.post('/', auth, ctrlWrapper(ctrl.add))

router.delete('/:wordId', auth, ctrlWrapper(ctrl.deleteById))

router.put('/:wordId', auth, ctrlWrapper(ctrl.updateWord))


module.exports = router
