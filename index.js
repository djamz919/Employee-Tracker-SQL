
// Import dependencies
const inquirer = require('inquirer');
const db = require('./db/connection.js');
const dbquery = require('./dbquery.js');
//missing console table 

const menuArray = ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"];
[viewDept, viewRole, viewEmp, addDept, addRole, addEmp, updateRole, quit] = menuArray;

let allDepartments = [];
let allRoles = [];

dbquery.viewAllDept().then(results => {
    console.log(results[0])}
    //results
);

//getDepartments.then(getRoles).then(getEmployees) to populate things first before menu

//

// const sql = `SELECT name FROM department`;

// db.query(sql, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log("log from dbquery method: "+JSON.stringify(result));
//     result.forEach(el => {
//         console.log(el.name);
//         allDepartments.push(el.name);
//     })
// });

// let allRoles = dbquery.viewAllRoles();

//console.log("I'm displaying all the departments:" + allDepartments);
// console.log("I'm displaying all the roles:" + allRoles);

// Menu 
const promptUserMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: menuArray
        }
    ]);
};

const viewAllDepartment = () => {
    //use dbquery.methods to get database information
    // dbquery.viewAllDept.
}

const viewAllRole = () => {
    //use dbquery.methods to get database information
}

const viewAllEmp = () => {
    //use dbquery.methods to get database information
}

const addNewDept = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "Enter the new department",
            validate: deptInput => {
                if (deptInput) {
                    return true;
                } else {
                    console.log("Please enter the new department!");
                    return false;
                }
            }
        }
    ])
        .then(deptInput => {
            return addNewDepartment(deptInput);
            //use dbquery.methods to publish new information to database
        });
}

const addNewRole = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "role",
            message: "Enter the new role name",
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log("Please enter the new role name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the new role's salary",
            validate: salaryInput => {
                if (salaryInput) {
                    return true;
                } else {
                    console.log("Please enter the new role's salary!");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "department",
            message: "Select the new role's department",
            choices: allDepartments
        }

    ])
        .then(newRoleInput => {
            //use dbquery.methods to publish new information to database
        });
}

const addNewEmp = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "firstname",
            message: "Enter the new employee's first name.",
            validate: firstNameInput => {
                if (firstNameInput) {
                    return true;
                } else {
                    console.log("Please enter the new employee's first name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "lastname",
            message: "Enter the new employee's last name.",
            validate: lastNameInput => {
                if (lastNameInput) {
                    return true;
                } else {
                    console.log("Please enter the new employee's last name!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "department",
            message: "Enter the new employee's department.",
            validate: deptInput => {
                if (deptInput) {
                    return true;
                } else {
                    console.log("Please enter the new employee's department!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "role",
            message: "Enter the new employee's role.",
            validate: roleInput => {
                if (roleInput) {
                    return true;
                } else {
                    console.log("Please enter the new employee's role!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "manager",
            message: "Enter the new employee's manager, if none do not enter anything.",
        }
    ])
        .then(empInput => {
            //use dbquery.methods to publish new information to database
        });
}

const updateEmpRole = () => {
    return inquirer.prompt()
        .then() //use dbquery.methods to publish new information to database)
}

let showMenu = true;

// while (showMenu) {
//     promptUserMenu()
//         .then(option => {
//             switch (option) {
//                 case viewDept:
//                     return viewAllDepartment();
//                 case viewRole:
//                     return viewAllRole();
//                 case viewEmp:
//                     return viewAllEmp();
//                 case addDept:
//                     return addNewDept();
//                 case addRole:
//                     return addNewRole();
//                 case addEmp:
//                     return addNewEmp();
//                 case updateRole:
//                     return updateEmpRole();
//                 case quit:
//                     showMenu = false;
//                     break;
//             };
//         });
// }

// After adding a new item, call the get function to refresh the contents of that item.
