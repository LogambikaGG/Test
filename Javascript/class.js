
class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
      console.log("constructor called");
    }
    age() {
      let date = new Date(); 
      return date.getFullYear() - this.year;
    }
  }
  
  let myCar = new Car("Ford", 2014); // object creation for class
  console.log(" name: " + myCar.name + " age: " + myCar.age() + " year: " + myCar.year);
  
  