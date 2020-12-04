const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score"><i class="fa fa-hand-peace-o" aria-hidden="true"></i>  ${score.name} - ${score.score}</li>`;
  })
  .join("");