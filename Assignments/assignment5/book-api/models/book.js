const mongoose = require('mongoose');

const bookschema = new mongoose.Schema(
    {
        title:{type:String, required:true},
        author:{type:String,required:true},
        publishedYear: { type: Number, required: true },

        genre:{type:String,required:true},
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model('Book',bookschema)