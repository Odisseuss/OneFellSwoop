var mongoose = require("mongoose");





var EmployeeSchema = new mongoose.Schema({
    name: String,
    job: String,
    description: String,

});


var Employee = mongoose.model("Employee", EmployeeSchema)

module.exports = Employee;