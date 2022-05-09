const {User} = require('../../config/db/data');
const jwt = require('jsonwebtoken');
const {Course} = require('../../config/db/f8_education_dev');
const {multipeMongooseToObject, mongooseToObject } = require('../../util/mongoose')


class NewsController {
    FordRangerRaptor(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Ford Ranger Raptor')
                }
                else{
                    res.render('carsNotLogin/Ford Ranger Raptor')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Ford Ranger Raptor')
          }
   }
   KiaMorning(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Kia Morning')
                }
                else{
                    res.render('carsNotLogin/Kia Morning')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Kia Morning')
          }
    }
    MazdaCX5(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Mazda CX-5')
                }
                else{
                    res.render('carsNotLogin/Mazda CX-5')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Mazda CX-5')
          }
    }
    VinfastFadil(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Vinfast Fadil')    
                }
                else{
                    res.render('carsNotLogin/Vinfast Fadil')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Vinfast Fadil')
          }
    }
    MercedesBenzGLS(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Mercedes-Benz GLS')  
                }
                else{
                    res.render('carsNotLogin/Mercedes-Benz GLS')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Mercedes-Benz GLS')
          }
    }
    ToyotaInnova(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Toyota Innova')  
                }
                else{
                    res.render('carsNotLogin/Toyota Innova')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Toyota Innova')
          }
    }
    FordF150(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Ford f150')  
                }
                else{
                    res.render('carsNotLogin/Ford f150')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Ford f150')
          }
    }
    Porsche718(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Porsche 718 Boxster')  
                }
                else{
                    res.render('carsNotLogin/Porsche 718 Boxster')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Porsche 718 Boxster')
          }
    }
    PorscheMacan(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Porsche Macan')  
                }
                else{
                    res.render('carsNotLogin/Porsche Macan')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Porsche Macan')
          }
    }
    PorschePanamera(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Porsche Panamera')  
                }
                else{
                    res.render('carsNotLogin/Porsche Panamera')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Porsche Panamera')
          }
    }
    MercedesBenzC200(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Mercedes-Benz C200 Cabriolet')  
                }
                else{
                    res.render('carsNotLogin/Mercedes-Benz C200 Cabriolet')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Mercedes-Benz C200 Cabriolet')
          }
    }
    MercedesBenzC300AMG(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/Mercedes-Benz C300 AMG')  
                }
                else{
                    res.render('carsNotLogin/Mercedes-Benz C300 AMG')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/Mercedes-Benz C300 AMG')
          }
    }
    KIASedona(req,res,next)
    {
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    res.render('cars/KIA Sedona')  
                }
                else{
                    res.render('carsNotLogin/KIA Sedona')
                }
            })
          } catch(err) {
            res.render('carsNotLogin/KIA Sedona')
          }
    }
    show(req,res,next){
        try {   
            var token= req.cookies.token
            var idUser = jwt.verify(token, 'mk')
            User.findOne({_id:idUser})
            .then(data =>{
                if(data){      
                    Course.findOne({ name: req.params.name})
                    .then(course => {
                        res.render('courses/show' , {course : mongooseToObject(course)})
                    })
                    .catch(next)
                }
                else{
                    Course.findOne({ name: req.params.name})
                    .then(course => {
                        res.render('courses/shownologin' , {course : mongooseToObject(course)})
                    })
                    .catch(next)
                }
            })
          } catch(err) {
            Course.findOne({ name: req.params.name})
            .then(course => {
                res.render('courses/shownologin' , {course : mongooseToObject(course)})
            })
            .catch(next)
          }

    }
}
module.exports= new NewsController;
