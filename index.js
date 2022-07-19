const selectedColor = document.querySelector("#colorPallet");
const pickedColor = document.querySelector("#colorPick");
const form = document.querySelector("#form");
const output = document.querySelector("#colorOutput");
const outputText = document.querySelector("#colorOutputText");
const colorArr = [];
const colorTextArr = [];

for (let i = 0; i < 5; i++) {
  colorArr.push(document.querySelector(`.c${i}`));
  colorTextArr.push(document.querySelector(`.c${i}text`));
}

let selectedId = "monochrome";

form.addEventListener("submit", (e) => {
  let rawColor = pickedColor.value.slice(1);
  e.preventDefault();
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${rawColor}&mode=${selectedId}&count=5`
  )
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < colorArr.length; i++) {
        colorArr[i].style.backgroundColor = data.colors[i].hex.value;
        colorTextArr[i].innerText = data.colors[i].hex.value;
      }
    });
});

selectedColor.addEventListener("change", () => {
  selectedId = selectedColor.options[selectedColor.selectedIndex].value;
});
