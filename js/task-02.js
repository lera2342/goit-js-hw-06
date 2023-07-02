const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
let ul = document.querySelector('ul#ingredients');
for (let i = 0; i < ingredients.length; i++) {
  const liElement = document.createElement('li');
  liElement.classList.add('item');
  liElement.textContent = ingredients[i];
  ul.appendChild(liElement);
}