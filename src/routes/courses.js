const express = require('express')
const router = express.Router()
var multer  =   require('multer');
const { update } = require('../app/controllers/CourseController');
const courseController = require('../app/controllers/CourseController')
var storage =   multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, '../test1 - Copy/src/public/upload');
    },
    filename: function (req, file, callback) {
      callback(null, file.fieldname + '-' + Date.now());
    }
  });
var upload = multer({ storage : storage}).single('userPhoto')
var upload1 = multer({ storage : storage}).single('userPhoto1')
var upload2 = multer({ storage : storage}).single('userPhoto2')
var upload3 = multer({ storage : storage}).single('userPhoto3')
var upload4 = multer({ storage : storage}).single('userPhoto4')
// newsController.index
router.get('/create', courseController.checklogin , courseController.create)
router.post('/handle-fomr-actions',courseController.checklogin ,courseController.handleFormAction)
router.post('/handles-actions',courseController.checklogin ,upload,courseController.handlesAction)
router.post('/create',courseController.checklogin , upload, courseController.store)
router.get('/:id/edit',courseController.checklogin ,courseController.edit)
router.get('/:id/editInfoCar',courseController.checklogin ,courseController.editInfoCar)
router.post('/search' ,courseController.search)

router.put('/:id',courseController.checklogin ,upload,courseController.update)
router.put('/updateInfo/:id',courseController.checklogin ,upload,upload1,upload2,upload3,upload4,courseController.updateInfoCar)
router.patch('/:id/restore',courseController.checklogin ,upload,courseController.restore)
router.delete('/:id',courseController.checklogin ,courseController.destroy)
router.delete('/:id/force',courseController.checklogin ,courseController.forceDestroy)


module.exports=router