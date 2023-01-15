function twiceAsOld(dadYearsOld, sonYearsOld) {
	return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

console.log(twiceAsOld(36, 7), 22);

console.log(twiceAsOld(55, 30), 5);

console.log(twiceAsOld(42, 21), 0);

console.log(twiceAsOld(22, 1), 20);

console.log(twiceAsOld(29, 0), 29);
