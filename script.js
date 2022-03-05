const apiurl = "https://randomuser.me/api/?";
const wordelm = document.querySelector(".randomword");
const myWritting = document.getElementById("myWritting");
const fetchWord = () => {
  fetch(apiurl)
    .then((response) => response.json())
    .then((data) => {
      words = data.results;

      let str = "";
      words.map((word) => {
        str += `<p>${word.name.first}</p>`;
      });
      wordelm.innerHTML = str;
    });
};
fetchWord();

//to check for the similarness
let count = 0;
function checkSimilarity() {
  const target = wordelm.innerText;
  let iWrote = document.getElementById("myinput").value;
  if (target === iWrote) {
    fetchWord();
    count++;
    changeResult();
    clearValue();
    displayCorrect();
  } else {
    fetchWord();
    count--;
    changeResult();
    clearValue();
    displaywrong();
  }
}
function changeResult() {
  let myresult = document.getElementById("result");
  myresult.innerText = count;
}
function clearValue() {
  document.getElementById("myinput").value = "";
}
function displaywrong() {
  document.getElementById("myinput").style.background = "pink";
  document.getElementById("result").style.color = "red";
}
function displayCorrect() {
  document.getElementById("myinput").style.background = "white";
  document.getElementById("result").style.color = "black";
}
