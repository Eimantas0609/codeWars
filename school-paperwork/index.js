function paperwork(n, m) {
	if (n < 0 || m < 0) {
		return 0;
	}
	return n * m;
}

console.log(paperwork(5, 5), 25, "Failed at paperwork(5, 5)");
console.log(paperwork(5, -5), 0, "Failed at paperwork(5, -5)");
console.log(paperwork(-5, -5), 0, "Failed at paperwork(-5, -5)");
console.log(paperwork(-5, 5), 0, "Failed at paperwork(-5, 5)");
console.log(paperwork(5, 0), 0, "Failed at paperwork(5, 0)");
