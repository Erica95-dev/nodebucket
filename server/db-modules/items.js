 /*
Title: items
 * Author: Erica Perry
 * Date:3/25/21
 * Description: items modules
 */
 
/* creating and Items schema for how I want my items to be */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let itemSchema = new Schema ({
    text: { type: String },
    dueDate: {type: String }
});

module.exports = itemSchema;

