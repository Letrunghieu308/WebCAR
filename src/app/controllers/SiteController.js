const {User} = require('../../config/db/data');
const {Course} = require('../../config/db/f8_education_dev');
const {multipeMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const jwt = require('jsonwebtoken');
class SiteController {
   
    home(req,res , next) {

        // res.render('home')

        Course.find({})
        .then( courses  => {
            res.render('home' , {
                courses : multipeMongooseToObject(courses)
            })
    
        })
        .catch(next);       
    }
    pageTask(req,res , next) {

        // res.render('home')

        Course.find({})
        .then( courses  => {
            res.render('task' , {
                courses : multipeMongooseToObject(courses)
            })
    
        })
        .catch(next);
    }
    pageAdmin(req,res , next) {

        // res.render('home')

        Course.find({})
        .then( courses  => {
            res.render('admin' , {
                courses : multipeMongooseToObject(courses)
            })
    
        })
        .catch(next);
    }
    login(req,res,next){
        res.render('login')
    }
    loginto(req,res,next){
        User.findOne({username : req.body.username , password : req.body.password})
        .then(users => {
            if(users){
                var token = jwt.sign({
                    _id:users._id
                }, 'mk')
                res.json({
                    message: 'thanh cong',
                    token: token
                })
            }
            else{
                res.json('that bai')
            }
        })
        .catch(err =>{
            res.status(500).json({message:'False'})
        })
    }
    private(req,res,next){
        res.json('private page')
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
    task(req,res,next){
        res.json('thanh cong')
    }
    checkTask(req,res,next){
        var role = req.data.role
        if(role === 'task')
        {
            next()
        }
        else{
            res.json('Bạn không được phép vào trang này')
        }
    }
    checkAdmin(req,res,next){
        var role = req.data.role
        if(role === 'admin')
        {
           next()
        }
        else{
            res.redirect('/admin')
        }
    }
    admin(req,res,next){
        res.redirect('/admin')
    }
 
    logout(req,res,next){
        var token= req.cookies.token
        var idUser = jwt.verify(token, 'mk')
        User.updateOne({_id:idUser} , {token:''})
        .then( data => {
            res.json('logout thanh cong')
        })
        .catch( err => {
            res.json('that bai ')
        })
    }
    logoutsure(req,res,next){
        res.render('login')
    }
    pageCreate(req ,res,next) {
        res.render('admin/createUsers')
    }
    userStored(req,res,next){
        const formData = req.body
        const user = new User(formData)
        user.save()
        .then(() => res.redirect('/users/stored'))
        .catch(err => {
            console.log(err)
        })
    }
    pageStored(req,res,next){
            User.find({})
            .then( users  => {
                res.render('admin/adminStored' , {
                    users : multipeMongooseToObject(users)
                })
            })
            .catch(next);       
    }
    editUser(req,res,next){
         User.findById(req.params.id)
         .then(user => {
            res.render('admin/editUser' , {
                user : mongooseToObject(user)
            })
         })
         .catch(err => {
             console.log(err)
         })
    }
    updateUser(req,res,next){
        User.updateOne({_id : req.params.id} , req.body)
        .then(() => {
            res.redirect('/users/stored')
        })
        .catch(next)
    }
    destroy(req,res,next){
        User.deleteOne({_id:req.params.id})
        .then(() => {
            res.redirect('/users/stored')
        })
        .catch(next)
    }
}
module.exports= new SiteController;