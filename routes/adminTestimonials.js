var express = require("express");
var router = express.Router();
var Testimonial = require("../models/Testimonial");
var middleware = require("../middleware");



//Shows create form
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("admin/testimonials/new");
});


//handles creation of new testimonial
router.post("/", middleware.isLoggedIn, function (req, res) {
    var clientName = req.body.name;
    var image = req.body.image;
    var testimonial = req.body.description;
    var whatWeDo = req.body.whatWeDo;
    var importance = req.body.importance;
    var newTestimonial = {
        clientName: clientName,
        image: image,
        testimonial: testimonial,
        whatWeDo: whatWeDo,
        importance: importance
    }
    Testimonial.create(newTestimonial, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/admin");
        }
    });

});



//Edit route


router.get("/:id/edit", middleware.isLoggedIn, function (req, res) {


    Testimonial.findById(req.params.id, function (err, foundTest) {
        res.render("admin/testimonials/edit", {
            Testimonial: foundTest
        });
    });

});

//Update route

router.put("/:id", middleware.isLoggedIn, function (req, res) {
    Testimonial.findByIdAndUpdate(req.params.id, req.body.Testimonial, function (err, updated) {
        if (err) {
            res.redirect("/admin");
        } else {
            res.redirect("/admin");
        }
    });

});

//Delete route
router.delete("/:id", middleware.isLoggedIn, function (req, res) {
    Testimonial.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/admin");
        } else {
            res.redirect("/admin");
        }
    })
});



module.exports = router;