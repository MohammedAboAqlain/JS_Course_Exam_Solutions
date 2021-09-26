const john_team_score_1 = 89;
const john_team_score_2 = 1120;
const john_team_score_3 = 103;
const mike_team_score_1 = 97;
const mike_team_score_2 = 134;
const mike_team_score_3 = 105;
const mary_team_score_1 = 97;
const mary_team_score_2 = 134;
const mary_team_score_3 = 105;

function computeAvg(n1, n2, n3){
    return (n1+n2+n3)/3;
}

const john_team_avg = computeAvg(john_team_score_1, john_team_score_2, john_team_score_3);
const mike_team_avg = computeAvg(mike_team_score_1, mike_team_score_2, mike_team_score_3);
const mary_team_avg = computeAvg(mary_team_score_1, mary_team_score_2, mary_team_score_3);


function whichIsWinner(avg1, avg2, avg3){
    if(avg1 > avg2){
        if(avg1 > avg3)
            return avg1;
        else
            return avg3;
    }else if(avg2 > avg3){
        return avg2;
    }else{
        return avg3;
    }
}

const winner = whichIsWinner(john_team_avg, mike_team_avg, mary_team_avg);

if(winner == john_team_avg && john_team_avg == mike_team_avg && john_team_avg == mary_team_avg){
    console.log('there is a draw...');
}else{
    if(winner == john_team_avg){
        if(winner == mike_team_avg){
            console.log('both john and mike are winners');
        }else if(winner == mary_team_avg){
            console.log('both john and mary are winners');
        }else
            console.log('john is the winner');
    }else if(winner == mike_team_avg){
        if(winner == mary_team_avg){
            console.log('both mike and mary are winners');
        }else{
            console.log('mike is the winner');
        }
    }else{
         console.log('mary is the winner');
    }
}
