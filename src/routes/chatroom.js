const express = require('express')
const router = express.Router()
const app = express();
const chatroomController = require('../app/controllers/ChatroomController')
// newsController.index

router.post('/doContact',chatroomController.doContact)
router.get('/message',chatroomController.checklogin,chatroomController.message)
router.get('/:id/mess',chatroomController.checklogin,chatroomController.infoMess)


module.exports=router