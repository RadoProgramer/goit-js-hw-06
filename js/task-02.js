const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liElements = ingredients.map(ingredient => `<li class="item">${ingredient}</li>`).join('');


document.getElementById('ingredients').innerHTML = liElements;  // Umieszczanie wszystkich elementów <li> wewnątrz listy <ul>