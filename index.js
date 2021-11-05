let recognizer;

function predictWord() {
 const words = recognizer.wordLabels();
 console.log(words)
 recognizer.listen(({scores}) => {
   scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
   scores.sort((s1, s2) => s2.score - s1.score);
   document.querySelector('#console').textContent = scores[0].word.toUpperCase();
 }, {probabilityThreshold: 0.90});
}

async function app() {
 recognizer = speechCommands.create('BROWSER_FFT');
 await recognizer.ensureModelLoaded();
 predictWord();
}

app();