
// Import dependencies
const inquirer = require('inquirer');
const db = require('./db/connection.js');
const { getDeptId } = require('./dbquery.js');
const dbquery = require('./dbquery.js');
//missing console table 

const menuArray = ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role", "Quit"];
[viewDept, viewRole, viewEmp, addDept, addRole, addEmp, updateRole, quit] = menuArray;

let allDepartments = [];
let allRoles = [];
let allManagers = [];

// Setup allDepartments
const resetAllDepts = async () => {
    await dbquery.viewAllDept().then(results => {
        results[0].forEach(element => {
            allDepartments.push(element.Name);
        });
    });
}

// Setup allRoles
const resetAllRoles = async () => {
    await dbquery.getRoleTitles().then(results => {
        results[0].forEach(element => {
            allRoles.push(element.Title);
        });
    });
}

// Setup allManagers
const resetAllManagers = async () => {
    await dbquery.getManagers().then(results => {
        results[0].forEach(element => {
            allManagers.push(element.Manager);
        });
        allManagers.push('No Manager');
    });
}

// Menu 
const promptUserMenu = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: menuArray
        }
    ]).then(option => {
        switch (option.action) {
            case viewDept:
                viewAllDepartment();
                break;
            case viewRole:
                viewAllRole();
                break;
            case viewEmp:
                viewAllEmp();
                break;
            case addDept:
                addNewDept();
                break;
            case addRole:
                addNewRole();
                break;
            case addEmp:
                addNewEmp();
                break;
            case updateRole:
                updateEmpRole();
                break;
            case quit:
                break;
        };
    });
};

const viewAllDepartment = async () => {
    //use dbquery.methods to get database information
    await dbquery.viewAllDept().then(results => {
        console.table(results[0])
    });

    await promptUserMenu();
}

const viewAllRole = async () => {
    //use dbquery.methods to get database information
    await dbquery.viewAllRoles().then(results => {
        console.table(results[0])
    });

    await promptUserMenu();
}

const viewAllEmp = async () => {
    //use dbquery.methods to get database information
    await dbquery.viewAllEmployees().then(results => {
        console.table(results[0])
    });

    await promptUserMenu();
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
    ]).then(async deptInput => {
        //use dbquery.methods to publish new information to database
        await dbquery.addNewDepartment(deptInput.department).then(() => {
            console.log('New Department Added!');
        })

        await dbquery.viewAllDept().then(results => {
            console.table(results[0])
        });

        await promptUserMenu();
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

    ]).then(async newRoleInput => {
        //use dbquery.methods to publish new information to database
        let deptId = 0;

        await dbquery.getDeptId(newRoleInput.department).then(async result => {
            deptId = result[0][0].id;
        });
    
        await dbquery.addNewRole(newRoleInput, deptId);

        await promptUserMenu();
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
            type: "list",
            name: "role",
            message: "Select the new employee's role",
            choices: allRoles
        },
        {
            type: "list",
            name: "manager",
            message: "Select the new employee's manager",
            choices: allManagers
        }
    ]).then(empInput => {
        console.log(empInput);
    });
}

const updateEmpRole = () => {
    return inquirer.prompt()
        .then() //use dbquery.methods to publish new information to database)
}
resetAllDepts();
resetAllRoles();
resetAllManagers();

promptUserMenu();

// After adding a new item, call the get function to refresh the contents of that item.
