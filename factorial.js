function factorial(num, result = num){
// 	console.log(num)
// 	console.log("result init", result)
	if (num > 1){
		result = result*(num-1) //20
// 		console.log("result", result)
		num--
		return factorial(num, result)
    }
	return result
}