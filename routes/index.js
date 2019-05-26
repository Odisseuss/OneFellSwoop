//Requirements
var express = require("express");
var router = express.Router();
var passport = require("passport");
var Testimonial = require("../models/Testimonial");
var Photos = require("../models/backgroundPhotos");
var Employees = require("../models/Employee");


//Root route
router.get("/", function (req, res) {
    Photos.find({}, function (err, allPhotos) {
        if (err) {
            console.log(err);
        } else {
            res.render("index/index", {
                Photos: allPhotos
            });
        }
    });

});

router.get("/index", function (req, res) {
    Photos.find({}, function (err, allPhotos) {
        if (err) {
            console.log(err);
        } else {
            res.render("index/index", {
                Photos: allPhotos
            });
        }
    });
});

//What we do
router.get("/what-we-do", function (req, res) {
    res.render("index/what-we-do");
});

//Testimonials
router.get("/testimonials", function (req, res) {
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

//The Team
router.get("/the-team", function (req, res) {
    Employees.find({}, function (err, allEmployees) {
        if (err) {
            console.log(err);
        } else {
            res.render("index/the-team", {
                Employees: allEmployees
            })
        }
    })

});

//Development
router.get("/development-oportunities", function (req, res) {
    res.render("index/development-oportunities");
});


//Admin Panel
router.get("/login", function (req, res) {
    res.render("index/login");
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/admin",
    failureRedirect: "/login"
}), function (req, res) {

});

module.exports = router;