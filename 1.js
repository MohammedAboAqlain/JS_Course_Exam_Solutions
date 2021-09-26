const mark_mass = 70;
const mark_height = 1.75;
const john_mass = 70;
const john_height = 1.77;


function computeBMI(mass, height){
    return mass / (height*height);
}

const mark_bmi = computeBMI(mark_mass, mark_height);
const john_bmi = computeBMI(john_mass, john_height);


const markGreaterThanJohn = mark_bmi > john_bmi;
console.log(`Is mark's BMI greater than John's BMI? ${markGreaterThanJohn}`);