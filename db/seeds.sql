INSERT INTO department (name)
VALUES 
    ("Sales"),
    ("Finance"),
    ("Engineering"),
    ("Human Resource"),
    ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES 
    ("Salesperson", 80000, 1),
    ("Sales Lead", 100000, 1),
    ("Customer Service Rep", 70000, 1),
    ("Accountant", 125000, 2),
    ("Account Manager", 160000, 2),
    ("Software Engineer", 120000, 3),
    ("Principal Engineer", 150000, 3),
    ("HR Lead", 115000, 4),
    ("HR Representative", 65000, 4),
    ("Recruiter", 60000, 4),
    ("Lawyer", 190000, 5),
    ("Legal Team lead", 250000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("John", "Doe", 2, null),
    ("Mike", "Chan", 1, 1),
    ("Hannah", "Adams", 3, 1),
    ("Abhishek", "Arya", 7, null),
    ("David", "Shi", 6, 3),
    ("Kunal", "Singh", 5, null),
    ("Elijah", "Viola", 4, 6),
    ("Dianne", "Ruth", 8, null),
    ("Jeffrey", "Kennedy", 10, 8),
    ("Sarah", "Lourd", 12, null),
    ("Tom", "Allen", 11, 10);