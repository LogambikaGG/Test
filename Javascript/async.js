// Sync code Example

function otherFunct()
{
    console.log("From other function");

}

console.log("Sync code Start");
otherFunct();
console.log("Sync code End");


// Async code Example

console.log("Async code Start");

    setTimeout(() => {
        console.log("Timeout function is running");
    }, 5000);

console.log("Async code End");
