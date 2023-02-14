function getRectangleString(w, h) {
	const rn = "\r\n";
	const tb = "*".repeat(w) + rn;
	const center =
		w > 1 ? ("*" + " ".repeat(w - 2) + "*" + rn).repeat(h - 2) : "";

	return h > 1 ? tb + center + tb : tb.repeat(h);
}

// const getRectangleString = (w, h) =>
//   [...Array(h)].map((_, idx) => `${!idx || idx === h - 1 ? `*`.repeat(w) : `*${` `.repeat(w - 2)}*`}\r\n`).join(``);

// getRectangleString = (w, h) => `${'*'.repeat(w)}\r\n` +
//   (h > 2 ? (`*${' '.repeat(w - 2)}*\r\n`).repeat(h - 2) : '') +
//   (h > 1 ? `${'*'.repeat(w)}\r\n` : '');

console.log(getRectangleString(3, 3));
