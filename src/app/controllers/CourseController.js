const {Course} = require('../../config/db/f8_education_dev');
const {multipeMongooseToObject, mongooseToObject } = require('../../util/mongoose')
const jwt = require('jsonwebtoken');
const {User} = require('../../config/db/data');
class CourseController { 

    show(req,res,next){
        Course.findOne({ slug: req.params.slug})
        .then(course => {
            res.render('courses/show' , {course : mongooseToObject(course)})
        })
        .catch(next)

    }
    create(req,res,next){
        res.render('courses/create')
    }

    store (req,res,next){
        req.body.image =  req.file.originalname 
        const formData = req.body
        const course = new Course(formData)
        course.save()
        .then(() => res.redirect('/admin'))
        .catch(err => {})
    }

    edit(req,res,next){
        Course.findById(req.params.id)
        .then( course => res.render('courses/edit' ,{
            course : mongooseToObject(course)}
         ))
        .catch(next)       
    }
    editInfoCar(req,res,next){
        Course.findById(req.params.id)
        .then( course => res.render('courses/editInfoCar' ,{
            course : mongooseToObject(course)}
         ))
        .catch(next)       
    }

    search(req, res, next) {
        Course.find({
            name: new RegExp(req.body.name, 'i')
        }, function (err, data) {
            res.json(data);
        });
    }
    // /courses/handle-fomr-actions
        handleFormAction(req,res,next){
        switch(req.body.action){
            case 'delete':
                Course.delete({ _id : { $in: req.body.courseIds} })
                    .then( () => res.redirect('back'))
                    .catch(next)

            break;
            default:
                res.json({message : "Action invalid"})
        }
    }
    handlesAction(req,res,next)
    {
        
        switch(req.body.action){
            case'deleteOne' :
                Course.deleteMany({ _id : { $in: req.body.courseIds} })
                    .then( () => res.redirect('back'))
                    .catch(next)
            break;
            case 'restore':
                req.body.image = req.body.userPhoto
                Course.restore({ _id : { $in: req.body.courseIds} })
                    .then( () => res.redirect('back'))
                    .catch(next)
            break;
            default:
                res.json({message : "Action invalid"})
        }
    
    }

    update(req,res,next){
        req.body.image = req.body.userPhoto
        Course.updateOne({_id: req.params.id} , req.body)
        .then(() => res.redirect('/me/stored/courese'))
        .catch(next)
    }
    updateInfoCar(req,res,next){
        req.body.image = req.body.userPhoto
        req.body.image1 = req.body.userPhoto1
        req.body.image2 = req.body.userPhoto2
        req.body.image3 = req.body.userPhoto3
        req.body.image4 = req.body.userPhoto4
        Course.updateOne({_id: req.params.id} , req.body)
        .then(() => res.redirect('/me/stored/courese'))
        .catch(next)
    }
    
    destroy(req, res,next){
        Course.delete({ _id : req.params.id })
        .then( () => res.redirect('back'))
        .catch(next)
    }

    forceDestroy(req,res,next){
        Course.deleteOne({ _id : req.params.id })
        .then( () => res.redirect('back'))
        .catch(next)
    }


    restore(req,res,next){
        req.body.image = req.body.userPhoto
        Course.restore({ _id : req.params.id })
        .then( () => res.redirect('back'))
        .catch(next)
    }
    Ford(req,res,next)
    {
        res.render('Ford')
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

}
module.exports= new CourseController;