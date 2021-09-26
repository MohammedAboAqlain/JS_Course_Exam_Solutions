
let score = 0;

function Question(question, answers, correct_answer){
    this.question = question;
    this.answers = answers;
    this.correct_answer = correct_answer;
}

const Q1 = new Question('Is js is the most funny language?', ['1- Yes', '2- No'], '1');
const Q2 = new Question('the name of the teacher of this course is ', ['1- John', '2- Micheal', '3- Jonas'], '3');

const questions = [Q1, Q2];


while(true){
    chosenQuestion = questions[Math.floor(Math.random()*2)];
    console.log(chosenQuestion.question);
    chosenQuestion.answers.forEach(element => {
        console.log(element);
    });
    const input = prompt('what is the correct answer?');
    if (!input) {
        continue;
    }
    if (input == 'exit') {
        break;
    }
    if (input == chosenQuestion.correct_answer) {
        score++;
        console.log('correct answer!');
    }else{
        console.log('wrong answer!');
    }
    console.log(`current score: ${score}`);
}

