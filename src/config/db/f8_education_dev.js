const mongoose = require('mongoose');
const educationConnect = mongoose.createConnection('mongodb://localhost:27017/f8_education_dev');
const Course = educationConnect.model('courses', require('../../app/models/Course'));
module.exports = {educationConnect,Course}