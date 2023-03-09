const inquirer = require("inquirer");
const generateHTML = require("./generate");

const { employeeArr } = require("../lib/employees");
const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");

const engineer = new Engineer();
const intern = new Intern();

//promptMenu after manager prompt
function promptMenu() {
	inquirer
		.prompt([
			{
				type: "list",
				name: "action",
				message: "What would you like to do?",
				choices: [
					"Add an Engineer",
					"Add an Intern",
					"Finish building my team",
				],
			},
		])
		//Use switch case method to pick option
		.then((answers) => {
			switch (answers.action) {
				case "Add an Engineer":
					engineer.engineerPrompt().then((engineer) => {
						employeeArr.push(engineer);
						promptMenu();
					});
					break;
				case "Add an Intern":
					intern.internPrompt().then((intern) => {
						employeeArr.push(intern);
						console.log("Added");
						promptMenu();
					});
					break;
				default:
					generateHTML(employeeArr);
					break;
			}
		})
		.catch((error) => {
			console.log(error);
		});
}

module.exports = promptMenu;
