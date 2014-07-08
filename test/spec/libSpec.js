describe("Libraries", function() {
	describe("jQuery", function() {
		it("should exist", function() {
			expect($).not.toBe(undefined);
		});

		it("should be a function", function() {
			expect(typeof $).toBe("function");
		});
	});
});
