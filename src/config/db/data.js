const mongoose = require('mongoose');
const dataConnect = mongoose.createConnection('mongodb://localhost:27017/data');
const User = dataConnect.model('users', require('../../app/models/Admin')) 
module.exports = {dataConnect,User }