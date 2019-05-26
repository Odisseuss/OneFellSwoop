var express = require("express");
var router = express.Router();
var Testimonial = require("../models/Testimonial");
var Employee = require("../models/Employee");
var Photos = require("../models/backgroundPhotos");
var middleware = require("../middleware");


//Root route


router.get("/", middleware.isLoggedIn, function (req, res) {
    Testimonial.find({}, function (err, allTests) {
        if (err) {
            console.log(err);
        } else {
            Employee.find({}, function (err, allEmployees) {
                if (err) {
                    console.log(err);
                } else {
                    Photos.find({}, function (err, allPhotos) {
                        if (err) {
                            console.log(err);
                        } else {
                            res.render("admin/index", {
                                Testimonials: allTests,
                                Employees: allEmployees,
                                Photos: allPhotos
                            });
                        }
                    })

                }
            })

        }
    });

});



module.exports = router;