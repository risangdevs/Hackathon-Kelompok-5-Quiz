const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = Number(localStorage.getItem("mostRecentScore"));
const statusPemain = document.getElementById("statusPemain");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
var audio = document.getElementById("myaudio");
audio.volume = 0.1;
finalScore.innerText = mostRecentScore;

console.log(mostRecentScore);

nilaiPemain = Number(mostRecentScore)
if (nilaiPemain === 100) {
  statusPemain.innerHTML = 'Selamat anda admin lambe turah'
} else if (nilaiPemain >= 80 && nilaiPemain <= 90) {
  statusPemain.innerHTML = 'Selamat anda seorang K-popers'
} else if (nilaiPemain >= 60 && nilaiPemain <= 70) {
  statusPemain.innerHTML = 'Selamat anda adalah kaum rebahan'
} else if (nilaiPemain >= 30 && nilaiPemain <= 50) {
  statusPemain.innerHTML = 'Selamat anda seorang netizen budiman'
} else if (nilaiPemain >= 10 && nilaiPemain <= 20) {
  statusPemain.innerHTML = 'Selamat anda kuper'
} else if (nilaiPemain === 0) {
  statusPemain.innerHTML = 'Selamat anda manusia goa'
}


username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("index.html");
};
