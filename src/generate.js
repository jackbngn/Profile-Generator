const fs = require("fs");
//function to to create html
function generateHTML(employees) {
	console.log("employees:", employees);
	//check to see if there is any employees if not then console.log error
	if (!employees || employees.length === 0) {
		console.log("Error: No employees to generate HTML for.");
		return;
	}

	const employeeCards = employees.map((employee) => {
		let role = employee.role;
		let id = employee.id;
		let name = employee.name;
		let email = employee.email;
		let special = "";

		//check the roles of each employee to implement each of their speciality and apply emoji for their roles
		if (role === "Manager") {
			role = `☕${employee.role}`;
			special = `Office Number: ${employee.officeNumber}`;
		} else if (role === "Engineer") {
			role = `👓${employee.role}`;
			special = `GitHub: <a href="https://github.com/${employee.github}" target="_blank"> ${employee.github}</a>`;
		} else if (role === "Intern") {
			role = `🎓${employee.role}`;
			special = `School: ${employee.school}`;
		}

		//insert the data for each role into html
		return `
				<div class="col-md-12 box ">
        	<h2>${name}</h2>
        	<h3>${role}</h3>
					<div class="info">
        		<ul>
          		<li>ID: ${id}</li>
          		<li>Email: <a href="mailto:${email}">${email}</a></li>
          		<li>${special}</li>
        		</ul>
					</div>
				</div>
				`;
	});

	//join each roles into the html
	const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
			<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
			rel="stylesheet"
			integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
			crossorigin="anonymous" />
      <link rel="stylesheet" href="/dist/css/style.css" />
      <title>My Team</title>
    </head>

      <nav>
		    <h1>My Team</h1>
	    </nav>

    <body>

		<div class="container">
			<div class="row">
      	${employeeCards.join("")}
			</div>
		</div>

    </body>
    </html>
  `;

	//write the file for index.html
	fs.writeFile("dist/html/index.html", html, (error) => {
		if (error) throw error;
		console.log("index.html file generated successfully!");
	});
}

module.exports = generateHTML;
