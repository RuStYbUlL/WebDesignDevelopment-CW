var questionsArray = ["1. What is Kizura's real Name ?",
    "2. How Old is Kizura?",
    "3. What Are Kizura's Favorite Colours ?",
    "4. What is the Nickname of Kizura's best friend ?",
    "5. How Many Siblings Does Kizura have?",
    "6. Which is Kizura's Favorite game to play?",
    "7. Whats Kizrua's Favorite Anime?",
    "8. What is Kizura's Favorite Pokemon?",
    "9. Who is Kizura's Favorite Character from Genshin Impact?",
    "10. Which Valorant Agent Does Kizura Like to Play?"
];

var choicesArray = ["<input onclick=decreaseCounter() name=button001 type=radio id=q11 /><label for=q11 />Kizer<br><input onclick=decreaseCounter() name=button001 type=radio id=q12 /><label for=q12 />Zikini<br><input onclick=incrementCorrectCounter() name=button001 type=radio id=q13 /><label for=q13 />Zikra<br><input onclick=decreaseCounter() name=button001 type=radio id=q14 /><label for=q14 />Zebstrika<br>",
    "<input onclick=decreaseCounter() name=button002 type=radio id=q21 /><label for=q21 />29<br><input onclick=incrementCorrectCounter() name=button002 type=radio id=q22 /><label for=q22 />17<br><input onclick=decreaseCounter() name=button002 type=radio id=q23 /><label for=q23 />23<br><input onclick=decreaseCounter() name=button002 type=radio id=q24 /><label for=q24 />45<br>",
    "<input onclick=incrementCorrectCounter() name=button003 type=radio id=q31 /><label for=q31 />Black and Red<br><input onclick=decreaseCounter() name=button003 type=radio id=q32 /><label for=q32 />Pink and Green<br><input onclick=decreaseCounter() name=button003 type=radio id=q33 /><label for=q33 />Green and Black<br><input onclick=decreaseCounter() name=button003 type=radio id=q34 /><label for=q34 />Gold and Black<br>",
    "<input onclick=decreaseCounter() name=button004 type=radio id=q41 /><label for=q41 />Cookie<br><input onclick=decreaseCounter() name=button004 type=radio id=q42 /><label for=q42 />Rusty<br/><input onclick=incrementCorrectCounter() name=button004 type=radio id=q43 /><label for=q43 />Speedy<br><input onclick=decreaseCounter() name=button004 type=radio id=q44 /><label for=q44 />KizuraSG is a Loner with no Friends!<br>",
    "<input onclick=decreaseCounter() name=button005 type=radio id=q51 /><label for=q51 />0<br><input onclick=decreaseCounter() name=button005 type=radio id=q52 /><label for=q52 />1<br/><input onclick=incrementCorrectCounter() name=button005 type=radio id=q53 /><label for=q53 />2<br><input onclick=decreaseCounter() name=button005 type=radio id=q54 /><label for=q54 />3<br>",
    "<input onclick=decreaseCounter() name=button006 type=radio id=q61 /><label for=q61 />Valorant<br><input onclick=decreaseCounter() name=button006 type=radio id=q62 /><label for=q62 />OSU<br/><input onclick=decreaseCounter() name=button006 type=radio id=q63 /><label for=q63 />Genshin Impact<br><input onclick=incrementCorrectCounter() name=button006 type=radio id=q64 /><label for=q64 />Danganronpa<br>",
    "<input onclick=decreaseCounter() name=button007 type=radio id=q71 /><label for=q71 />Miss Kobayashi's Dragon Maid<br><input onclick=incrementCorrectCounter() name=button007 type=radio id=q72 /><label for=q72 />JoJo's Bizarre Adventure<br><input onclick=decreaseCounter() name=button007 type=radio id=q73 /><label for=q73 />High School DxD<br><input onclick=decreaseCounter() name=button007 type=radio id=q74 /><label for=q74 />Sword Art Online<br>",
    "<input onclick=decreaseCounter() name=button008 type=radio id=q81 /><label for=q81 />Fennekin<br><input onclick=decreaseCounter() name=button008 type=radio id=q82 /><label for=q82 />Lucario<br><input onclick=incrementCorrectCounter() name=button008 type=radio id=q83 /><label for=q83 />Zoroark<br><input onclick=decreaseCounter() name=button008 type=radio id=q84 /><label for=q84 />Alolan Ninetails<br>",
    "<input onclick=incrementCorrectCounter() name=button009 type=radio id=q91 /><label for=q91 />Ningguang<br><input onclick=decreaseCounter() name=button009 type=radio id=q92 /><label for=q92 />Zhongli<br><input onclick=decreaseCounter() name=button009 type=radio id=q93 /><label for=q93 />Paimon<br><input onclick=decreaseCounter() name=button009 type=radio id=q94 /><label for=q94 />The Traveler<br>",
    "<input onclick=decreaseCounter() name=button010 type=radio id=q101 /><label for=q101 />Jett<br><input onclick=decreaseCounter() name=button010 type=radio id=q102 /><label for=q102 />Viper<br><input onclick=decreaseCounter() name=button010 type=radio id=q103 /><label for=q103 />Kay/o<br><input onclick=incrementCorrectCounter() name=button010 type=radio id=q104 /><label for=q104 />Sage<br>"
];

