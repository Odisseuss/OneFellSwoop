var express = require("express");
var router = express.Router();
var Testimonial = require("../models/Testimonial");


//Root route
router.get("/", function (req, res) {
    Testimonial.find({}, function (err, allTestimonials) {
        if (err) {
            console.log(err);
        } else {
            res.render("index/testimonials", {
                Testimonials: allTestimonials
            });
        }
    });

});

//id route
router.get("/:id", function (req, res) {
    Testimonial.findById(req.params.id).exec(function (err, foundTest) {
        if (err) {
            console.log(err);
        } else {
            console.log(foundTest);
            res.render("index/show", {
                Testimonial: foundTest
            });
        }
    });

});

module.exports = router;