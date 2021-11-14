// Store SQL queries to be used by index.js to pull database and table contexts
const db = require('./db/connection.js');

// Check out how to add .promise() function for queries to make asynchronous
// Write the prepared statements via Class
class Query {
    constructor(connection){
        this.connection = connection
    }
    //enter your methods that have queries, expect to use join
    //view all departments
    //view all roles
    //view all employees
    //add a department
    //add a role
    //add an employee
    //update employee role

    //db.promise().query("...") to return a promise to index.js
}

module.exports = new Query(db);