const mongoose = require('mongoose');
var slug = require('mongoose-slug-generator');
var mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;


const Course = new Schema({
    name : {type: String , required: true},
    description : {type: String },
    description1 : {type: String },
    description2 : {type: String },
    image : {type: String },
    image1 : {type: String },
    image2 : {type: String },
    image3 : {type: String },
    image4 : {type: String },
    videoID : {type: String},
    dong_co : {type: String},
    trong_tai : {type: String},
    slug : { type: String , slug : 'name' , unique : true}   
},{
    timestamps:true ,
});
//add pulgin
mongoose.plugin(slug);
Course.plugin(mongooseDelete,{ 
    deletedAt : true,
    overrideMethods: 'all' })
module.exports = Course;