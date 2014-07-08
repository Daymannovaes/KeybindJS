describe("define#Keybind", function() {

	afterEach(function() {
		Keybind.reset.all();
	});

	it("should exist", function() {
		expect(Keybind).not.toBe(undefined);
	});
	it("should be an object", function() {
		expect(typeof Keybind).toEqual("object");
	});

	describe(".reset", function() {
		it("should exist", function() {
			expect(Keybind.reset).not.toBe(undefined);
		});
		it("should be an object", function() {
			expect(typeof Keybind.reset).toEqual("object");
		});

		describe(".all", function() {
			it("should exist", function() {
				expect(Keybind.reset.all).not.toBe(undefined);
			});
			it("should be a function", function() {
				expect(typeof Keybind.reset.all).toEqual("function");
			});
		});
	});

	describe(".throw", function() {
		it("should exist", function() {
			expect(Keybind.throw).not.toBe(undefined);
		});
		it("should be an object", function() {
			expect(typeof Keybind.throw).toEqual("object");
		});


		describe(".by", function() {
			it("should exist", function() {
				expect(Keybind.throw.by).not.toBe(undefined);
			});
			it("should be an object", function() {
				expect(typeof Keybind.throw.by).toEqual("object");
			});


			describe(".type", function() {
				it("should exist", function() {
					expect(Keybind.throw.by.type).not.toBe(undefined);
				});
				it("should be a function", function() {
					expect(typeof Keybind.throw.by.type).toEqual("function");
				});
			});
		});
	});

	describe(".all", function() {
		it("should exist", function() {
			expect(Keybind.throw.all).not.toBe(undefined);
		});
		it("should be an object", function() {
			expect(typeof Keybind.throw.all).toEqual("object");
		});
		describe(".by", function() {
			it("should exist", function() {
				expect(Keybind.throw.all.by).not.toBe(undefined);
			});
			it("should be an object", function() {
				expect(typeof Keybind.throw.all.by).toEqual("object");
			});


			describe(".type", function() {
				it("should exist", function() {
					expect(Keybind.throw.all.by.type).not.toBe(undefined);
				});
				it("should be a function", function() {
					expect(typeof Keybind.throw.all.by.type).toEqual("function");
				});
			});
		});
	});
	describe(".define", function() {
		it("should exist", function() {
			expect(Keybind.define).not.toBe(undefined);
		});
		it("should be an object", function() {
			expect(typeof Keybind.define).toEqual("object");
		});

		describe(".execute", function() {
			it("should exist", function() {
				expect(Keybind.define.execute).not.toBe(undefined);
			});
			it("should be a function", function() {
				expect(typeof Keybind.define.execute).toEqual("function");
			});
		});

		describe(".element", function() {
			it("should exist", function() {
				expect(Keybind.define.element).not.toBe(undefined);
			});
			it("should be a function", function() {
				expect(typeof Keybind.define.element).toEqual("function");
			});
		});
	});

describe(".get", function() {
	it("should exist", function() {
		expect(Keybind.get).not.toBe(undefined);
	});
	it("should be an object", function() {
		expect(typeof Keybind.get).toEqual("object");
	});

	describe(".execute", function() {
		it("should exist", function() {
			expect(Keybind.get.execute).not.toBe(undefined);
		});
		it("should be a function", function() {
			expect(typeof Keybind.get.execute).toEqual("function");
		});
	});

	describe(".element", function() {
		it("should exist", function() {
			expect(Keybind.get.element).not.toBe(undefined);
		});
		it("should be a function", function() {
			expect(typeof Keybind.get.element).toEqual("function");
		});
	});
});
});