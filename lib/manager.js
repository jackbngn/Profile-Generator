const inquirer = require("inquirer");
const { Employee } = require("./employees");

class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
		this.role = "Manager";
	}
	managerPrompt() {
		return inquirer
			.prompt([
				{
					type: "input",
					name: "managerName",
					message: "What is the team manager's name?",
				},
				{
					type: "input",
					name: "employeeID",
					message: "What is the team manager's employee ID?",
				},
				{
					type: "input",
					name: "email",
					message: "What is the team manager's email address?",
				},
				{
					type: "input",
					name: "officeNumber",
					message: "What is the team manager's office number?",
				},
			])
			.catch((error) => {
				console.log(error);
			});
	}
}

module.exports = Manager;
