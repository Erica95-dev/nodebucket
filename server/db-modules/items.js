const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let itemSchema = new Schema ({
    text: { type: String },
    dueDate: {type: String }
});

module.exports = itemSchema;

