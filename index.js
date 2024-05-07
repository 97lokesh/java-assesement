//1.The class Movie is stated below. An instance of class Movie represents a film
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movieArray) {
        return movieArray.filter(movie => movie.rating === "PG");
    }
}

//Creating an instance of Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale);



//2.The UML diagram to Typescript class. - use number for double

let pi = 3.1412;

class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius() {
        return this.radius;
    }

    getColor() {
        return this.color;
    }

    getArea() {
        return pi * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * pi * this.radius;
    }
}

let a = new Circle(1.0, "red");
console.log(a.getRadius());
console.log(a.getColor());
console.log(a.getArea());
console.log(a.getCircumference());
   
   
   
   
   
 //3.A “person” class to hold all the details

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Country: ${this.country}`);
    }
}

// Create instances of the Person class
const person1 = new Person('Francisca Rohan', 25, 'USA');
const person2 = new Person('Raimond Aruna', 30, 'Netherlands');

// Display details of person1
console.log('Person-1 Details:');
person1.displayDetails();

// Display details of person2
console.log('\nPerson-2 Details:');
person2.displayDetails();


//4.A class to calculate the Uber price.

class UberPrice {
    constructor(baseprice, kilometre, tax) {
        this.baseprice = baseprice;
        this.kilometre = kilometre;
        this.tax = tax;
    }
}

const price = new UberPrice(100, 10, 200);
console.log(price); 

