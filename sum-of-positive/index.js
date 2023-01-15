function positiveSum(arr) {
	let total = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i] > 0) {
			total += arr[i];
		}
	}
	return total;
}

console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
