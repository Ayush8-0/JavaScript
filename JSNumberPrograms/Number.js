console.log("-------------------Buzz No--------------------");
function buzzNumber(num) {
    if (num % 7 === 0 || num % 10 === 7) {
        console.log(`Buzz Number: ${num}`);
    }
}
    buzzNumber(7);

console.log("-------------------Automorphic No--------------------");
function automorphicNumber(num) {  
    let square = num * num;
    let flag = true;
    for(let i = num; i > 0; i = Math.floor(i / 10), square = Math.floor(square / 10)) {
        if (i % 10 !== square % 10) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log(`${num} is an Automorphic Number`);
    }
    else console.log(`${num} is not an Automorphic Number`);
}
automorphicNumber(5);

console.log(`--------------------Strong No---------------------`);
function strongNumber(num) {
 	let sum = 0;
	for(let i = num; i>0; i = Math.floor(i/10)){
		let ld = i % 10;
		let fact = 1;
		for(let j = 1; j <= ld; j++){
			fact *= j;
		}
		sum += fact;
	}
	if(num === sum) console.log(`Strong No. ${num}`)
	else console.log(`Not a Strong No. ${num}`)
}
strongNumber(145);

console.log(`--------------------Neon No---------------------`);
function neonNumber(num){
	let sum = 0
	let sq = num*num;
	for(let i = sq; i>0; i = Math.floor(i/10)){
		let ld = i%10;
		sum += ld;	
	}
	if(sum === num) console.log(`Neon No. ${num}`)
	else console.log(`Not a Neon No. ${num}`)

}
neonNumber(9);

console.log(`--------------------Tech No---------------------`);
function TechNumber(num){
	let cnt = 0
	for(let i = num; i>0; i = Math.floor(i/10)){
		cnt++
	}
	
	if(cnt % 2 == 0){
		let pow = 1;
		for(let i = 0; i < Math.floor(cnt / 2 ); i++){
			pow *= 10;
		}
		
		let firstNum = Math.floor(num/pow);
		let lastNum = num%pow;
		
		let sum = firstNum + lastNum;
		let sq = sum*sum

		if(sq === num) console.log(`Tech No. ${num}`)
		else console.log(`Not a Tech No. ${num}`)		
	}
	else console.log(`Not a Tech No. ${num}`)


}
TechNumber(2025)

console.log(`--------------------Armstrong No---------------------`);
function armstrongNumber(num){
	let sum = 0;
	for(let i = num; i>0; i = Math.floor(i / 10)){
		let ld = i % 10;
		
		let pow = 1;
		for(let j = 0; j<3; j++){
			pow *=ld;
		}
		sum += pow
	}
if(sum === num) console.log(`Armstrong No. ${num}`);
else console.log(`Not a Armstrong No. ${num}`);
}
armstrongNumber(153)