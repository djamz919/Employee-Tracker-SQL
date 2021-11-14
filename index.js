
// Import dependencies
const inquirer = require('inquirer');
const dbquery = require('./db/dbquery.js');

//dbquery.methods to call queries

//Build your CLI application here
    //view all departments
    //view all roles
    //view all employees
    //add a department
    //add a role
    //add an employee
    //update employee role
    //quit

// Menu 
const promptUser = () => {
    return inquirer.prompt();
};

const promptNewDept = () => {
    return inquirer.prompt()
    .then() //use dbquery.methods to publish new information to database)
}

const viewAllDepartment = () => {
    //use dbquery.methods to get database informtion
}

promptUser();
    //.then(option =>){
        //use switch case to redirect to the correct function
    //}