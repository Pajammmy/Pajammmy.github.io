//this is for my truths and lie game

//global variable
let fname = ""

//my greet function
function greet() {
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    fname = document.getElementById("fname").value;
    let lastname = document.getElementById("lastname").value;


    greetParagraph.innerHTML = "Greetings " +
        " year old " + fname + " " + lastname + "!";
}

function trivia() {
    let triviaAnswer = document.getElementById("trivia-answer");
    // get results of selected trivia answer
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong";

    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong.";

    } else {
        triviaAnswer.innerHTML = fname + ", correct";
    }
}

function game() {
    let gameAnswer = document.getElementById("game-answer");
    // get results of selected trivia answer
    let obamaSelected = document.getElementById("obama").checked;
    let jayzSelected = document.getElementById("jayz").checked;
    let countrySelected = document.getElementById("country").checked;

    if (obamaSelected) {
        gameAnswer.innerHTML = fname + ", you are wrong";

    } else if (jayzSelected) {
        gameAnswer.innerHTML = fname + ", you are right.";

    } else {
        gameAnswer.innerHTML = fname + ", you are wrong";
    }
}
