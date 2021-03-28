import './styles.css';
import dish from './menu.json';
import dishCards from './dish-kards.hbs';
import './dark-light-theme';

const ulDishCardEl = document.querySelector('.js-menu');

const addCardDish = dish.map(dishCards).join('');
ulDishCardEl.innerHTML = addCardDish;
