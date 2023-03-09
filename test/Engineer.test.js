const Engineer = require("../lib/engineer");

jest.mock("inquirer");

describe("Engineer class", () => {
	describe("engineerPrompt", () => {
		it("should return an Engineer object from engineerPrompt()", () => {
			const mockAnswers = {
				engineerName: "Jack Nguyen",
				employeeID: "123",
				email: "jackngn83@gmail.com",
				github: "jackbngn",
				role: "Engineer",
			};

			const engineer = new Engineer();
			engineer.engineerPrompt = jest.fn().mockResolvedValue(mockAnswers);
			return engineer.engineerPrompt().then((response) => {
				expect(response.engineerName).toEqual(mockAnswers.engineerName);
				expect(response.employeeID).toEqual(mockAnswers.employeeID);
				expect(response.email).toEqual(mockAnswers.email);
				expect(response.github).toEqual(mockAnswers.github);
			});
		});
	});
});
