function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color')
const changeColorBtn = document.querySelector('.change-color');
const DocumentBody = document.body;

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();

  DocumentBody.style.backgroundColor = color;
  colorSpan.textContent = color;
});