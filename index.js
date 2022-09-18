const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#message");

const twoThousandCounter = document.querySelector("#twoThousand");
const fiveHundredCounter = document.querySelector("#fiveHundred");
const hundredCounter = document.querySelector("#hundred");
const twentyCounter = document.querySelector("#twenty");
const tenCounter = document.querySelector("#ten");
const fiveCounter = document.querySelector("#five");
const oneCounter = document.querySelector("#one");


checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if(billAmount.value > 0){
        if(billAmount.value > cashGiven.value){
            showMessage(`Give more cash, bill amount is ${billAmount.value}`);
        } else {
            hideMessage();
            returnAmount = cashGiven.value - billAmount.value;
            calculateChangeValues(returnAmount);
        }
    } else {
        showMessage("The value must be higher than 0 rupee")
    }
});

function calculateChangeValues(returnAmount){
    var changeCarry = returnAmount
    if(Math.trunc(changeCarry/2000) !== 0){
        twoThousandCounter.innerHTML= Math.trunc(changeCarry/2000);
        changeCarry = changeCarry%2000;
    }
    if(Math.trunc(changeCarry/500) !== 0){
        fiveHundredCounter.innerHTML= Math.trunc(changeCarry/500);
        changeCarry = changeCarry%500;
    }
    if(Math.trunc(changeCarry/100) !== 0){
        hundredCounter.innerHTML= Math.trunc(changeCarry/100);
        changeCarry = changeCarry%100;
    }
    if(Math.trunc(changeCarry/20) !== 0){
        twentyCounter.innerHTML= Math.trunc(changeCarry/20);
        changeCarry = changeCarry%20;
    }
    if(Math.trunc(changeCarry/10) !== 0){
        tenCounter.innerHTML= Math.trunc(changeCarry/10);
        changeCarry = changeCarry%10;
    }
    if(Math.trunc(changeCarry/5) !== 0){
        fiveCounter.innerHTML= Math.trunc(changeCarry/5);
        changeCarry = changeCarry%5;
    }
    if(Math.trunc(changeCarry/1) !== 0){
        oneCounter.innerHTML= Math.trunc(changeCarry/1);
        changeCarry = changeCarry%1;
    }
}


function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg){
        message.style.display = "block";
        message.innerHTML = msg; 
}