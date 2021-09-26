const john_family_bills = [124, 48, 268, 180, 42];
let john_family_tips = [];
let john_family_final = [];
const mark_family_bills = [77, 375, 110, 45];
let mark_family_tips = [];
let mark_family_final = [];

function getJohnTipPercentage(billAmount){
    if(billAmount < 50){
        return 0.2;
    }else if (billAmount < 200){
        return 0.15;
    }else{
        return 0.1;
    }
}

function getMarkTipPercentage(billAmount){
    if(billAmount < 100){
        return 0.2;
    }else if (billAmount < 300){
        return 0.1;
    }else{
        return 0.25;
    }
}


function computeJohnTips(){
    let john_family_tips = [];
    for (let i = 0; i < john_family_bills.length; i++) {
        john_family_tips.push(john_family_bills[i]*getJohnTipPercentage(john_family_bills[i]));
    }
    return john_family_tips;
}

function computeMarkTips(){
    let mark_family_tips = [];
    for (let i = 0; i < mark_family_bills.length; i++) {
        mark_family_tips.push(mark_family_bills[i]*getMarkTipPercentage(mark_family_bills[i]));
    }
    return mark_family_tips;
}

function computeJohnFinal(){
    let john_family_final = [];
    for (let i = 0; i < john_family_bills.length; i++) {
        john_family_final.push(john_family_bills[i] + john_family_tips[i]);
    }
    return john_family_final;
}

function computeMarkFinal(){
    let mark_family_final = [];
    for (let i = 0; i < mark_family_bills.length; i++) {
        mark_family_final.push(mark_family_bills[i] + mark_family_tips[i]);
    }
    return mark_family_final;
}

john_family_tips = computeJohnTips();
john_family_final = computeJohnFinal();
mark_family_tips = computeMarkTips();
mark_family_final = computeMarkFinal();

console.log(john_family_bills, john_family_tips, john_family_final);
console.log(mark_family_bills, mark_family_tips, mark_family_final);
