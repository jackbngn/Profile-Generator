const inquirer = require("inquirer");
const { Employee } = require("./employees");

class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
		this.role = "Intern";
	}
	internPrompt() {
		return inquirer
			.prompt([
				{
					type: "input",
					name: "internName",
					message: "What is the Intern's name?",
				},
				{
					type: "input",
					name: "employeeID",
					message: "What is the Intern's employee ID?",
				},
				{
					type: "input",
					name: "email",
					message: "What is the Intern's email address?",
				},
				{
					type: "input",
					name: "school",
					message: "What is the Intern's school?",
				},
			])
			.then((answers) => {
				const intern = new Intern(
					answers.internName,
					answers.employeeID,
					answers.email,
					answers.school
				);
				return intern;
			})
			.catch((error) => {
				console.log(error);
			});
	}
}

module.exports = Intern;
