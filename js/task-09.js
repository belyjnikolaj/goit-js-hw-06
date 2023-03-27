function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonСhangeColor = document.querySelector('.change-color');
const color = document.querySelector('.color');

buttonСhangeColor.addEventListener('click', changeNewColor);
function changeNewColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  color.textContent = newColor;
};







