const express = require('express')
const router = express.Router()

const carController = require('../app/controllers/CarController')
// newsController.index

router.get('/Ford%20Ranger%20Raptor',carController.FordRangerRaptor)
router.get('/Kia%20Morning', carController.KiaMorning)
router.get('/Mazda%20CX5', carController.MazdaCX5)
router.get('/Vinfast%20Fadil', carController.VinfastFadil)
router.get('/Mercedes%20Benz%20GLS', carController.MercedesBenzGLS)
router.get('/Toyota%20Innova', carController.ToyotaInnova)
router.get('/Ford%20F150', carController.FordF150)
router.get('/Porsche%20718%20Boxster', carController.Porsche718)
router.get('/Porsche%20Macan', carController.PorscheMacan)
router.get('/Porsche%20Panamera', carController.PorschePanamera)
router.get('/Mercedes%20Benz%20C300%20AMG', carController.MercedesBenzC300AMG)
router.get('/Mercedes%20C200%20Cabriolet', carController.MercedesBenzC200)
router.get('/KIA%20Sedona', carController.KIASedona)
router.get('/:name', carController.show)



module.exports=router   