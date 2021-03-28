const mongoose = require('mongoose');
const Item = require('./items')
const Employee = require('./employee');
const { Schema } = mongoose;


let employeeSchema = mongoose.Schema({
    empId: { type: String, unique: true },
    todo: [Item],
    done: [Item]

},
    {collection: "employees" });

module.exports = mongoose.model("Employee", employeeSchema);