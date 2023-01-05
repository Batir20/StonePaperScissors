/*const block = document.querySelector(".block");

const redp = document.createElement('p');
const blueh3 = document.createElement('h3');
const div = document.createElement('div');
const indivh1 = document.createElement('h1');
const indivp = document.createElement('p');



redp.textContent = 'Красный текст p';
blueh3.textContent = 'Синий h3';
indivh1.textContent = 'h1 в div';
indivp.textContent = 'p в div';


redp.classList.add('redp');
blueh3.classList.add('blueh3');
div.classList.add('div');
indivh1.classList.add('indivh1');
indivp.classList.add('indivp');



block.appendChild(redp);
block.appendChild(blueh3);
block.appendChild(div);
div.appendChild(indivh1);
div.appendChild(indivp);










btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    e.target.style.background = 'blue';
})*/


let endGame = 0;
let isGameStarted = false;
let playerChoise = 0;
let botChoise = 0;

let startBtn = document.querySelector('.start__btn');
let botText = document.querySelector('.bot__text');
let playerText = document.querySelector('.player__text');
let endGameText = document.querySelector('.end__text');
let playerBtn = document.querySelectorAll('.player__btn');
let body = document.body;

let stoneBtn = document.getElementById('stone')
let scissorsBtn = document.getElementById('scissors');
let paperBtn = document.getElementById('paper');






if(isGameStarted == false){
    for (let i = 0; i < playerBtn.length; i++) {
        playerBtn[i].classList.add('disabled');
    }
}
startBtn.addEventListener('click', function(){
    for (let i = 0; i < playerBtn.length; i++) {
        playerBtn[i].classList.remove('disabled');
    }
    endGameText.innerHTML = 'Игра еще не началась';
    botText.innerHTML = 'Игра еще не началась';
    playerText.innerHTML = 'Игра еще не началась';
    body.style.background = "white";
})







stoneBtn.addEventListener('click', function(){
    if(this.classList.contains('disabled')){
        alert('Кнопка деактивирована, возможно, вы ещё не начали игру или уже выбрали что-то')
    }
    else {
        playerChoise = 0;
        playerText.innerHTML = 'Вы выбрали камень';
        botChoose();
        for (let i = 0; i < playerBtn.length; i++) {
            playerBtn[i].classList.add('disabled');
        }
    }
    
})
scissorsBtn.addEventListener('click', function(){
    if(this.classList.contains('disabled')){
        alert('Кнопка деактивирована, возможно, вы ещё не начали игру или уже выбрали что-то')
    }
    else {
        playerChoise = 1;
        playerText.innerHTML = 'Вы выбрали ножницы';
        botChoose();
        for (let i = 0; i < playerBtn.length; i++) {
            playerBtn[i].classList.add('disabled');
        }
    }
})
paperBtn.addEventListener('click', function(){
    if(this.classList.contains('disabled')){
        alert('Кнопка деактивирована, возможно, вы ещё не начали игру или уже выбрали что-то')
    }
    else {
        playerChoise = 2;
        playerText.innerHTML = 'Вы выбрали бумагу';
        botChoose();
        for (let i = 0; i < playerBtn.length; i++) {
            playerBtn[i].classList.add('disabled');
        }
    }
    
})


function botChoose() {
    botChoise = Math.floor(Math.random() * 99);
    if (botChoise > 0 && botChoise < 34) {
        botText.innerHTML = 'Бот выбрал камень';
        botChoise = 0;
        console.log(botChoise);
    }
    else if (botChoise > 33 && botChoise < 67) {
        botText.innerHTML = 'Бот выбрал ножницы';
        botChoise = 1;
        console.log(botChoise);
    }
    else if (botChoise > 66 && botChoise < 100) {
        botText.innerHTML = 'Бот выбрал бумагу';
        botChoise = 2;
        console.log(botChoise);
    }
    
    
    
    if (botChoise == 0 && playerChoise == 1){
        endGameText.innerHTML = 'Поражение';
        body.style.background = "rgb(139, 61, 61)";
    }
    else if (botChoise == 1 && playerChoise == 2){
        endGameText.innerHTML = 'Поражение';
        body.style.background = "rgb(139, 61, 61)";
    }
    else if (botChoise == 2 && playerChoise == 0){
        endGameText.innerHTML = 'Поражение';
        body.style.background = "rgb(139, 61, 61)";
    }
    else if (botChoise == 1 && playerChoise == 0){
        endGameText.innerHTML = 'Победа';
        body.style.background = "rgb(61, 139, 65)";
    }
    else if (botChoise == 2 && playerChoise == 1){
        endGameText.innerHTML = 'Победа';
        body.style.background = "rgb(61, 139, 65)";
    }
    else if (botChoise == 0 && playerChoise == 2){
        endGameText.innerHTML = 'Победа';
        body.style.background = "rgb(61, 139, 65)";
    }
    else {
        endGameText.innerHTML = 'Ничья';
        body.style.background = "gray";
    }
}