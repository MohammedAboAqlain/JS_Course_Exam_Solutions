
let john = {
    full_name: 'John',
    mass: 80,
    height: 1.75,
    computeBMI(){
        return this.mass / (this.height*this.height);
    }
}

let mark = {
    full_name: 'Mark',
    mass: 80,
    height: 1.75,
    computeBMI(){
        return this.mass / (this.height*this.height);
    }
}

const john_bmi = john.computeBMI();
const mark_bmi = mark.computeBMI();

console.log(john_bmi);
console.log(mark_bmi);


if(john_bmi > mark_bmi){
    console.log('John\'s BMI is greater than Mark\'s BMI');
}else if(mark_bmi > john_bmi){
    console.log('Mark\'s BMI is greater than John\'s BMI');
} else{
    console.log('Both John and Mark have the same BMI value');
}
