const highScoresList = document.getElementById("highScoresList");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores

  .map((score) => {
    let nilai = Number(score.score);
    let status = "";
    if (nilai === 100) {
      status = "admin lambe turah";
    } else if (nilai >= 80 && nilai <= 90) {
      status = "K-popers";
    } else if (nilai >= 60 && nilai <= 70) {
      status = "kaum rebahan";
    } else if (nilai >= 30 && nilai <= 50) {
      status = "netizen budiman";
    } else if (nilai >= 10 && nilai <= 20) {
      status = "kuper";
    } else if (nilai === 0) {
      status = "manusia goa";
    }
    return `<li class="high-score">${score.name} - ${score.score} - ${status}</li>`;
  })
  .join("");

resetHighScore = (e) => {
  localStorage.clear();
  // isReset = true;
  highScoresList.innerHTML = "";
};
