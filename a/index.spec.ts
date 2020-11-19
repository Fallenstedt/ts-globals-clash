import { a } from "./index";

describe("a", () => {
	it("should be true", () => {
		// the expect here is for jasmine, and this is correct
		expect(a()).toBeTruthy();
	});
});
