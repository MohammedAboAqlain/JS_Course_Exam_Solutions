const bills = [112, 48, 268];
let tips = [];
let final = [];

function getTipPercentage(billAmount){
    if(billAmount < 50){
        return 0.2;
    }else if (billAmount < 200){
        return 0.15;
    }else{
        return 0.1;
    }
}

function computeTips(){
    return [bills[0]*getTipPercentage(bills[0]), bills[1]*getTipPercentage(bills[1]), bills[2]*getTipPercentage(bills[2])];
}

function computeFinal(){
    return [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
}

tips = computeTips();
final = computeFinal();

console.log(bills, tips, final);
