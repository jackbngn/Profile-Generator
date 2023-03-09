const { employeeArr, Employee } = require("../lib/employees");

describe("Employee class", () => {
	describe("constructor", () => {
		it("should create an employee with the correct prperties", () => {
			const name = "Jack Nguyen";
			const id = 123;
			const email = "jackngn83@gmail.com";
			const employee = new Employee(name, id, email);

			expect(employee.name).toEqual(name);
			expect(employee.id).toEqual(id);
			expect(employee.email).toEqual(email);
		});
	});
});

describe("employees array", () => {
	it("should check if employees array is empty", () => {
		expect(employeeArr.length).toBe(0);
	});
});
