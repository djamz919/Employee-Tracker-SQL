// Store SQL queries to be used by index.js to pull database and table contexts
const db = require('./db/connection.js');

// Check out how to add .promise() function for queries to make asynchronous
// Write the prepared statements via Class
class Query {
    constructor(connection) {
        this.connection = connection;
        this.departments = [];
        this.roles = [];
    }
    //get index of department
    async getDeptId(deptName) {
        const sql = `SELECT id FROM department WHERE name = (?)`

        return this.connection.promise().query(sql, deptName);
    }

    //get index of role
    async getRoleId(roleName) {
        const sql = `SELECT id FROM role WHERE title = (?)`

        return this.connection.promise().query(sql, roleName);
    }

    //get index of employee id
    async getEmployeeId(employeeName) {
        const nameArray = employeeName.split(' ');

        const sql = `SELECT id FROM employee WHERE first_name = (?) AND last_name = (?)`

        return this.connection.promise().query(sql, nameArray);
    }

    //get all role titles
    async getRoleTitles(){
        const sql = `SELECT role.title AS Title FROM role`;

        return this.connection.promise().query(sql);
    }

    //get all managers
    async getManagers(){
        const sql = `SELECT CONCAT(employee.first_name, " ", employee.last_name) AS Manager FROM employee WHERE manager_id IS NULL`

        return this.connection.promise().query(sql);
    }

    //get all employees
    async getEmployees(){
        const sql = `SELECT CONCAT(employee.first_name, " ", employee.last_name) AS Employee FROM employee`

        return this.connection.promise().query(sql);
    }

    //view or get all departments
    async viewAllDept() {
        const sql = `SELECT department.name AS Name FROM department`;

        return this.connection.promise().query(sql);
    }

    //view all roles
    viewAllRoles() {
        const sql = `SELECT role.title AS Role, role.salary AS Salary, department.name AS department
                    FROM role JOIN department ON role.department_id = department.id`;

        return this.connection.promise().query(sql);
    }

    //view all employees
    viewAllEmployees() {
        const sql = `SELECT emp.first_name AS 'First Name', emp.last_name AS 'Last Name', role.title AS Title, department.name AS Department, role.salary AS Salary, CONCAT(COALESCE(manager.first_name, "null"), " ", manager.last_name) AS Manager
                    FROM employee emp JOIN role ON emp.role_id = role.id JOIN department on role.department_id = department.id LEFT JOIN employee manager ON emp.manager_id = manager.id`;

        return this.connection.promise().query(sql);
    }

    //add a department
    addNewDepartment(newDept) {
        const sql = `INSERT INTO department (name) VALUES (?)`

        return this.connection.promise().query(sql, newDept);
    }

    //add a role
    addNewRole(newRole, deptId) {
        const roleArray = [newRole.role, newRole.salary, deptId];

        const sql = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`

        return this.connection.promise().query(sql, roleArray);
    }

    //add a new employee
    addNewEmployee(newEmp, roleId, managerId) {
        const empArray = [newEmp.firstname, newEmp.lastname, roleId, managerId];

        const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`

        return this.connection.promise().query(sql, empArray);
    }

    //update employee role
    updateEmployeeRole(empId, roleId){
        const sql = `UPDATE employee `;

        return this.connection.promise().query(sql, empArray);
    }
}

module.exports = new Query(db);