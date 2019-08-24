var card = $("#placetoaddquestions");

var questions = [
  {
    question: "What is the capital city of Peru?",
    answers: ["Paris", "Venice", "Arabia", "Lima"],
    correctAnswer: "Lima"
  },
  {
    question: "Name the director of the Lord of the Rings trilogy",
    answers: ["Peter Stevenson", "Peter Jackson", "Steve Harvey", "Robert Jack"],
    correctAnswer: "Peter Jackson"
  },
  {
    question: "Which kind of bulbs were once exchanged as a form of currency? ",
    answers: ["Onion", "Tulip", "Beet", "Sage"],
    correctAnswer: "Tulip"
  },
  {
    question: "What colour is a Himalayan poppy?",
    answers: ["Lavender", "Blue", "Red", "Pink"],
    correctAnswer: "Blue"
  },
  {
    question: "Name the country where you would find the Cresta Run.",
    answers: ["Iran", "Istanbul", "Switzerland", "Canada"],
    correctAnswer: "Switzerland"
  },
  {
    question:
      "Which chess piece can only move diagonally? ",
    answers: ["Pawn", "Queen", "Bishop", "Knight"],
    correctAnswer: "Bishop"
  },
 

];


$(document).on("click", "#start", function() {
    game.start();
  });
  
  $(document).on("click", "#done", function() {
    game.done();


    var timer;

var game = {
  correct: 0,
  incorrect: 0,
  counter: 120,

  countdown: function() {
    game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      console.log("TIME UP");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);

    $("#sub-wrapper").prepend(
      "<h2>Time Remaining: <span id='counter-number'>120</span> Seconds</h2>"
    );

    $("#start").empty();

    for (var i = 0; i < questions.length; i++) {
        card.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
          card.append("<input type='radio' name='question-" + i +
            "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
        }

        var inputs = card.children("input:checked");
        for (var i = 0; i < inputs.length; i++) {
          if ($(inputs[i]).val() === questions[i].correctAnswer) {
            game.correct++;
          } else {
            game.incorrect++;
          }
      }
    }
  }

} 
