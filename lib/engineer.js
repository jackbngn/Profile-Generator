const inquirer = require("inquirer");
const { Employee } = require("./employees");

class Engineer extends Employee {
	constructor(name, id, email, github) {
		super(name, id, email);
		this.github = github;
		this.role = "Engineer";
	}
	engineerPrompt() {
		return inquirer
			.prompt([
				{
					type: "input",
					name: "engineerName",
					message: "What is the Engineer's name?",
				},
				{
					type: "input",
					name: "employeeID",
					message: "What is the Engineer's employee ID?",
				},
				{
					type: "input",
					name: "email",
					message: "What is the Engineer's email address?",
				},
				{
					type: "input",
					name: "github",
					message: "What is the Engineer's github?",
				},
			])
			.then((answers) => {
				const engineer = new Engineer(
					answers.engineerName,
					answers.employeeID,
					answers.email,
					answers.github
				);
				return engineer;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

module.exports = Engineer;
