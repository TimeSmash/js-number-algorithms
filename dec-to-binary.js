function convertToBinary(num){ 
	let quo = 1
	let rem = 0
	let binaryArray = []
	// divide by 2 to get quo
	// get remainder (1 or 0) and push to array
	//repeat (loop/recurse) until quo = 0
	while (quo!==0){
		console.log("num", num)
		quo = Math.floor(num/2) //1. 6, 2. 3
		console.log(`q ${num}/2`, quo)
		rem = num % 2
		console.log("rem", rem)
		num = Math.floor(num/2)
		binaryArray.unshift(rem)
    }
	return parseInt(binaryArray.join(""))
}