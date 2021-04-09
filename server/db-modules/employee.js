/*
 * Title: employee
 * Author: Erica Perry
 * Date:3/25/21
 * Description: employee modules
 */

/* creating a mongoose schema for my employees to modify how they should be */
const mongoose = require('mongoose');
const Item = require('./items')


let employeeSchema = mongoose.Schema({
    empId: { type: String, unique: true, dropDups: true },
    
    todo: [Item],
    done: [Item]
},
    {collection: "employees" });

module.exports = mongoose.model("Employee", employeeSchema);


[]
