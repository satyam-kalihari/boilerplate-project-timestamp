const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    dateOfBirth: {
        type : Date,
        required : true
    },
    address: {
        type : String
    },
    addedOn: {
        type : Date,
        default : Date.now()
    }
})

module.exports = mongoose.model('PeopleFinder', articleSchema)