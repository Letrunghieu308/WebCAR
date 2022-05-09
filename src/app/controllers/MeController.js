const {Course} = require('../../config/db/f8_education_dev');
const {multipeMongooseToObject } = require('../../util/mongoose')
const {User} = require('../../config/db/data');
const jwt = require('jsonwebtoken');
class MeController {

    // [GET] /me/stored/courses
    storedCourses ( req , res , next){

        let courseQuery = Course.find({})

        if(req.query.hasOwnProperty('_sort')){
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }


        Promise.all([ courseQuery,Course.countDocumentsDeleted()])
        .then(([courses,deletedCount]) =>
         res.render('me/storedCourse' , {
            deletedCount,
            courses : multipeMongooseToObject(courses)
        }) 
        )
        .catch(next)

        // Course.countDocumentsDeleted()
        // .then((deletedCount) =>{
        //     console.log(deletedCount)
        // })  
        // .catch(() => {})


        // Course.find({})
        // .then( courses  => {
        //     res.render('me/storedCourse' , {
        //         courses : multipeMongooseToObject(courses)
        //     })
        // })
        // .catch(next);
    }
    trashCourses ( req , res , next){
        let courseQuery = Course.find({})

        if(req.query.hasOwnProperty('_sort')){
            courseQuery = courseQuery.sort({
                [req.query.column]: req.query.type
            })
        }

        Course.findDeleted({})
        .then( courses  => {
            res.render('me/trashCourse' , {
                courses : multipeMongooseToObject(courses)
            })
        })
        .catch(next);
    }
    about(req,res,next){
        res.render('me/about')
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
                    res.render('me/about')
                }
                else{
                    res.render('me/aboutNotLogin')
                }
            })
          } catch(err) {
                res.render('me/aboutNotLogin')
          }
    }
}
module.exports= new MeController;