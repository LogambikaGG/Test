var someName;
(function (someName) {
    someName["firstname"] = "Sowmiya";
    someName["secondName"] = "Meena";
})(someName || (someName = {}));
var value = someName.firstname;
console.log(value);
var value1 = someName["secondName"];
console.log(value1);
