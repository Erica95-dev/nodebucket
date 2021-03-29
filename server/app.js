/* Title: app
 * Author: Erica Perry
 * Date:3/25/21
 * Description: app
 */


/**
 * Require statements
 */
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');                        
const path = require('path');

const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://nodebucket_user:admin@cluster0.cqfiw.mongodb.net/nodebucket?retryWrites=true&w=majority');



const Employee = require('./routes/employee-route');

/**
 * App configurations
 */
let app = express();
app.use(express.json());
app.use(express.urlencoded({'extended': true}))
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../dist/nodebucket')));
app.use('/',express.static(path.join(__dirname, '../dist/nodebucket')));


/**
 * Variables
 */
const port = process.env.PORT || 3000; // server port

// TODO: This line will need to be replaced with your actual database connection string
//const conn = 'mongodb+srv://nodebucket_user:admin@cluster0-lujih.mongodb.net/nodebucket?retryWrites=true&w=majority';
const conn = 'mongodb+srv://nodebucket_user:admin@cluster0.cqfiw.mongodb.net/nodebucket?retryWrites=true&w=majority';


/**
 * Database connection
 */
mongoose.connect(conn, {
  promiseLibrary: require('bluebird'),
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(() => {
  console.debug(`Connection to the database instance was successful`);
}).catch(err => {
  console.log(`MongoDB Error: ${err.message}`)

}); 
// end mongoose connection

/**
 * route import resources...
 */

app.use('/api/employees',Employee);

/**
 * Create and start server
 */

http.createServer(app).listen(port, function() {
  console.log(`Application started and listening on port: ${port}`)
}); 
// end http create server function
