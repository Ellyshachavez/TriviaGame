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
    var intervalId;
    var timerOn = false;
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
    // $start.on("click", showQuestion);
    $app.empty();
    $app.append($start);
    correct = 0;
    incorrect = 0;
    $("#quote").hide();
    $("#timer").show();
    $("#score-board").show();
    $("#button-color").hide();
    showQuestion();

}


function showQuestion() {
    $app.empty();
    timer = 20;
    timerOn = true;
    $("#instructions").hide();
    $("#count-down").text(timer);

    for (let value of Object.values(trivia.questions)[questionIndex]){
        var q = $("#questions");
        q.append(value);
    };
    $answers = $("#answers");
    questionOptions = Object.values(trivia.choices)[questionIndex];
console.log(trivia.choices[3]);
    $.each(questionOptions, function (index, key) {
      $button = $answers.append($('<button class= "option btn btn-secondary">' + key + '</button>'));
    });
    $button.on("click", );
    timerRunning();
    };
   

    function handleAnswerClick() {
        var value = $(this).text();

        var answerText = Object.values(trivia.answer)[questionIndex];
       console.log(answerText);
        if ( questionOptions === answerText) {
            console.log("congrats");
            correct++;

        } else {
            incorrect++;
        }
        results();
    }

  function timerRunning() {      
        intervalId = setInterval(twentySeconds, 1000);
        function twentySeconds() {
            if (timer === 0) {
                clearInterval(intervalId);
                incorrect++;
            }
           else if (timer > 0) {
                timer--;

            }
            results();
            // $("#count-down").text(timer);
        }
    };

    function results() {
        $("#correct").text(correct);
        $("#count-down").text(timer);
        $("#incorrect").text(incorrect);

    };