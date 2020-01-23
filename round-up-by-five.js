function roundUpFiveWhenLastDigitLow(numString){
	let replaced = numString.split("")
		replaced[replaced.length-1] = 5
		return parseInt(replaced.join(""))
}

function roundUpFiveWhenLastDigitHigh(num){
	let a
	while(a!==0){
		num ++
		a = parseInt(num.toString()[num.toString().length-1])
	}
	return num
}

function roundUpByFive(num){
	let numString = num + ""
	if (num % 5 === 0){return num}
	else if([1,2,3,4].includes(parseInt(numString[numString.length-1]))){
		return roundUpFiveWhenLastDigitLow(numString)
    } else if([6,7,8,9].includes(parseInt(numString[numString.length-1]))){
	    return roundUpFiveWhenLastDigitHigh(num)	
    }
}