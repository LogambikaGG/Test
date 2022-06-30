let code: (string | number);
code = 123;
code = "ABC";
//code = false; // Compiler Error

let empId: string | number;
empId = 111; 
empId = "E111";
//empId = true; // Compiler Error

console.log(code);      // ABC will be the output, since it's (variable name (i.e) code) overriden
console.log(empId);     // E111 will be the output, since it's (variable name (i.e) empId) overriden


function displayType(sample: (string | number))
{
    if(typeof(sample) === "number")
        console.log("Yes it's a Number.")

    else(typeof(sample) === "string")
        console.log("Yes it's a String.")
}

displayType(123);       // Output: Code is number.
displayType("ABC");     // Output: Code is string.
// displayType(true);      //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number



