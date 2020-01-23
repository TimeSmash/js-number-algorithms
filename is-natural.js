function isPositive(num){
	 if (num < 0){
		return  false
	} else { return true}
}

// function isWholeNumber(num){
//     if (num.toString().includes(".")){
//        return false
//    } else { return true}
// }

// function isFinite(num){
//     if (num === Infinity){
//        return false
//    } else { return true}
// }


function isNatural(num){
	if(typeof num !== "number" || num === NaN){
		return "Argument that is not a number received. Please input a number."
    }
	if (isPositive(num) && Number.isInteger(num) && Number.isFinite(num)){
        return true
    } else {return false}
}