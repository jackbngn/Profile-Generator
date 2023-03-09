const Manager = require("../lib/manager");
const Manger = require("../lib/manager");

describe("Manager class", () => {
	describe("managerPrompt", () => {
		it("should return a Manager Object", () => {
			const mockAnswers = {
				managerName: "Jack Nguyen",
				employeeID: 123,
				email: "jackngn83@gmail.com",
				officeNumber: 123,
				role: "Manager",
			};
			const manager = new Manger();
			manager.managerPrompt = jest.fn().mockResolvedValue(mockAnswers);
			return manager.managerPrompt().then((response) => {
				expect(response.managerName).toBe(mockAnswers.managerName);
				expect(response.employeeID).toBe(mockAnswers.employeeID);
				expect(response.email).toBe(mockAnswers.email);
				expect(response.officeNumber).toBe(mockAnswers.officeNumber);
				expect(response.role).toBe(mockAnswers.role);
			});
		});
	});
});
