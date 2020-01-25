function addOneToDigitCount(num,digitsAndCounts){
	switch (num){
        case 0:
			return digitsAndCounts.zeroes++
			break;
        case 1:
			return digitsAndCounts.ones++
			break;
        case 2:
			return digitsAndCounts.twos++
			break;
        case 3:
			return digitsAndCounts.threes++
			break;
        case 4:
			return digitsAndCounts.fours++
			break;
        case 5:
			return digitsAndCounts.fives++
			break;
        case 6:
			return digitsAndCounts.sixes++
			break;
        case 7:
			return digitsAndCounts.sevens++
			break;
        case 8:
			return digitsAndCounts.eights++
			break;
        case 9:
			return digitsAndCounts.nines++
			break;
    }
}

function quantifyEachDigit(num){
	let digits = num.toString().split("").map(char => parseInt(char))
	console.log(digits.sort())
	//0123456789
	//count how many of each
	let digitsAndCounts = {ones: 0, twos: 0, threes: 0, fours: 0, fives: 0, sixes: 0, sevens: 0, eights: 0, nines: 0, zeroes: 0}
	digits.forEach(digit => {
		addOneToDigitCount(digit,digitsAndCounts)
	})
	return digitsAndCounts
	//To get spef endpoint, attach key at end of fxn call
}