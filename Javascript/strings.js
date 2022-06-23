// Callculating the Length
let text = "Logambika_B";
let length = text.length;
console.log(length);

/*
    \b Backspace 
    \f Form feed
    \n New Line
    \t Horizontal tabulator
    \v Vertical tabulator
*/

let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);   // the count starts from 0 from left to right
console.log(part);

let str1 = "Apple, Banana, Kiwi";
let part1 = str.slice(-12, -6);    // the count starts from 0 from right to left
console.log(part1);

//Looping Array Element
const fruits = ["Apple", "Grapes", "Mango", "Orange"];
let text1 = "<ul>";
fruits.forEach(myFunction);
text1 += "</ul>";

function myFunction(fruits) {
    text1 += "<li>" + fruits + "</li>";
}
console.log(text1);

// Adding Array Element
const F_fruits = ["Banana",];
function myfunctionname()
{
    F_fruits.push("Lemon");
}
myfunctionname();
console.log(F_fruits);


