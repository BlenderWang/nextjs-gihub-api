function getRandomWord() {
	const words = ["tailwind", "redis", "tesla", "penutbutter"];
	return words[Math.floor(Math.random() * words.length)];
}

export { getRandomWord };
