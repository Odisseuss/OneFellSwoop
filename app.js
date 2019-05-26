//Requirements
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    passport = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    seedDB = require("./seedDB"),
    flash = require("connect-flash"),
    adminUser = require("./models/adminUser");




//Passport config

app.use(require("express-session")({
    secret: "Once upon a time...",
    resave: false,
    saveUninitialized: false
}));
app.use(flash());



app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(adminUser.authenticate()));
passport.serializeUser(adminUser.serializeUser());
passport.deserializeUser(adminUser.deserializeUser());

app.use(function (req, res, next) {
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});


//Admin config
//Sterge dupa primul run
var Admin = new adminUser({username: "onefellswoop"});
adminUser.register(Admin, "onefellswoop",function(err, done){
    if(err){
        console.log(err);
    }
});





//Route import
var indexRoutes = require("./routes/index");
var testimonialRoutes = require("./routes/testimonials");
var adminRoutes = require("./routes/admin");
var adminTestimonialRoutes = require("./routes/adminTestimonials");
var adminEmployeesRoutes = require("./routes/adminEmployees");
var adminPhotos = require("./routes/adminPhotos");

//Database connect
mongoose.connect("mongodb://localhost/One-fell-swoop", {
    useNewUrlParser: true
});
seedDB();



app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(indexRoutes);
app.use("/testimonials", testimonialRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/testimonials', adminTestimonialRoutes);
app.use('/admin/employees', adminEmployeesRoutes);
app.use('/admin/photos', adminPhotos);





//Port setup
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Shit is up");
});