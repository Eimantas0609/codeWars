function isIsogram(str) {
	return !/(\w).*\1/i.test(str);
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");
