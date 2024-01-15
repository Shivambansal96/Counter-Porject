let plus = document.querySelector("#increaseButton");
let minus = document.querySelector("#decreaseButton");
let reset = document.querySelector("#reset");
// let heading = document.querySelector("h1");



function randomColor() {
    let str = "01234456789abcdef";
    let colorStr = "#";

    for(let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * str.length);
        colorStr += str[randomIndex];
    }

    return colorStr;
}   

function add() {
    let currentValue = Number(document.querySelector("#output").innerText);

    document.querySelector("#output").innerText = currentValue + 1;

    document.querySelector("#box").style.backgroundColor = randomColor();

    document.querySelector("#output").style.color = randomColor();

    document.querySelector("body").style.backgroundColor = randomColor();

    document.querySelector("h1").style.color = randomColor();
}

function sub() {
    let currentValue = Number(document.querySelector("#output").innerText);

    document.querySelector("#output").innerText = currentValue - 1;

    document.querySelector("#box").style.backgroundColor = randomColor();

    document.querySelector("#output").style.color = randomColor();

    document.querySelector("body").style.backgroundColor = randomColor();

    document.querySelector("h1").style.color = randomColor();
}

function zerO() {
    confirm("Do you want to start the count again?");
}

plus.addEventListener("click", add);
minus.addEventListener("click", sub);
reset.addEventListener("click", zerO);


// var count = 0;

// function add() {
//     count++;

//     return count;
// }

// function sub() {
//     count--;

//     return count;
// }