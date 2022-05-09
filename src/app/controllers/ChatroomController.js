const {Course} = require('../../config/db/f8_education_dev');
const {multipeMongooseToObject, mongooseToObject} = require('../../util/mongoose')
const {User} = require('../../config/db/data');
const jwt = require('jsonwebtoken');
const {Contact} = require('../../config/db/contact');

class ChatroomController {
    doContact(req,res,next){
        const formData = req.body
        const contact = new Contact(formData)
        contact.save() 
        .then( () => res.redirect('/'))
        .catch( err => {}) 
    }
    message(req,res,next){
        Contact.find({})
        .then( contacts  => {
            res.render('chatroom/chatpage' , {
                contacts : multipeMongooseToObject(contacts)
            })
    
        })
        .catch(next);       

    }
    checklogin(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    req.data = data
                    next()
                }
                else{
                    res.json('NOT PERMISSION')
                }
            })
          } catch(err) {
                res.redirect('/login')
          }
    }
    infoMess(req,res,next){
        Contact.findOne({_id:req.params.id})
        .then(contact => {
            res.render('chatroom/infoMess' , {contact : mongooseToObject(contact)})
        })
        .catch(next)
    }

}
module.exports= new ChatroomController;