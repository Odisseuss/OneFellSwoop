var express = require("express");
var router = express.Router();
var Photos = require("../models/backgroundPhotos");
var middleware = require("../middleware");



//Shows create form
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("admin/photos/new");
});


//handles creation of new testimonial
router.post("/", middleware.isLoggedIn, function (req, res) {
    var img = req.body.img;
    var title = req.body.title;

    var newPhoto = {
        img: img,
        title: title
    }
    Photos.create(newPhoto, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/admin");
        }
    });

});



//Edit route


router.get("/:id/edit", middleware.isLoggedIn, function (req, res) {


    Photos.findById(req.params.id, function (err, foundPhoto) {
        res.render("admin/photos/edit", {
            Photo: foundPhoto
        });
    });

});

//Update route

router.put("/:id", middleware.isLoggedIn, function (req, res) {
    Photos.findByIdAndUpdate(req.params.id, req.body.Photo, function (err, updated) {
        if (err) {
            res.redirect("/admin");
        } else {
            res.redirect("/admin");
        }
    });

});

//Delete route
router.delete("/:id", middleware.isLoggedIn, function (req, res) {
    Photos.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/admin");
        } else {
            res.redirect("/admin");
        }
    })
});



module.exports = router;