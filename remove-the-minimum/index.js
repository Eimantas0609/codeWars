function removeSmallest(numbers) {
	let indexOfMin = numbers.indexOf(Math.min(...numbers));
	return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

console.log(
	removeSmallest([1, 2, 3, 4, 5]),
	[2, 3, 4, 5],
	"Wrong result for [1, 2, 3, 4, 5]"
);
console.log(
	removeSmallest([5, 3, 2, 1, 4]),
	[5, 3, 2, 4],
	"Wrong result for [5, 3, 2, 1, 4]"
);
console.log(
	removeSmallest([2, 2, 1, 2, 1]),
	[2, 2, 2, 1],
	"Wrong result for [2, 2, 1, 2, 1]"
);
console.log(removeSmallest([]), [], "Wrong result for []");