var isPlaying = true;
var zQuiztotal = 0;
var index = 0;
var correctAns = 0;
var wrongAns = 0;

function chooseNextQuestion() {
    isPlaying = true;
    message001.innerHTML = questionsArray[index];
    options001.innerHTML = choicesArray[index];
    zButton.innerHTML = "<button onclick=chooseNextQuestion()>Next</button>";
    if (index == 10) {
        result001()
    }
    index++;
}

window.onload = chooseNextQuestion();

function incrementCorrectCounter() {
    zQuiztotal += 2;
    correctAns += 1
}

function decreaseCounter() {
    zQuiztotal -= 1;
    wrongAns += 1;
}

function result001() {
    message001.innerHTML = "You've Reached the End of  the Kizer Quiz";
    options001.innerHTML = "";
    if (timeturn >= 60) {
        comment002.innerHTML = "You've run out of time!";
    } else {
        comment002.innerHTML = "You took " + (60 - timeleft) + " seconds";
    }

    if (zQuiztotal <= 0) {
        comment001.innerHTML = "Your score is: 0/20";
    } else {
        comment001.innerHTML = "Your score is: " + zQuiztotal + "/20";
    }

    if (zQuiztotal >= 10) {
        document.getElementById("frame001").classList.remove('framebg');
        document.getElementById("frame001").classList.add('frameW');
    } else {
        document.getElementById("frame001").classList.remove('framebg');
        document.getElementById("frame001").classList.add('frameL');
    }

    //comment001.innerHTML = "Your score is: " + zQuiztotal;
    comment003.innerHTML = "You Answerd " + correctAns + " of the 10 Questions Correctly!";
    document.getElementById("progressBar").style.opacity = "0";
    index = 0;
    zButton.innerHTML = "<button onclick=restart()>Try Again ?</button>";
    isPlaying = false;
}

function changeBackground(color) {
    document.body.style.background = color;
}

function restart() {
    location.reload();
}

// Timer stuffs 
var timeleft = 60;
var timeturn = 0;
var zTimer = setInterval(function () {
    // If there s no time left, exit from the function.
    if (timeleft <= 0) {
        clearInterval(zTimer);

        result001();

        isPlaying = false;
    }

    // Decrement the counter of the quiz if the time is up.
    if (isPlaying) {
        document.getElementById("progressBar").value = 60 - timeleft;
        timeleft -= 1;
        timeturn++;
    } else
        document.getElementById("progressBar").value = 60;
}, 1000);

    // Button stuffs