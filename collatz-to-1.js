// //From Wikipedia:
// start with any positive integer n.
//  Then each term is obtained from the previous term as follows: if the previous term is even, the next term is one half the previous term.
//  If the previous term is odd, the next term is 3 times the previous term plus 1.
//  The conjecture is that no matter what value of n, the sequence will always reach 1.

function collatzTo1(num){
    let terms = []
    terms.push(num)
    while(num >1){
// 		console.log(num)
		if(num % 2 ===0){
			num = num/2
			terms.push(num)
        } else {
			num = (3*num) + 1
			terms.push(num)
        }
// 		debugger
    }
// 	console.log("final num", num)
	return terms
}