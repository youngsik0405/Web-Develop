let age = 33;
let userName = 'Youngsik';
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = { 
    title: 'Developer', 
    place: 'New York', 
    salary: 50000 
};

let totalAdultYears;

function calculateAdultYears(userAge) {
    let result;
    result = userAge - 18;
    return result;
}

 
totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

let person = {
    name: 'Youngsik', // Property
    greet() { // Method
        console.log('Hello!');
    }
};

person.greet();