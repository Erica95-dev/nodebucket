/*
Title: Nodebucket
Author: Erica Perry
Date:03/20/21
Description: employee.js
*/


/* setting up my connection to mongo db for my employee */


let employeeSchema = mongoose.Schema({
    empId: {type: String, unique: true }
},
    { collection: "employees"});

    module.exports =mongoose.model("Employee", employeeSchema);
