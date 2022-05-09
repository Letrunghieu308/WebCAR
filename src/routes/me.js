const express = require('express')
const router = express.Router()

const meController = require('../app/controllers/MeController')
// newsController.index
router.get('/stored/courese', meController.storedCourses)
router.get('/trash/courese', meController.trashCourses)
router.get('/about',meController.checklogin)

module.exports=router