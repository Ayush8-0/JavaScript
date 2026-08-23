function calculate(){
const a = Number(document.getElementById("a").value)
const b = Number(document.getElementById("b").value)
return {a,b}
}
function add(){
    const {a, b} = calculate();
    alert(`Sum is: ${a+b}`)
}
function sub(){
    const {a, b} = calculate();
    alert(`Difference is: ${a-b}`)
}
function mul(){
    const {a, b} = calculate();
    alert(`Product is: ${a*b}`)
}
function div(){
    const {a, b} = calculate();
    alert(`Division(Quotient) is: ${a/b}`)
}
function rem(){
    const {a, b} = calculate();
    alert(`Remainder is: ${a%b}`)
}
//**************************************************** NUMBER PROGRAMS ********************************************************************** */
console.log("-------------------Buzz No--------------------");
function buzzNumber() {
    const {a, b} = calculate();
    if (a % 7 === 0 || a % 10 === 7) {
        alert(`Buzz Number: ${a}`);
    }
}

console.log("-------------------Automorphic No--------------------");
function automorphicNumber() {
    const {a, b} = calculate();
    let square = a * a;
    let flag = true;
    for(let i = a; i > 0; i = Math.floor(i / 10), square = Math.floor(square / 10)) {
        if (i % 10 !== square % 10) {
            flag = false;
            break;
        }
    }
    if (flag) {
        alert(`${a} is an Automorphic Number`);
    }
    else alert(`${a} is not an Automorphic Number`);
}


console.log(`--------------------Strong No---------------------`);
function strongNumber() {
    const {a, b} = calculate();
    let sum = 0;
    for(let i = a; i>0; i = Math.floor(i/10)){
        let ld = i % 10;
        let fact = 1;
        for(let j = 1; j <= ld; j++){
			fact *= j;
		}
		sum += fact;
	}
	if(a === sum) alert(`Strong No. ${a}`)
	else alert(`Not a Strong No. ${a}`)
}

console.log(`--------------------Neon No---------------------`);
function neonNumber() {
    const {a, b} = calculate();
    let sum = 0;
    let sq = b * b;
    for(let i = sq; i>0; i = Math.floor(i/10)){
        let ld = i % 10;
        sum += ld;
    }
    if(sum === b) alert(`Neon No. ${b}`)
    else alert(`Not a Neon No. ${b }`)
}

console.log(`--------------------Tech No---------------------`);
function techNumber() {
    const {a, b} = calculate();
    let num = b; // or b, depending on which number you want to check
    let cnt = 0
	for(let i = num; i>0; i = Math.floor(i/10)){
		cnt++
	}
	
	if(cnt % 2 == 0){
		let pow = 1;
		for(let i = 0; i < Math.floor(cnt / 2 ); i++){
			pow *= 10;
		}
		
		let firstNum = Math.floor(b/pow);
		let lastNum = b%pow;
		
		let sum = firstNum + lastNum;
		let sq = sum*sum

		if(sq === num) alert(`Tech No. ${b}`)
		else alert(`Not a Tech No. ${b}`)		
	}
	else alert(`Not a Tech No. ${num}`)


}

console.log(`--------------------Armstrong No---------------------`);
function armstrongNumber() {
    const {a, b} = calculate();
    let num = b; // or b, depending on which number you want to check
    let sum = 0;
    for(let i = num; i>0; i = Math.floor(i / 10)){
        let ld = i % 10;
        
        let pow = 1;
		for(let j = 0; j<3; j++){
			pow *=ld;
		}
		sum += pow
	}
if(sum === b) alert(`Armstrong No. ${b}`);
else alert(`Not a Armstrong No. ${b}`);
}

