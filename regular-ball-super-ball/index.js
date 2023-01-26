var Ball = function (ballType) {
	this.ballType = ballType || "regular";
};

console.log(new Ball().ballType, "regular");
console.log(new Ball("super").ballType, "super");
