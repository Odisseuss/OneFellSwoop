var mongoose = require("mongoose");





var PhotoSchema = new mongoose.Schema({
    img: String,
    title: String
});


var Photo = mongoose.model("Photo", PhotoSchema)

module.exports = Photo;