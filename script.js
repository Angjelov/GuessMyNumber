'use strict';

/*
console.log(document.querySelector('.message').textContent); // opcija za selektiranje vo () se praka selektorot i .textContent go zema tekstot od elementot

document.querySelector('.message').textContent = '🎉 Correct Number!'; // promena na tekstot vo elementot so klasata message

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // promena na vrednosta vo input poleto so klasata guess

console.log(document.querySelector('.guess').value); // zema vrednost od input poleto so klasata guess
*/

const secretNumber = Math.trunc(Math.random() * 20 + 1); // generira random broj od 0 do 20
let score = 20; // pocetna vrednost na score

console.log(secretNumber); // prikazuvanje na random brojot vo konzolata

document.querySelector('.number').textContent = secretNumber; // prikazuvanje na random brojot vo elementot so klasata number

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
    }

    else if(guess > secretNumber){
        document.querySelector('.message').textContent = '📈 Too high!'; // alert so poraka koga brojot e pogolem od random brojot
        score-- // namaluvanje na score za 1
        document.querySelector('.score').textContent = score; // prikazuvanje na nova vrednost na score vo elementot so klasata score

        if(score <= 0){ // proverka dali score e pomal ili ednakov na 0
            document.querySelector('.message').textContent = '💥 You lost the game!'; // alert so poraka koga score e pomal ili ednakov na 0
            score = 1; // postavuvanje na score na 0
        }
    }

    else if ( guess < secretNumber){
        document.querySelector('.message').textContent = '📉 Too low!'; // alert so poraka koga brojot e pomal od random brojot
        score-- // namaluvanje na score za 1
        document.querySelector('.score').textContent = score; // prikazuvanje na nova vrednost na score vo elementot so klasata score

        if(score <= 0){ // proverka dali score e pomal ili ednakov na 0
            document.querySelector('.message').textContent = '💥 You lost the game!'; // alert so poraka koga score e pomal ili ednakov na 0
            score = 1; // postavuvanje na score na 0
        }
    }
    
});
