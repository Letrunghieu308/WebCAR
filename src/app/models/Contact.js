const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Contact = new Schema({
    name : {type: String , required: true},
    address : {type: String , required: true},
    email : {type: String },
    phoneNumber: {type: String},
    message: {type: String},
});
//add pulgin
module.exports = Contact;