var mongoose = require("mongoose");





var TestimonialSchema = new mongoose.Schema({
    clientName: String,
    image: String,
    testimonial: String,
    whatWeDo: String,
    importance: {
        type: Number,
        min: 1,
        max: 2
    },


});


var Testimonial = mongoose.model("Testimonial", TestimonialSchema)

module.exports = Testimonial;