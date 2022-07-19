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

form.addEventListener("submit", async (e) => {
  let rawColor = pickedColor.value.slice(1);

  e.preventDefault();

  try {
    const response = await fetch(
      `https://www.thecolorapi.com/scheme?hex=${rawColor}&mode=${selectedId}&count=5`
    );
    const data = await response.json();

    for (let i = 0; i < colorArr.length; i++) {
      colorArr[i].style.backgroundColor = data.colors[i].hex.value;
      colorTextArr[i].innerText = data.colors[i].hex.value;
    }
  } catch (error) {
    console.log(error, "Color Api Not Reachable...");
  }
});

selectedColor.addEventListener("change", () => {
  selectedId = selectedColor.options[selectedColor.selectedIndex].value;
});
