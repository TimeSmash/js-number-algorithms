function digitalRoot(num){

    if (typeof num !== "number" || !Number.isInteger(num) || num === Infinity ){
        return "Error: " + num + " is not an integer. Please submit an integer (Infinity is invalid)."
    }
    
	let numArray = num.toString().split("").map(char => {
		return parseInt(char)
    })
// 	console.log(numArray)
	let digitalR = numArray.reduce( (num,currentVal) => {return num + currentVal}) 
    
	while (digitalR.toString().length > 1){
		//do digital root stuff
		let numberArr = digitalR.toString().split("").map(char => {
			return parseInt(char)
		})
		digitalR = numberArr.reduce( (num, currentVal) => {return num + currentVal})
    }
	return digitalR
}