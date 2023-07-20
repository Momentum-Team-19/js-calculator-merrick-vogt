// Create a calculator that can perform the simple operations +,-,*,/ with rational numbers.
// Calculator can take in multiple numbers and perform order of operations.

// collect the digits of a number in an array. 
// collect all the numbers inputed. 
// collect all the operators inputed. 
let digits = [];
let numbers =[];
let operators =[];

// document.querySelectorAll('.Buttons button') selects all the buttons inside the element 
// with the class Buttons. The buttons are retrieved as a NodeList.
const buttons = document.querySelectorAll('.Buttons button');
const answerElement = document.getElementById('screen');




// forEach is used to attach a click event listener to each button.
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonId = this.id;
        switch (buttonId) {
            case "b0":
            case "b1":
            case "b2":
            case "b3":
            case "b4":
            case "b5":
            case "b6":
            case "b7":
            case "b8":
            case "b9":
            case "b.":
                pushDigit(buttonId.slice(1));
                break;
            
            case "add":
                pushOperation("+");
                break;
            
            case "sub":
                pushOperation("-");
                break;

            case "mul":
                pushOperation("*");
                break;

            case "div":
                pushOperation("/");
                break;

            case "ce":
                clearEntry();
                break;

            case "c":
                clearAll();
                break;
                    
            case "eq":
                // collect last number before performing operations.
                equate();

                
                        
                // Perform operations * and / first. And then + and -.
                while (operators.length > 0) {

                    // Needs to check ALL multiplication and divison before moving on.
                    while (operators.includes('*') || operators.includes('/')) {

                        operators.forEach(function(operation, index, operators) {
                            
                            calculate(operation, index, operators);
                        });
                    };
                    
                    operators.forEach(function(operation, index, operators) {
                        
                        calculate(operation, index, operators);    
                    
                    });
                    
                    console.log(numbers);
                    console.log(operators);
                    
                }
                let answer = numbers[0];
                // set screen answer to answer
                answerElement.innerHTML = sassyCal() + "<br>" + answer;
                // clear answer
                numbers = [];
                
        }

        console.log(digits);
        console.log(numbers);
        console.log(operators);
    });
});
                                        
function displayAnswer() {
    answerElement.textContent = digits.join("");
}

function pushOperation(operator) {
    const combinedNumber = parseFloat(digits.join(''));
    numbers.push(combinedNumber);
    operators.push(operator);
    digits = [];
}

function pushDigit(digit) {
    digits.push(digit);
    displayAnswer();
}

function equate() {
    const combinedNumber = parseFloat(digits.join(''));
            numbers.push(combinedNumber);
            digits = [];
            console.log("perform operations");
}

function clearEntry() {
    digits = [];
    displayAnswer();
}

function clearAll() {
    digits = [];
    numbers = [];
    operators = [];
    displayAnswer();
}

function calculate(operation, index, operators) {
    tmp = 1;
    if (operation === "*") {
        tmp = numbers[index]*numbers[index+1];
    } else if (operation === "/") {
        tmp = numbers[index]/numbers[index+1];
    } else if (operation === "+") {
        tmp = numbers[index]+numbers[index+1];
    } else if (operation === "-") {
        tmp = numbers[index]-numbers[index+1];
    } else {
        tmp = 0;
    }
    numbers[index] = tmp;
    operators.splice(index, 1);
    numbers.splice(index+1, 1);
}

function sassyCal() {
    
    const randomNumber = Math.floor(Math.random() * 5);
    
    const funnyResponses = [
        "Well, well, well... Look who's got the answer! *Hair flip*",
        "Oh honey, let me drop some knowledge on you... *Snap* Here's your answer!",
        "Prepare to be dazzled by my math magic! *Throws glitter* Your answer is...",
        "Get ready for a mind-blowing revelation! *Wink* Your answer is...",
        "Hold your applause, darlings! I'm about to reveal your answer, and it's fabulous!"
      ];
      
    return funnyResponses[randomNumber];
      
}
                    