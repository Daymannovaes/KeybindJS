describe("work#Keybind", function() {

	afterEach(function() {
		Keybind.reset.all();
	});

	describe(".reset", function() {
		it("should reset all Keybind instance", function() {
			Keybind.something = "something";

			expect(Keybind.something).not.toBe(undefined);

			Keybind.reset.all();

			expect(Keybind.something).toBe(undefined);

		});
	});

	describe(".throw.by", function() {
		describe(".type", function() {
			it("should works for undefined param", function() {
				expect(function() {
					Keybind.throw.by.type({
						param: undefined,
					});
				}).toThrow();

				expect(function() {
					Keybind.throw.by.type({
						param: undefined,
						shouldBeDefined: false
					});
				}).not.toThrow();
			});

			it("should work for expectedType", function() {
				expect(function() {
					Keybind.throw.by.type({
						param: "param1",
						expectedType: "integer",
					});
				}).toThrow();

				expect(function() {
					Keybind.throw.by.type({
						param: "param1",
						expectedType: "string",
					});
				}).not.toThrow();
			});

			describe("#error messages", function() {
				it("should works for default and defineds", function() {
					expect(function() {
						Keybind.throw.by.type({
							param: "param1",
							expectedType: "number",
							message: "message test"
						});
					}).toThrow("message test");

					expect(function() {
						Keybind.throw.by.type({
							param: undefined
						});
					}).toThrow("Param undefined must be defined");

					expect(function() {
						Keybind.throw.by.type({
							param: 1,
							expectedType: "string"
						});
					}).toThrow("Invalid type of 1 parameter. Expect string instead of number");
				});
			});
		});
	});
	describe(".throw.all.by", function() {
		describe(".type", function() {
			it("should works for a lots of params", function() {
				expect(function() {
					Keybind.throw.all.by.type([1, "a", function(){}, {}, []],
										  ["number", "string", "function", "object", "object"]);
				}).not.toThrow();
				expect(function() {
					Keybind.throw.all.by.type([1, "a", function(){}, {}, []],
										  ["string", "number", "function", "object", "object"]);
				}).toThrow();
			});

			it("should work for expectedType", function() {
				expect(function() {
					Keybind.throw.by.type({
						param: "param1",
						expectedType: "integer",
					});
				}).toThrow();

				expect(function() {
					Keybind.throw.by.type({
						param: "param1",
						expectedType: "string",
					});
				}).not.toThrow();
			});

			describe("#error messages", function() {
				it("should works for default and defineds", function() {
					expect(function() {
						Keybind.throw.by.type({
							param: "param1",
							expectedType: "number",
							message: "message test"
						});
					}).toThrow("message test");

					expect(function() {
						Keybind.throw.by.type({
							param: undefined
						});
					}).toThrow("Param undefined must be defined");

					expect(function() {
						Keybind.throw.by.type({
							param: 1,
							expectedType: "string"
						});
					}).toThrow("Invalid type of 1 parameter. Expect string instead of number");
				});
			});
		});
	});


	describe(".define", function() {

		describe(".execute", function() {

			it("should return a Keybind.Execute", function() {
				expect(Keybind.define.execute("", function(){}) instanceof Keybind.Execute).toEqual(true);
			});


			it("should throw an error if namespace isn't string", function() {
				expect(function() {
					Keybind.define.execute(1);
				}).toThrow();
			});

			it("should throw an error if function isn't a function", function() {
				expect(function() {
					Keybind.define.execute("", 1);
				}).toThrow();
			});

		});

		describe(".element", function() {

			it("should return a Keybind.Element", function() {
				expect(Keybind.define.element("", function(){}) instanceof Keybind.Element).toEqual(true);
			});
		});
	});

	describe(".get", function() {

		describe(".execute", function() {

			it(".get.executes length should be one after define one execute", function() {
				Keybind.define.execute("namespace", function(){});

				expect(Keybind.get.executes().length).toEqual(1);
			});

			it("should return properly by namespace", function() {
				var emptyFn = function() {};
				Keybind.define.execute("path", emptyFn);
				Keybind.define.execute("path.to", emptyFn);
				Keybind.define.execute("path.to.namespace", emptyFn);

				expect(Keybind.get.execute("path").to).not.toBe(undefined);
			});
	});

		describe(".element", function() {

			it(".get.elements length should be one after define one element", function() {
				Keybind.define.element("namespace", "body");

				expect(Keybind.get.elements().length).toEqual(1);
			});

			it("should return properly by namespace", function() {
				Keybind.define.element("path", "body");
				Keybind.define.element("path.to", "body");
				Keybind.define.element("path.to.namespace", "body");

				expect(Keybind.get.element("path").to).not.toBe(undefined);
			});
		});
	});
});