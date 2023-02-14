const returnSpecifics = (o) => {
	let [N, F] = [[], []];
	for (let k in o) {
		if (typeof o[k] === "number") N.push(o[k]);
		if (typeof o[k] === "function") F.push(k);
	}
	return N.length < 1 && F.length < 1 ? ["The Object is Empty"] : [...N, ...F];
};

console.log(
	returnSpecifics({
		a: 1,
		b: 2,
		c: 3,
		d: "d",
		e: "dsds",
		add: function (a, b) {
			return a + b;
		},
		g: 34,
	}),
	[1, 2, 3, 34, "add"]
); //-- array
console.log(
	returnSpecifics({
		a: 10,
		b: -20,
		c: true,
		d: "d",
		e: 50,
		subtract: function (a, b) {
			return a - b;
		},
		g: 100,
	}),
	[10, -20, 50, 100, "subtract"]
); //-- array
console.log(
	returnSpecifics({
		a: 44456,
		b: 999,
		c: true,
		d: "d",
		e: 5094430,
		arr: [1, 2, 3],
		g: 1980700,
	}),
	[44456, 999, 5094430, 1980700]
); //-- array
console.log(
	returnSpecifics({
		add: function (a, b) {
			return a + b;
		},
		b: [3, 5, 6],
		c: true,
		d: "d",
		double: function (a) {
			return a * a;
		},
		subtract: function (a, b) {
			return a - b;
		},
		g: false,
	}),
	["add", "double", "subtract"]
); //-- array
console.log(returnSpecifics({}), ["The Object is Empty"]);
