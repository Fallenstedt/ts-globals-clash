import { b } from "./index";

describe("b", () => {
	it("should exist", () => {
		// the expect here is for jasmine, but it should be for jest.
		expect(b()).toBe(true);
	});
});
