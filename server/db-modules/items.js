 /*
Title: items
 * Author: Erica Perry
 * Date:3/25/21
 * Description: items modules
 */
 
// How to map to the employee
const mongoose = require('mongoose');
// Create a new item schema, define fields, templates for documents in collections   
const Schema = mongoose.Schema;

//create model and specify which collection in the database to connect it to
let itemSchema = new Schema ({
    text: { type: String }
});

// Accesible throughout the application 
module.exports = itemSchema;
