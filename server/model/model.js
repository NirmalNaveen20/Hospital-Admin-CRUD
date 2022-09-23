const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    first_name : {
        type : String,
        required: true
    },
    last_name : {
        type : String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    phone_number : {
        type: String,
        required: true,
        unique: true
    },
    address : {
        type: String,
        required: true,
    },
    gender : String,
    status : String
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;