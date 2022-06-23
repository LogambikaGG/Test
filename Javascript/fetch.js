// let fetchRequest = fetch("https://jsonplaceholder.typicode.com/todos/1");

// fetchRequest.then(
//     response => response.json()
//     )
//     .then(
//         result => {console.log(result)}
//         )

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json())
// .then(json => console.log(json))


// to run this fetch function we need to include the import statement
// import fetch from 'node-fetch';

// async function fetchFunc()
// {
//     const result = fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return result;
// }
// const varr = await fetchFunc();
// const varrResult = await varr.json();

// console.log(varrResult);


function loading(){
    const request = new XMLHttpRequest();
    request.onload = function(){
        console.log(this.responseText);
    }
    request.open("GET","sample.txt");
    request.send();
}
loading();
