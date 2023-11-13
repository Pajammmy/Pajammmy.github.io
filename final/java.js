//this is for my truths and lie game

//global variable
let fname = ""

//my greet function
function greet() {
    let greetParagraph = document.getElementById("greet");

    // get values from the form
    fname = document.getElementById("fname").value;
    let lastname = document.getElementById("lastname").value;


    greetParagraph.innerHTML = "Greetings " + fname + " " + lastname + "!";
}

function teacher() {
    let teacherAnswer = document.getElementById("teacher-answer");
    // get results of selected trivia answer
    let firstSelected = document.getElementById("first").checked;
    let secondSelected = document.getElementById("second").checked;
    let thirdSelected = document.getElementById("third").checked;
    let fourthSelected = document.getElementById("fourth").checked;
    let fifthSelected = document.getElementById("fifth").checked;

    if (firstSelected & fname != "") {
        teacherAnswer.innerHTML = fname + ", your teacher is Ms. Mcqueen. Their email is smcqueen@bsd.org. Feel free to reach out to them with any questions!";

    } else if (secondSelected & fname != "") {
        teacherAnswer.innerHTML = fname + ", your teacher is Ms. Nole. Their email is hnole@bsd.org. Feel free to reach out to them with any questions!";

    } else if (thirdSelected & fname != "") {
        teacherAnswer.innerHTML = fname + ", your teacher is Ms. Lavaris. Their email is mlavaris@bsd.org. Feel free to reach out to them with any questions!";

    } else if (fourthSelected & fname != "") {
        teacherAnswer.innerHTML = fname + ", your teacher is Ms. Vale. Their email is avale@bsd.org. Feel free to reach out to them with any questions!";

    } else if (fifthSelected & fname != "") {
        teacherAnswer.innerHTML = fname + ", your teacher is Ms. Krumperman. Their email is lkrumperman@bsd.org. Feel free to reach out to them with any questions!";
    }
}