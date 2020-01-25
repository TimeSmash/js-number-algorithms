function countOddDigits(num){
	let numString = num.toString()
	let digits = numString.split("").map(stringNum => parseInt(stringNum))
	return digits.filter(digit => digit % 2 !== 0).length	
}