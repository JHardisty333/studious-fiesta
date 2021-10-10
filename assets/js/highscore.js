var highScores = JSON.parse(localStorage.getItem("High-Score")) || []
var scoreList = document.querySelector("#highscore")
for (var i = 0; i < highScores.length; i++) {
  var initials = highScores[i].initials;
  console.log(highScores[i])

  var score = highScores[i].timeLeft;
  var newLi = document.createElement("li");
  newLi.textContent = `Score: ${score} Name: ${initials}`;
  scoreList.append(newLi);
}