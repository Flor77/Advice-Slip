const button = document.getElementById("button");
const bubble = document.getElementById("adviceYou");
const id = document.getElementById("idAdvice")

function renderAdvice(advice, idFrom) {
  bubble.textContent = `"${advice}"`;
  id.textContent = `ADVICE #${idFrom}`;
}

async function getAdvice() {
  const url = "	https://api.adviceslip.com/advice";
  try {
    const response = await fetch(url);
    const data = await response.json();
    advice = data.slip.advice;
    idFrom = data.slip.id;
  } 
  catch (e) {}
  renderAdvice(advice, idFrom);
}

button.addEventListener("click", getAdvice);