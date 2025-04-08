'use strict';

/*
console.log(document.querySelector('.message').textContent); // opcija za selektiranje vo () se praka selektorot i .textContent go zema tekstot od elementot

document.querySelector('.message').textContent = '🎉 Correct Number!'; // promena na tekstot vo elementot so klasata message

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // promena na vrednosta vo input poleto so klasata guess

console.log(document.querySelector('.guess').value); // zema vrednost od input poleto so klasata guess
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1); // generira random broj od 0 do 20
let score = 20; // pocetna vrednost na score

let highscore = 0; // pocetna vrednost na highscore

console.log(secretNumber); // prikazuvanje na random brojot vo konzolata

document.querySelector('.check').addEventListener('click', function(){   // dodavanje na event listener na kopceto so klasata check, koga ke se pritisne kopceto ke se povika funkcijata
    
    const guess = Number(document.querySelector('.guess').value); // zema vrednost od input poleto so klasata guess i ja smestuva vo promenlivata guess
    
    if(document.querySelector('.guess').value > 20){
        document.querySelector('.message').textContent = `The number ${document.querySelector('.guess').value} is higher than 20, please enter number between 1 and 20`; // alert so poraka koga brojot e pogolem od 20
    }


    else if(document.querySelector('.guess').value < 1){
        document.querySelector('.message').textContent = `The number ${document.querySelector('.guess').value} is lower than 1, please enter number between 1 and 20`; // alert so poraka koga brojot e pomal od 1
    }

    else if(guess === secretNumber){ // proverka dali brojot od input poleto e ednakov na random brojot
        document.querySelector('.message').textContent = '🎉 Correct Number!'; // alert so poraka koga brojot e tocno pogodok

        document.querySelector('body').style.backgroundColor = "green"; // promena na pozadinskata boja na body na zelena

        document.querySelector('.number').style.width = '30rem'; // promena na sirinata na elementot so klasata number

        document.querySelector('.number').textContent = secretNumber; // prikazuvanje na random brojot vo elementot so klasata number

        if(score > highscore){
            highscore = score; // postavuvanje na highscore na score koga score e pogolem od highscore
            document.querySelector('.highscore').textContent = highscore; // prikazuvanje na nova vrednost na highscore vo elementot so klasata highscore
        }
    }

    else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' : '📉 Too low!' ; 
        score-- // namaluvanje na score za 1
        document.querySelector('.score').textContent = score; // prikazuvanje na nova vrednost na score vo elementot so klasata score
        }
        else{ // proverka dali score e pomal ili ednakov na 0
            document.querySelector('.message').textContent = '💥 You lost the game!'; // alert so poraka koga score e pomal ili ednakov na 0
            score = -1; // postavuvanje na score na 0
            document.querySelector('body').style.backgroundColor = "red"
        }

    }

    // else if(guess > secretNumber){
    //     document.querySelector('.message').textContent = '📈 Too high!'; // alert so poraka koga brojot e pogolem od random brojot
    //     score-- // namaluvanje na score za 1
    //     document.querySelector('.score').textContent = score; // prikazuvanje na nova vrednost na score vo elementot so klasata score

    //     if(score <= 0){ // proverka dali score e pomal ili ednakov na 0
    //         document.querySelector('.message').textContent = '💥 You lost the game!'; // alert so poraka koga score e pomal ili ednakov na 0
    //         score = 1; // postavuvanje na score na 0
    //     }
    // }

    // else if ( guess < secretNumber){
    //     document.querySelector('.message').textContent = '📉 Too low!'; // alert so poraka koga brojot e pomal od random brojot
    //     score-- // namaluvanje na score za 1
    //     document.querySelector('.score').textContent = score; // prikazuvanje na nova vrednost na score vo elementot so klasata score

    //     if(score <= 0){ // proverka dali score e pomal ili ednakov na 0
    //         document.querySelector('.message').textContent = '💥 You lost the game!'; // alert so poraka koga score e pomal ili ednakov na 0
    //         score = 1; // postavuvanje na score na 0
    //         document.querySelector('body').style.backgroundColor = "red"
    //     }
    // }
});


// Coding Challenge #1
/*
Implement a game rest functionality,SO that the player can make a new guess! Here is how:
1. Select the element with the 'again'class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK
*/

document.querySelector('.again').addEventListener('click', function(){

    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1; // generira nov random broj od 0 do 20

    document.querySelector('.number').textContent = '?'; // promena na porakata vo elementot so klasata number na ?
    document.querySelector('.score').textContent = 20; // promena na vrednosta vo elementot so klasata score na 20
    document.querySelector('.guess').value = ''; // praznenje na input poleto so klasata guess

    document.querySelector('body').style.backgroundColor = "#222"; // promena na pozadinskata boja na body na #222
    document.querySelector('.number').style.width = '15rem'; // promena na sirinata na elementot so klasata number na 15rem
    document.querySelector('.message').textContent = 'Start guessing...'; // promena na porakata vo elementot so klasata message na Start guessing...

})

