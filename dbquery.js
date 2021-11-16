// Store SQL queries to be used by index.js to pull database and table contexts
const db = require('./db/connection.js');

// Check out how to add .promise() function for queries to make asynchronous
// Write the prepared statements via Class
class Query {
    constructor(connection){
        this.connection = connection;
        this.departments = [];
        this.roles = [];
    }

    //view all departments
    viewAllDept(){
        const sql = `SELECT name FROM department`;

        return this.connection.promise().query(sql);
    }

    //view all roles
    viewAllRoles(){
        const sql = `SELECT title FROM role`;

        this.connection.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log("log from dbquery method: "+JSON.stringify(result));
            return JSON.stringify(result);
        });
    }

    //view all employees
    viewAllEmployees(){
        const sql = `SELECT first_name, last_name FROM employee`;

        this.connection.promise.query(sql, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
    }

    //add a department
    addNewDepartment(newDept){
        const sql = `INSERT INTO department (name) VALUES (?)`

        this.connection.promise.query(sql, newDept, (err, result) => {
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
    }

    //add a role
    addNewRole(newRole){

    }

    //add an employee
    //update employee role

    //db.promise().query("...") to return a promise to index.js
}

module.exports = new Query(db);