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
    async viewAllDept(){
        const sql = `SELECT department.name AS Name FROM department`;

        return this.connection.promise().query(sql); 
    }

    //view all roles
    viewAllRoles(){
        const sql = `SELECT role.title AS Role, role.salary AS Salary, department.name AS department
                    FROM role JOIN department ON role.department_id = department.id`;

        return this.connection.promise().query(sql);
    }

    //view all employees
    viewAllEmployees(){
        const sql = `SELECT role.first_name AS 'First Name', role.last_name AS 'Last name', role.title AS Role, employee.manager_id AS manager
                    FROM employee LEFT JOIN department ON employee.role_id = role.id LEFT JOIN employee ON employee.manager_id = employee.id`

        return this.connection.promise().query(sql);
    }

    //add a department
    async addNewDepartment(newDept){
        const sql = `INSERT INTO department (name) VALUES (?)`

        return this.connection.promise().query(sql, newDept);
    }
    
    //add a role
    addNewRole(newRole){

    }

    //add an employee
    //update employee role

    //db.promise().query("...") to return a promise to index.js
}

module.exports = new Query(db);