

function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var question6 = document.quiz.question6.value;
var question7 = document.quiz.question7.value;
var question8 = document.quiz.question8.value;
var correct = 0;

if (question1 == "Springfield") {
  correct++;
}
if (question2 == "Land of Lincoln"){
   correct++;
}
if (question3 == "Texas"){
    correct++;
}
if (question4 == "Cardinal"){
    correct++;
}
if (question5 == "Purple Violet"){
    correct++;
}
if (question6 == "Lake Michigan"){
         correct++;
}
if (question7 == "Midwest"){
          correct++;
}
if (question8 == "The Windy City"){
             correct++;
}

//var messages = ["Great job!😆", "That's just okay😕", "Not Good!😓"];
//var range;
//var pictures = ["images/view.jpeg"];
//if (correct < 1){
//  range = 1;
//}
//if (correct > 0 && correct > 8){
//  score = 2;
//}
//if (correct > 2){
//  score = 3;
//}


//document.getElementById("message").innerHTML = messages[range];
document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "You got " + correct + " out of 8 correct!";
document.getElementById("picture").src = pictures[score];
}
