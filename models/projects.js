const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    modStat : String,
    title : {type : String, required : true},
    description : {type : String, required : true},
    images : String,
    author : String
});

module.exports = mongoose.model('Project', projectSchema);
