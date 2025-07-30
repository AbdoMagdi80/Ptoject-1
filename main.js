//adding a text to the page

document.write("hello ma nigga\n")

// styling a text in one line

console.table([1,2,3,4])
console.log("black %cred %cblue ","color : red; font-size :40px", "color: blue; font-size :30px");

//variable decleration

var name = "abdo";
console.log(`my name is ${name}`);
console.log(typeof name);
console.log(typeof 50);
console.log(typeof ['om','ma','asd']);
console.log(typeof [1,2,7,4,5]);//array or object
console.log(typeof {name:"osama", age: 17, countrey: "Egypt"});;
console.log(typeof null);

//editing an html text

hello.innerHTML ="options/nigga"
console.log("hello",hello)
// backslash "\" to disable thenext character

console.log ("options \'nigga'")

//concatenation

let a = 'hello';
let b = 'world';
let s = " ";
document.write( "\n" +a + s + b)
console.log(a," ",b)

// Template letrals or template strings
//etma script concatenation

console.log(`${a} ${b}`)
console.log(`${a} 
    
    ${b}`)
console.log(`${a} "" ${a}`)

let markup = `
<div class="parent">
    <div class="child">
        <h4> Welcome to our</h4>
        <h1>Page</h1>
    </div>
</div>
`
document.write(markup)

let text1 = "Welcome to our"
let text2 = "Page"
let markup2 = `
<div class="parent">
    <div class="child">
        <h4>${text1}</h4>
        <h1>${text2}</h1>
    </div>
</div>
`
document.write(markup)

/*Operators
    + Add
    - Sub
    * mult
    / devide
    ** square
    % modulus
    ++ incremenr
    -- decriment
*/

////////////////////

// Unary operations
     console.log(100)
     console.log(+"100") // "+" returns the number inside the ""
     console.log(+"-100")
     console.log(+"abdo") // NAN
     console.log(+"15.5")
     console.log( +0xff) //Hexadecimal
     console.log(+null) // 0
     console.log(+false) // 0
     console.log(+true) // 1

     //when applying "-" instead of "+" it gets the negative of the number

     console.log(Number("100"))


///////////////////////////////


//type casting

let x = "5";
let z = true;
let y = 10;

console.log(x - y) //-5
console.log(+x + z) // true equals 1

//assignment operators

// a = a + 10 ----> a=+10

//////////////////////

console.log(1e6) // 1000000
console.log(1_000_000) // 1000000

//////////////////////

console.log((100).toString());
console.log(100.5.toFixed());
console.log(parseInt("100 magdi")) //only returns numbers
console.log(parseFloat("100.5 100") )