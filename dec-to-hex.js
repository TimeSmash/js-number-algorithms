//APPROX hex values due to JavaScript's overflow/double-precision floating point activity with numbers whose length >15
function convertRemToHex(rem){
	switch (rem){
        case 0:
			return 0
			break;
		case 1:
			return 1
			break;
		case 2:
			return 2
			break;
		case 3:
			return 3
			break;
		case 4:
			return 4
			break;
		case 5:
			return 5
			break;
		case 6:
			return 6
			break;
		case 7:
			return 7
			break;
		case 8:
			return 8
			break;
		case 9:
			return 9
			break;
		case 10:
			return "A"
			break;
		case 11:
			return "B"
			break;
		case 12:
			return "C"
			break;
		case 13:
			return "D"
			break;
		case 14:
			return "E"
			break;
		case 15:
			return "F"
			break;
		case 16:
			return 10
			break;
	}
}

function convertToHex(num){
	console.log("num string", num.toString())
	if(num.toString()[0] === "0"){return "Please enter a number that does not begin with zero."}
	// get num divided by 16, use its remainder as hex 		  val
	// Take quotient and divide again by 16, get
    // remainder as next hex val, repeat until quo = 0?
	let hex = []
	let quo = 1
	let rem = 0
	console.log("num arg", num)
	console.log("length",num.toString().length)

	while (quo !== 0){
		console.log(num)
		console.log("quo = " + num + "/16", Math.floor(num/16))
		console.log("remainder", num % 16)
		quo = Math.floor(num/16)
		rem = num % 16
		hex.unshift(rem)
		num = quo
	}
		return hex.map(number => convertRemToHex(number)).join("")
}