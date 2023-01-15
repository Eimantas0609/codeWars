function Fighter(name, health, damagePerAttack) {
	this.name = name;
	this.health = health;
	this.damagePerAttack = damagePerAttack;
	this.toString = function () {
		return this.name;
	};
}

function declareWinner(fighter1, fighter2, firstAttacker) {
	let fighter1Health = fighter1.health;
	let fighter2Health = fighter2.health;

	if (firstAttacker === fighter1.name) {
		while (fighter1Health > 0 && fighter2Health > 0) {
			fighter2Health -= fighter1.damagePerAttack;
			if (fighter2Health <= 0) {
				return fighter1.name;
			}
			fighter1Health -= fighter2.damagePerAttack;
			if (fighter1Health <= 0) {
				return fighter2.name;
			}
		}
	} else {
		while (fighter1Health > 0 && fighter2Health > 0) {
			fighter1Health -= fighter2.damagePerAttack;
			if (fighter1Health <= 0) {
				return fighter2.name;
			}
			fighter2Health -= fighter1.damagePerAttack;
			if (fighter2Health <= 0) {
				return fighter1.name;
			}
		}
	}
	return "";
}

console.log(
	declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"),
	"Lew"
);

console.log(
	declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry"),
	"Harry"
);

console.log(
	declareWinner(
		new Fighter("Harald", 20, 5),
		new Fighter("Harry", 5, 4),
		"Harry"
	),
	"Harald"
);

console.log(
	declareWinner(
		new Fighter("Harald", 20, 5),
		new Fighter("Harry", 5, 4),
		"Harald"
	),
	"Harald"
);

console.log(
	declareWinner(
		new Fighter("Jerry", 30, 3),
		new Fighter("Harald", 20, 5),
		"Jerry"
	),
	"Harald"
);

console.log(
	declareWinner(
		new Fighter("Jerry", 30, 3),
		new Fighter("Harald", 20, 5),
		"Harald"
	),
	"Harald"
);
