const mongoose = require('mongoose');
const dataContact = mongoose.createConnection('mongodb://localhost:27017/contact');
const Contact = dataContact.model('contacts', require('../../app/models/Contact')) 
module.exports = {dataContact,Contact }