const express = require('express')
const router = express.Router()
const { lessons: ctrl } = require('../../controllers')
const ctrlWrapper = require('../../middlewares/ctrlWrapper')
const auth = require('../../middlewares/auth')

router.get('/', auth, ctrlWrapper(ctrl.getAvailable))
router.get('/:lessonNumber', auth, ctrlWrapper(ctrl.getById))
router.get('/test/:lessonNumber', ctrlWrapper(ctrl.getTestLesson))

module.exports = router
