const Manager = require("./lib/manager");
const promptMenu = require("./src/promptMenu");
const { employeeArr } = require("./lib/employees");

const manager = new Manager();

//call managerPrompt on start
manager.managerPrompt().then((answers) => {
	const newManager = new Manager(
		answers.managerName,
		answers.employeeID,
		answers.email,
		answers.officeNumber
	);
	employeeArr.push(newManager);
	console.log(employeeArr);
	promptMenu();
});
