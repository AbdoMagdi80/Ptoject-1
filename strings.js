console.log(100000)
console.log(100_000)
console.log(1e5)
console.log(10**5)
console.log(Math.pow(10,5))
console.log(Math.round(100000.4))
console.log(Math.floor(100000.9))
console.log(Math.trunc(100000.5))
console.log(100001 - 1)
console.log(50000*2)
console.log(200000/2)
console.log(50000+50000)
console.log(parseInt("100000 dollerss"))
//////////////////////
console.log(Number.MIN_SAFE_INTEGER * -1)
/////////////////////

let myVar = "100.56789 Views";
console.log(parseInt(myVar))
console.log(parseFloat(myVar).toFixed(2)*1)

//////////////////////

let num = 10;

console.log(Number.isInteger(num) + Number.isInteger(num))

//////////////////////

let fit = 10.4;

console.log(fit.toFixed()*1);
console.log(Math.floor(fit));
console.log(Math.round(fit));
console.log(Math.trunc(fit));
console.log(parseInt(fit));

/////////////////

let rand = [0,1,2,3,4];

console.log(Math.floor(Math.random()*5))

///////////////

let name = "Elzero";

console.log(name[0].toLowerCase());
console.log(name.charAt(0).toLowerCase());
console.log(name.slice(0, 1 ) .toLowerCase());
console.log(name.substring(0,1).toLowerCase())
console.log(name.substr(0,1).toLowerCase())
console.log(name.split("l")[0].toLowerCase())

//////////////////

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO= "o";

console.log(word.includes(letterZ))
console.log(word.startsWith(letterE.toUpperCase()))
console.log(word.endsWith(letterO))