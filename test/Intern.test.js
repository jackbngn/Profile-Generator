const Intern = require("../lib/intern");

describe("Intern class", () => {
	describe("internPrompt", () => {
		it("should return an Intern Object", () => {
			const mockAnswers = {
				internName: "Jack Nguyen",
				employeeID: 123,
				email: "jackngn83@gmail.com",
				school: "University of Irvine",
				role: "Intern",
			};
			const intern = new Intern();
			intern.internPrompt = jest.fn().mockResolvedValue(mockAnswers);
			return intern.internPrompt().then((response) => {
				expect(response.internName).toBe(mockAnswers.internName);
				expect(response.employeeID).toBe(mockAnswers.employeeID);
				expect(response.email).toBe(mockAnswers.email);
				expect(response.school).toBe(mockAnswers.school);
				expect(response.role).toBe(mockAnswers.role);
			});
		});
	});
});
