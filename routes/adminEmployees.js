var express = require("express");
var router = express.Router();
var Employee = require("../models/Employee");
var middleware = require("../middleware");



//Shows create form
router.get("/new", middleware.isLoggedIn, function (req, res) {
    res.render("admin/team/new");
});


//handles creation of new testimonial
router.post("/", middleware.isLoggedIn, function (req, res) {
    var name = req.body.name;
    var job = req.body.job;
    var description = req.body.description;
    var newEmployee = {
        name: name,
        job: job,
        description: description
    }
    Employee.create(newEmployee, function (err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/admin");
        }
    });

});



//Edit route


router.get("/:id/edit", middleware.isLoggedIn, function (req, res) {


    Employee.findById(req.params.id, function (err, foundEmployee) {
        res.render("admin/team/edit", {
            Employee: foundEmployee
        });
    });

});

//Update route

router.put("/:id", middleware.isLoggedIn, function (req, res) {
    Employee.findByIdAndUpdate(req.params.id, req.body.Employee, function (err, updated) {
        if (err) {
            res.redirect("/admin");
        } else {
            res.redirect("/admin");
        }
    });

});

//Delete route
router.delete("/:id", middleware.isLoggedIn, function (req, res) {
    Employee.findByIdAndRemove(req.params.id, function (err) {
        if (err) {
            res.redirect("/admin");
        } else {
            res.redirect("/admin");
        }
    })
});



module.exports = router;