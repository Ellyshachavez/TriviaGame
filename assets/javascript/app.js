console.log("connected")

// declare variables for timer, correct, incorrect, 
// create questions coorilating questions-answers-options in one object
// create start game function with on click event listener
//create timer function 
//set scoreboard to zero
//creat options in buttons 
//create if statement that says if answer is correct else if incorrect else timer out
$(document).ready(function () {

    $("#timer").hide();
    $("#score-board").hide();
    $("#start").on("click", startGame);
});
 

    var $app = $("app");
    var correct = 0;
    var incorrect = 0;
    var questionIndex = 0;
    var timer = 0;
    var trivia = { 
    questions: {
        qOne: "This young group often gets mistaken as the new Led Zeppelin",
        qTwo: "Has benn around since 1966, from San Francisco and is still touring",
        qThree: "LP's real name is..",
        qFour: "Kings of Leon has 9 Studio Albumns.",
        qFive: "This band did a cover of Zombies by The Cranberries.",
        qSix: "Where does the name Arteyu orignate from?",
        qSeven: "Who is the lead singer of Royal Blood",
        qEight: "The term used in the 40’s by the US Air Force for UFOs was Foo Fighters.",
  
    },
     choices: {
        qOne: ["Greta Van Fleet", "Zedd", "Black Sabbath", "Rush"],
        qTwo: ["Metallica", "Rascal Flats","Santana", "Fleetwood Mac"],
        qThree: ["Linkin Park", "Laura Pergolizzi","Land Pine","Lance Patterson"],
        qFour: ["True","False"],
        qFive: ["Wolves", "Bad Wolves", "Badflower", "Buckcherry"],
        qSix: ["After the band members", "French warrior", "Game character", "Fantasy Novel"],
        qSeven: ["Mike Kerr", "Ben Thatcher", "AJ Ghent", "Ron Gallo"],
        qEight: ["True", "False"],


     },
    answer: {
        qOne: "Greta Van Fleet",
        qTwo: "Santana",
        qThree: "Laura Pergolizzi",
        qFour: "False",
        qFive: "Bad Wolves",
        qSix: "Fantasy Novel",
        qSeven: "Mike Kerr",
        qEight: "True",
    },
 };
//  console.log(trivia.choices.qThree[2]);

//Start Game- set variables to zero
function startGame() {
    var $start = $("#start");
    $start.on("click", showQuestion);
    $app.empty();
    $app.append($start);
    correct = 0;
    incorrect = 0;
    timer = 0;
    $("#timer").show();
    $("#score-board").show();
    $("#button-color").hide();


}

function showQuestion() {
    $app.empty();
    var $q = $("#questions");
    for (var i=0; i < trivia.questions.length; i++) {
         $q = $("<h2>"+ trivia.questions[i] + "</h2>");
        trivia.questions[i].append($q);
                
    }

}

