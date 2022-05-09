const express = require('express')
const router = express.Router()

const siteController = require('../app/controllers/SiteController')

// router.post('/doCreate' ,siteController.userStored)
router.get('/', siteController.home)
router.post('/login', siteController.loginto)
router.get('/login', siteController.login)
router.post('/logout',siteController.checklogin,siteController.logout)
router.get('/logout', siteController.logoutsure)
// router.get('/task',siteController.checklogin,siteController.checkTask ,siteController.pageTask )
router.get('/admin' ,siteController.checklogin,siteController.pageAdmin)
router.post('/doCreate',siteController.checklogin,siteController.checkAdmin,siteController.userStored)
router.get('/users/create' ,siteController.checklogin,siteController.checkAdmin,siteController.pageCreate)
router.get('/users/stored',siteController.checklogin,siteController.checkAdmin,siteController.pageStored)
router.get('/users/:id/edit',siteController.checklogin,siteController.checkAdmin,siteController.editUser)
router.put('/update/:id',siteController.checklogin,siteController.checkAdmin,siteController.updateUser)
router.delete('/delete/:id',siteController.checklogin,siteController.checkAdmin,siteController.destroy)

module.exports=router