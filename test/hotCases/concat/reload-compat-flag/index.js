var x = require("./module");

it("should allow to hot replace modules in a ConcatenatedModule", (done) => {
	expect(x).toEqual({
		default: "ok1",
		__esModule: true
	});
	module.hot.accept("./module", () => {
		x = require("./module");
		expect(x).toEqual({
			default: "ok2",
			__esModule: true
		});
		done();
	});
	NEXT(require("../../update")(done));
});
